// Commande adaptée de ZOKOU : .groupe — gérer l'accès du groupe (admin requis)
// .groupe fermer | .groupe ouvrir | .groupe infos
module.exports = {
  name: 'groupe',
  description: "Gestion du groupe : .groupe fermer | .groupe ouvrir | .groupe infos",
  execute: async (sock, msg, args) => {
    const groupJid = msg.key.remoteJid;
    if (!groupJid.endsWith('@g.us')) {
      return sock.sendMessage(groupJid, { text: '❌ Cette commande fonctionne uniquement en groupe.' });
    }
    const action = (args[0] || '').toLowerCase();

    if (action === 'infos') {
      const meta = await sock.groupMetadata(groupJid);
      const text = `👥 *${meta.subject}*\n• Membres : ${meta.participants.length}\n• Créé le : ${new Date(meta.creation * 1000).toLocaleDateString('fr-FR')}`;
      return sock.sendMessage(groupJid, { text });
    }

    let setting;
    if (action === 'fermer') setting = 'locked';
    else if (action === 'ouvrir') setting = 'unlocked';
    else {
      return sock.sendMessage(groupJid, { text: '❌ Usage : .groupe fermer | .groupe ouvrir | .groupe infos' });
    }

    try {
      await sock.groupSettingUpdate(groupJid, setting);
      await sock.sendMessage(groupJid, { text: setting === 'locked' ? '🔒 Groupe fermé — seuls les admins peuvent écrire.' : '🔓 Groupe ouvert.' });
    } catch (err) {
      await sock.sendMessage(groupJid, { text: '❌ Impossible (admin requis ou permissions insuffisantes).' });
    }
  }
};
