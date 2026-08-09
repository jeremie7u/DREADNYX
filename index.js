require('dotenv').config();
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
const P = require('pino');
const readline = require('readline');

/**
 * Mode de connexion :
 *   - 'qr'     : QR code (défaut, sans saisie)
 *   - 'pairing': code de paire / "OTP" — vous entrez votre numéro dans le terminal
 *                et WhatsApp affiche un code à 8 caractères à valider sur le téléphone.
 * Configurez via la variable d'environnement CONNECT_MODE (ou le .env) :
 *   CONNECT_MODE=pairing npm start
 */
const CONNECT_MODE = (process.env.CONNECT_MODE || 'qr').toLowerCase();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

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

  // ---------- Connexion par code de paire (numéro) ----------
  if (CONNECT_MODE === 'pairing') {
    sock.ev.on('connection.update', async (update) => {
      const { connection, qr } = update;
      if (connection === 'open') {
        console.log('✅ Bot connecté avec succès (code de paire).');
        return;
      }
      if (qr) {
        // WhatsApp a émis un QR : demander le numéro pour obtenir le pairing code
        try {
          const number = await ask('\n📱 Entrez votre numéro WhatsApp avec l\'indicatif pays (ex: 243842068939) : ');
          const clean = number.replace(/[^0-9]/g, '');
          if (clean.length < 10 || clean.length > 15) {
            console.log('❌ Numéro invalide, abandon de la connexion par code.');
            process.exit(1);
          }
          const code = await sock.requestPairingCode(clean);
          console.log(`\n🔗 Votre code de paire (à valider sur le téléphone) : ${code}\n`);
          console.log('WhatsApp > Appareils liés > Lier un appareil > Lier avec un numéro');
        } catch (err) {
          console.error('Erreur lors de la connexion par code :', err.message);
          process.exit(1);
        }
      } else if (connection === 'close') {
        const reason = new Boom(update.lastDisconnect?.error)?.output?.statusCode;
        if (reason !== DisconnectReason.loggedOut) {
          console.log('Reconnexion...');
          startBot().catch(console.error);
        }
      }
    });
    return;
  }

  // ---------- Connexion par QR code (défaut) ----------
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
    const { connection, qr, lastDisconnect } = update;
    if (qr) {
      console.log('\n📱 Scannez ce QR code avec WhatsApp :\n');
      console.log(qr);
    }
    if (connection === 'close') {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      console.log('Connexion fermée, code :', reason);
      if (reason !== DisconnectReason.loggedOut) {
        console.log('Reconnexion...');
        startBot().catch(console.error);
      }
    } else if (connection === 'open') {
      console.log('✅ Bot connecté avec succès.');
    }
  });
}

startBot();
