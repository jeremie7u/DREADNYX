module.exports = {
  name: 'tagadmin',
  description: 'Mentionne les admins.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
    await sock.sendMessage(jid, { text: '🛡️ *APPEL DES GARDIENS*', mentions: admins });
  }
};