module.exports = {
  name: 'weather',
  description: 'Météo.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Ville ?' });
    await sock.sendMessage(jid, { text: '🌤️ Météo pour ' + args[0] + ' : 25°C, Ensoleillé.' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
