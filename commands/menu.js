// Commande adaptée de ZOKOU : .menu — affiche la liste des commandes
module.exports = {
  name: 'menu',
  description: 'Affiche le menu complet des commandes.',
  execute: async (sock, msg, args) => {
    const commands = require('../index.js') ? null : null;
    // On charge la liste des commandes directement depuis le dossier
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(__dirname);
    const list = [];
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.js') && file !== 'menu.js') {
        try {
          const cmd = require(path.join(dir, file));
          if (cmd && cmd.name) list.push(`• .${cmd.name} — ${cmd.description || ''}`);
        } catch (_) {}
      }
    });
    const text = `🤖 *DREADNYX — Menu*\n\n${list.join('\n')}\n\nPréfixe : .`;
    await sock.sendMessage(msg.key.remoteJid, { text });
  }
};
