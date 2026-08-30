module.exports = {
  name: 'ghost',
  description: 'Membres inactifs.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    await sock.sendMessage(jid, { text: '👻 Analyse des fantômes en cours...' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
