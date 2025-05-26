// bot.js

const { makeWASocket, useSingleFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const { Telegraf } = require('telegraf');
const ytdl = require('ytdl-core');
const { Configuration, OpenAIApi } = require('openai');
const axios = require('axios');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

const TELEGRAM_BOT_TOKEN = '7937244503:AAEFdMMd6GOsLAfS514iafvSzaDHeWX0l5g';
const openai = new OpenAIApi(new Configuration({ apiKey: 'TA_CLE_OPENAI' }));
const { state, saveState } = useSingleFileAuthState('./auth_info.json');

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

// ======== Commandes Telegram ========
bot.command('ai', async (ctx) => {
  const prompt = ctx.message.text.split(' ').slice(1).join(' ');
  if (!prompt) return ctx.reply('Pose-moi une question.');
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }]
  });
  ctx.reply(response.data.choices[0].message.content);
});

bot.command('ytmp4', async (ctx) => {
  const url = ctx.message.text.split(' ')[1];
  if (!ytdl.validateURL(url)) return ctx.reply('URL YouTube invalide.');
  ctx.replyWithVideo({ url: ytdl(url, { filter: 'videoandaudio', quality: '18' }) });
});

bot.command('sticker', async (ctx) => {
  const fileId = ctx.message.reply_to_message?.photo?.pop()?.file_id;
  if (!fileId) return ctx.reply('Réponds à une image.');
  const fileLink = await ctx.telegram.getFileLink(fileId);
  ctx.replyWithSticker({ url: fileLink.href });
});

bot.command('funfact', async (ctx) => {
  const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=fr');
  ctx.reply(res.data.text);
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
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text || '';
    const sender = msg.key.remoteJid;

    if (text.startsWith('!ai ')) {
      const prompt = text.slice(4);
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      });
      await sock.sendMessage(sender, { text: response.data.choices[0].message.content });
    } else if (text.startsWith('!funfact')) {
      const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=fr');
      await sock.sendMessage(sender, { text: res.data.text });
    } else if (text.startsWith('!menu')) {
      await sock.sendMessage(sender, { text: 'COMMANDES : !ai, !ytmp4, !sticker, !antilink, !tagall, !funfact, !menu, !connect' });
    } else if (text.startsWith('!connect')) {
      const code = `DREA-${Math.floor(1000 + Math.random() * 9000)}`;
      await sock.sendMessage(sender, { text: `Code de connexion : ${code}` });
    }
  });
}

startWA();