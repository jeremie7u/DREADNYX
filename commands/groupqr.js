module.exports = {
  name: 'groupqr',
  description: 'Envoie le QR code du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const code = await sock.groupInviteCode(jid);
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://chat.whatsapp.com/' + code;
    await sock.sendMessage(jid, { image: { url: qrUrl }, caption: '📱 QR Code du groupe' });
  }
};