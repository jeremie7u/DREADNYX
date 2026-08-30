const { isSudo } = require('../global');
module.exports = {
  name: 'clear',
  description: 'Efface le chat.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    await sock.chatModify({ delete: true, lastMessages: [{ key: msg.key, messageTimestamp: msg.messageTimestamp }] }, jid);
    await sock.sendMessage(jid, { text: '🧹 Chat nettoyé.' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
