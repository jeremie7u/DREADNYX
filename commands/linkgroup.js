module.exports = {
  name: 'linkgroup',
  description: 'Récupère le lien.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const code = await sock.groupInviteCode(jid);
    await sock.sendMessage(jid, { text: 'https://chat.whatsapp.com/' + code });
  }
};