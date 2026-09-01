const { isSudo } = require('../global');
module.exports = {
  name: 'leave',
  description: 'Fait quitter le bot.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    await sock.sendMessage(jid, { text: "👋 Au revoir ! DREADNYX s'en va." });
    await sock.groupLeave(jid);
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
