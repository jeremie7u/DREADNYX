require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState } = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
const P = require('pino');

const loadCommands = (dir) => {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(loadCommands(fullPath));
    } else if (file.endsWith('.js')) {
      results.push(require(fullPath));
    }
  });
  return results;
};

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: 'silent' })
  });

  sock.ev.on('creds.update', saveCreds);

  const commands = loadCommands(path.join(__dirname, 'commands'));

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const body = msg.message.conversation || msg.message.extendedTextMessage?.text;
    const prefix = '.';
    if (!body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands.find(c => c.name === commandName);
    if (command) {
      try {
        await command.execute(sock, msg, args);
      } catch (e) {
        console.error(e);
        sock.sendMessage(msg.key.remoteJid, { text: 'Erreur d\'exécution.' });
      }
    }
  });
}

startBot();