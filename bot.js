// bot.js

const { makeWASocket, useSingleFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const { Telegraf } = require('telegraf');
const ytdl = require('ytdl-core');
const { Configuration, OpenAIApi } = require('openai');
const axios = require('axios');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

// NE JAMAIS écrire les tokens en dur dans le code : utilisez un fichier .env ou des
// variables d'environnement. Ce token a été exposé publiquement dans ce repo,
// il doit être révoqué immédiatement sur @BotFather.
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const openaiKeyProvided = OPENAI_API_KEY !== '';
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

const bot = TELEGRAM_BOT_TOKEN ? new Telegraf(TELEGRAM_BOT_TOKEN) : null;

// ======== Commandes Telegram ========
bot.command('ai', async (ctx) => {
  if (!openaiKeyProvided) return ctx.reply('Clé OpenAI non configurée (variable OPENAI_API_KEY manquante).');
  const prompt = ctx.message.text.split(' ').slice(1).join(' ');
  if (!prompt) return ctx.reply('Pose-moi une question.');
  try {
    // L'ancienne API createChatCompletion est dépréciée ; utilisez openai.chat.completions.create
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    });
    ctx.reply(response.choices[0].message.content);
  } catch (err) {
    console.error('Erreur OpenAI :', err.message);
    ctx.reply('Erreur lors de la requête OpenAI.');
  }
});

bot.command('ytmp4', async (ctx) => {
  const url = ctx.message.text.split(' ')[1];
  if (!ytdl.validateURL(url)) return ctx.reply('URL YouTube invalide.');
  try {
    const info = await ytdl.getInfo(url);
    const format = ytdl.chooseFormat(info.formats, { quality: '18' });
    ctx.replyWithVideo({ url: format.url }, { caption: info.videoDetails.title });
  } catch (err) {
    console.error('Erreur ytdl :', err.message);
    ctx.reply('Impossible de récupérer la vidéo.');
  }
});

bot.command('sticker', async (ctx) => {
  const fileId = ctx.message.reply_to_message?.photo?.pop()?.file_id;
  if (!fileId) return ctx.reply('Réponds à une image.');
  const fileLink = await ctx.telegram.getFileLink(fileId);
  ctx.replyWithSticker({ url: fileLink.href });
});

bot.command('funfact', async (ctx) => {
  try {
    const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=fr');
    ctx.reply(res.data.text);
  } catch (err) {
    console.error('Erreur funfact :', err.message);
    ctx.reply('Impossible de récupérer le funfact.');
  }
});

bot.command('tagall', async (ctx) => {
  const members = await ctx.getChatAdministrators();
  let text = 'Mention de tous :\n';
  members.forEach((m) => {
    if (m.user.username) text += `@${m.user.username} `;
  });
  ctx.reply(text);
});

bot.command('menu', (ctx) => {
  ctx.reply(`COMMANDES DISPONIBLES :
/ai
/ytmp4
/sticker
/antilink
/tagall
/funfact
/menu
/connect`);
});

bot.command('antilink', (ctx) => {
  ctx.reply('Protection anti-lien activée (simulation).');
});

bot.command('connect', (ctx) => {
  const code = `DREA-${Math.floor(1000 + Math.random() * 9000)}`;
  ctx.reply(`Voici ton code de connexion : ${code}`);
});

bot.launch();

// ======== WhatsApp (Baileys) ========
async function startWA() {
  const sock = makeWASocket({ auth: state });
  sock.ev.on('creds.update', saveState);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      if ((lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut) {
        startWA();
      }
    } else if (connection === 'open') {
      console.log('Connecté à WhatsApp');
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    try {
      const msg = messages[0];
      if (!msg.message || msg.key.fromMe) return;
      const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
      const sender = msg.key.remoteJid;

      if (text.startsWith('!ai ')) {
        if (!openaiKeyProvided) {
          await sock.sendMessage(sender, { text: 'Clé OpenAI non configurée.' });
          return;
        }
        const prompt = text.slice(4);
        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }]
        });
        await sock.sendMessage(sender, { text: response.choices[0].message.content });
    } else if (text.startsWith('!funfact')) {
      const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=fr');
      await sock.sendMessage(sender, { text: res.data.text });
    } else if (text.startsWith('!menu')) {
      await sock.sendMessage(sender, { text: 'COMMANDES : !ai, !ytmp4, !sticker, !antilink, !tagall, !funfact, !menu, !connect' });
    } else if (text.startsWith('!connect')) {
      const code = `DREA-${Math.floor(1000 + Math.random() * 9000)}`;
      await sock.sendMessage(sender, { text: `Code de connexion : ${code}` });
    }
    } catch (err) {
      console.error('Erreur lors du traitement du message WhatsApp :', err);
    }
  });
}

startWA();