module.exports = {
  name: 'lyrics',
  description: 'Paroles.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    await sock.sendMessage(jid, { text: '🎵 Recherche des paroles pour : ' + args.join(' ') });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
