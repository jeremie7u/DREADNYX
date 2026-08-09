// Commande adaptée de ZOKOU : .quote — citation inspirante du jour
module.exports = {
  name: 'quote',
  description: 'Affiche une citation inspirante aléatoire.',
  execute: async (sock, msg, args) => {
    try {
      const axios = require('axios');
      const res = await axios.get('https://api.quotable.io/random?maxLength=150', { timeout: 8000 });
      const { content, author } = res.data;
      await sock.sendMessage(msg.key.remoteJid, { text: `💬 *${content}*\n\n— ${author}` });
    } catch {
      // Fallback sans API externe
      const quotes = [
        '"Le succès, c\'est tomber sept fois et se relever huit." — proverbe japonais',
        '"Ce que nous savons est une goutte, ce que nous ignorons est un océan." — Isaac Newton',
        '"La seule façon de faire du bon travail est d\'aimer ce que l\'on fait." — Steve Jobs',
        '"Ne remets pas à demain ce que tu peux faire aujourd\'hui." — Benjamin Franklin',
      ];
      await sock.sendMessage(msg.key.remoteJid, { text: '💬 ' + quotes[Math.floor(Math.random() * quotes.length)] });
    }
  }
};
