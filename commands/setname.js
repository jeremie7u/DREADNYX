const { isSudo } = require('../global');
module.exports = {
  name: 'setname',
  description: 'Change le nom du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return sock.sendMessage(jid, { text: '❌ SUDO uniquement.' });
    if (!args[0]) return sock.sendMessage(jid, { text: '❌ Précisez le nouveau nom.' });
    await sock.groupUpdateSubject(jid, args.join(' '));
    await sock.sendMessage(jid, { text: '✅ Nom du groupe mis à jour.' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
