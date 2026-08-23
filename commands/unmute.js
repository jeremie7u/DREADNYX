module.exports = {
  name: 'unmute',
  description: 'Ouvre le groupe à tout le monde.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    await sock.groupSettingUpdate(jid, 'not_announcement');
    await sock.sendMessage(jid, { text: '🔓 Groupe ouvert. Tout le monde peut envoyer des messages.' });
  }
};