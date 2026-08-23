module.exports = {
  name: 'setpp',
  description: 'Change la photo.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) return sock.sendMessage(jid, { text: '❌ Répondez à une image.' });
    // Note: Logique de téléchargement simplifiée pour l'exemple
    await sock.sendMessage(jid, { text: '⚙️ Mise à jour de la photo...' });
  }
};