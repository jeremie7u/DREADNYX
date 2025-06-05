// akaranshield.js
const { default: makeWASocket, useSingleFileAuthState, delay, DisconnectReason } = require('@whiskeysockets/baileys');
const P = require('pino');
const crypto = require('crypto');
const fs = require('fs');
const { Boom } = require('@hapi/boom');

const { state, saveState } = useSingleFileAuthState('./auth.json');
const password = 'DREADNYX'; //

const whitelist = ['243998195408@s.whatsapp.net']; // Ton numéro ici
const bannedWords = ['porn', 'spam', 'http://wa.me', 'joinchat', 'nude', 'hack'];
const cooldowns = new Map();

function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const key = crypto.createHash('sha256').update(password).digest();
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

function decrypt(text) {
    if (!text.includes(':')) return '';
    const [ivHex, encrypted] = text.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const key = crypto.createHash('sha256').update(password).digest();
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
}

async function startBot() {
    console.log('Démarrage du bot...');
    const sock = makeWASocket({
        logger: P({ level: 'silent' }),
        printQRInTerminal: true,
        auth: state,
        browser: ['DREADNYX-SPY', 'Chrome', '5.0']
    });

    sock.ev.on('messages.upsert', async ({ messages }) => {
        console.log('Message reçu.');
        const msg = messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const sender = msg.key.remoteJid;
        const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
        const timestamp = new Date().toISOString();

        console.log(`Message de ${sender} : ${text}`);

        const logData = `${timestamp} | ${sender} | ${text}
`;
        const encrypted = encrypt(logData);
        fs.appendFileSync('spy_logs.enc', encrypted + '
');

        if (!whitelist.includes(sender)) {
            if (bannedWords.some(w => text.toLowerCase().includes(w))) {
                console.log('Message interdit détecté.');
                await sock.sendMessage(sender, { text: 'Contenu interdit détecté.' });
                return;
            }

            const now = Date.now();
            if (cooldowns.has(sender) && now - cooldowns.get(sender) < 10000) {
                console.log('Spam détecté, envoi bloqué.');
                await sock.sendMessage(sender, { text: 'Trop de messages. Attends 10s.' });
                return;
            }
            cooldowns.set(sender, now);
        }

        if (text.toLowerCase().startsWith('!ping')) {
            console.log('Commande !ping détectée');
            await delay(Math.floor(Math.random() * 1500) + 500);
            await sock.sendMessage(sender, { text: 'Pong sécurisé (furtif).' });
        }

        if (text.toLowerCase().startsWith('!audio')) {
            console.log('Commande !audio détectée');
            const filePath = './spy_audio.ogg';
            await sock.sendMessage(sender, {
                audio: fs.readFileSync(filePath),
                mimetype: 'audio/ogg',
                ptt: true
            });
        }
    });

    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        console.log('Mise à jour de la connexion :', connection);
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log('Connexion fermée, raison :', reason);
            if (reason === DisconnectReason.loggedOut) {
                console.log('Déconnecté. QR requis.');
            } else {
                console.log('Reconnexion...');
                startBot();
            }
        }
    });

    sock.ev.on('creds.update', () => {
        console.log('Mise à jour des identifiants.');
        saveState();
    });
}

startBot();
