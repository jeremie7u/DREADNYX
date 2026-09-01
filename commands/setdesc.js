const { isSudo } = require('../global');
module.exports = {
  name: 'setdesc',
  description: 'Change la description du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return sock.sendMessage(jid, { text: '❌ SUDO uniquement.' });
    if (!args[0]) return sock.sendMessage(jid, { text: '❌ Précisez la description.' });
    await sock.groupUpdateDescription(jid, args.join(' '));
    await sock.sendMessage(jid, { text: '✅ Description mise à jour.' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
