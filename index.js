require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
const P = require('pino');

const loadCommands = (dir) => {
  let results = [];
  if (!fs.existsSync(dir)) {
    console.warn(`Le dossier des commandes n'existe pas : ${dir}. Créez-le ou ajoutez vos commandes dedans.`);
    return results;
  }
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(loadCommands(fullPath));
    } else if (file.endsWith('.js')) {
      try {
        results.push(require(fullPath));
      } catch (err) {
        console.error(`Erreur au chargement de la commande ${file} :`, err.message);
      }
    }
  });
  return results;
};

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: P({ level: 'silent' })
  });

  sock.ev.on('creds.update', saveCreds);

  const commands = loadCommands(path.join(__dirname, 'commands'));
  console.log(`${commands.length} commande(s) chargée(s).`);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    try {
      const msg = messages[0];
      if (!msg || !msg.message || msg.key.fromMe) return;

      const body = msg.message.conversation || msg.message.extendedTextMessage?.text;
      if (!body) return;
      const prefix = '.';
      if (!body.startsWith(prefix)) return;

      const args = body.slice(prefix.length).trim().split(/ +/);
      const commandName = args.shift().toLowerCase();
      const command = commands.find(c => c && c.name === commandName);
      if (command && typeof command.execute === 'function') {
        try {
          await command.execute(sock, msg, args);
        } catch (e) {
          console.error(e);
          sock.sendMessage(msg.key.remoteJid, { text: 'Erreur d\'exécution.' }).catch(console.error);
        }
      }
    } catch (err) {
      console.error('Erreur lors du traitement du message :', err);
    }
  });

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      console.log('Connexion fermée, code :', reason);
      if (reason !== DisconnectReason.loggedOut) {
        console.log('Reconnexion...');
        startBot().catch(console.error);
      }
    } else if (connection === 'open') {
      console.log('Bot connecté avec succès.');
    }
  });

  sock.ev.on('qr', (qr) => {
    console.log('\nScannez ce QR code avec WhatsApp pour connecter le bot :\n');
    console.log(qr);
  });
}

startBot();