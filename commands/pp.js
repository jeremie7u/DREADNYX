// Commande adaptée de ZOKOU : .pp — définir la photo de profil du bot
// Répondez à une image avec .pp
module.exports = {
  name: 'pp',
  description: "Définit la photo de profil du bot (répondez à une image avec .pp).",
  execute: async (sock, msg, args) => {
    const quotedMsg = msg.message.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMsg?.imageMessage) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Répondez à une image avec .pp' });
    }
    const image = await sock.downloadMediaMessage(msg);
    const botJid = (await sock.decodeJid?.(sock.user?.id)) || sock.user?.id || '';
    if (!botJid) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Impossible de déterminer le numéro du bot.' });
    }
    try {
      await sock.updateProfilePicture(botJid, image);
      await sock.sendMessage(msg.key.remoteJid, { text: '✅ Photo de profil mise à jour !' });
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Impossible de mettre à jour la photo.' });
    }
  }
};
