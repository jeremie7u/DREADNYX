// Commande adaptée de ZOKOU : .tts — text-to-speech (synthèse vocale)
// Requiert : npm install google-tts-api
module.exports = {
  name: 'tts',
  description: 'Convertit du texte en message vocal (.tts <texte> [langue]).',
  execute: async (sock, msg, args) => {
    const text = args.join(' ');
    if (!text) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Usage : .tts <texte>' });
    }
    // Le dernier argument peut être un code de langue (ex: fr, en)
    const lang = /^[a-z]{2}$/.test(args[args.length - 1]) ? args.pop() : 'fr';

    let audioUrl;
    try {
      const gtts = require('google-tts-api');
      audioUrl = gtts.getAudioUrl(text, { lang, slow: false });
    } catch {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Module google-tts-api non installé : npm install google-tts-api' });
    }

    await sock.sendMessage(msg.key.remoteJid, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      ptt: true
    });
  }
};
