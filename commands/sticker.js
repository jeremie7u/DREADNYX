// Commande adaptée de ZOKOU : .sticker — convertir une image en sticker
// Répondez à une image avec .sticker
module.exports = {
  name: 'sticker',
  description: 'Convertit l\'image à laquelle vous répondez en sticker.',
  execute: async (sock, msg, args) => {
    const quotedMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg?.imageMessage) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Répondez à une image avec .sticker' });
    }
    try {
      const image = await sock.downloadMediaMessage(msg);
      await sock.sendMessage(msg.key.remoteJid, { sticker: image });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Impossible de créer le sticker.' });
    }
  }
};
