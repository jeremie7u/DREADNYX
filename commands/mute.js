module.exports = {
  name: 'mute',
  description: 'Ferme le groupe (seuls les admins parlent).',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    await sock.groupSettingUpdate(jid, 'announcement');
    await sock.sendMessage(jid, { text: '🔒 Groupe fermé. Seuls les admins peuvent envoyer des messages.' });
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
