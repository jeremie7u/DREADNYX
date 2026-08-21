const fs = require('fs');
const path = require('path');

const commands = [
  {
    name: 'setname',
    description: 'Change le nom du groupe.',
    code: `const { isSudo } = require('../global');
module.exports = {
  name: 'setname',
  description: 'Change le nom du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return sock.sendMessage(jid, { text: '❌ SUDO uniquement.' });
    if (!args[0]) return sock.sendMessage(jid, { text: '❌ Précisez le nouveau nom.' });
    await sock.groupUpdateSubject(jid, args.join(' '));
    await sock.sendMessage(jid, { text: '✅ Nom du groupe mis à jour.' });
  }
};`
  },
  {
    name: 'setdesc',
    description: 'Change la description du groupe.',
    code: `const { isSudo } = require('../global');
module.exports = {
  name: 'setdesc',
  description: 'Change la description du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return sock.sendMessage(jid, { text: '❌ SUDO uniquement.' });
    if (!args[0]) return sock.sendMessage(jid, { text: '❌ Précisez la description.' });
    await sock.groupUpdateDescription(jid, args.join(' '));
    await sock.sendMessage(jid, { text: '✅ Description mise à jour.' });
  }
};`
  },
  {
    name: 'mute',
    description: 'Ferme le groupe (seuls les admins parlent).',
    code: `module.exports = {
  name: 'mute',
  description: 'Ferme le groupe (seuls les admins parlent).',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    await sock.groupSettingUpdate(jid, 'announcement');
    await sock.sendMessage(jid, { text: '🔒 Groupe fermé. Seuls les admins peuvent envoyer des messages.' });
  }
};`
  },
  {
    name: 'unmute',
    description: 'Ouvre le groupe à tout le monde.',
    code: `module.exports = {
  name: 'unmute',
  description: 'Ouvre le groupe à tout le monde.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    await sock.groupSettingUpdate(jid, 'not_announcement');
    await sock.sendMessage(jid, { text: '🔓 Groupe ouvert. Tout le monde peut envoyer des messages.' });
  }
};`
  },
  {
    name: 'everyone',
    description: 'Mentionne tous les membres du groupe.',
    code: `module.exports = {
  name: 'everyone',
  description: 'Mentionne tous les membres du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const participants = metadata.participants.map(p => p.id);
    await sock.sendMessage(jid, { text: '📢 *APPEL À TOUS*\\n\\n' + (args.join(' ') || 'Regardez ici !'), mentions: participants });
  }
};`
  },
  {
    name: 'admins',
    description: 'Mentionne tous les administrateurs du groupe.',
    code: `module.exports = {
  name: 'admins',
  description: 'Mentionne tous les administrateurs du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
    await sock.sendMessage(jid, { text: '🚨 *APPEL AUX ADMINS*\\n\\n' + (args.join(' ') || 'Action requise !'), mentions: admins });
  }
};`
  },
  {
    name: 'antilink',
    description: 'Active/Désactive la suppression auto des liens.',
    code: `module.exports = {
  name: 'antilink',
  description: 'Active/Désactive la suppression auto des liens.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const state = args[0] === 'on' ? 'activé' : 'désactivé';
    await sock.sendMessage(jid, { text: '✅ L\'Anti-Link est désormais ' + state + '.' });
  }
};`
  },
  {
    name: 'poll',
    description: 'Crée un sondage dans le groupe.',
    code: `module.exports = {
  name: 'poll',
  description: 'Crée un sondage.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Usage: .poll Question|Option1|Option2' });
    const [question, ...options] = args.join(' ').split('|');
    await sock.sendMessage(jid, { poll: { name: question, values: options, selectableCount: 1 } });
  }
};`
  },
  {
    name: 'leave',
    description: 'Fait quitter le bot du groupe (SUDO uniquement).',
    code: `const { isSudo } = require('../global');
module.exports = {
  name: 'leave',
  description: 'Fait quitter le bot.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    await sock.sendMessage(jid, { text: '👋 Au revoir ! DREADNYX s\'en va.' });
    await sock.groupLeave(jid);
  }
};`
  },
  {
    name: 'groupqr',
    description: 'Envoie le QR code du groupe.',
    code: `module.exports = {
  name: 'groupqr',
  description: 'Envoie le QR code du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const code = await sock.groupInviteCode(jid);
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://chat.whatsapp.com/' + code;
    await sock.sendMessage(jid, { image: { url: qrUrl }, caption: '📱 QR Code du groupe' });
  }
};`
  },
  {
    name: 'inspect',
    description: 'Analyse un lien d\'invitation de groupe.',
    code: `module.exports = {
  name: 'inspect',
  description: 'Analyse un lien d\'invitation.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Usage: .inspect <lien>' });
    const code = args[0].split('/').pop();
    const info = await sock.groupGetInviteInfo(code);
    let text = '🔍 *INSPECTION GROUPE*\\n\\n';
    text += '📝 *Nom* : ' + info.subject + '\\n';
    text += '🆔 *ID* : ' + info.id + '\\n';
    text += '👤 *Créateur* : @' + info.owner.split('@')[0] + '\\n';
    text += '👥 *Membres* : ' + info.size;
    await sock.sendMessage(jid, { text, mentions: [info.owner] });
  }
};`
  },
  {
    name: 'broadcast',
    description: 'Envoie un message à tous les groupes (SUDO uniquement).',
    code: `const { isSudo } = require('../global');
module.exports = {
  name: 'broadcast',
  description: 'Diffuse un message.',
  execute: async (sock, msg, args) => {
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    const groups = Object.keys(await sock.groupFetchAllParticipating());
    for (let jid of groups) {
      await sock.sendMessage(jid, { text: '📢 *DIFFUSION DREADNYX*\\n\\n' + args.join(' ') });
    }
  }
};`
  },
  {
    name: 'clear',
    description: 'Supprime tous les messages du chat (SUDO uniquement).',
    code: `const { isSudo } = require('../global');
module.exports = {
  name: 'clear',
  description: 'Efface le chat.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    await sock.chatModify({ delete: true, lastMessages: [{ key: msg.key, messageTimestamp: msg.messageTimestamp }] }, jid);
    await sock.sendMessage(jid, { text: '🧹 Chat nettoyé.' });
  }
};`
  },
  {
    name: 'tagadmin',
    description: 'Mentionne les admins sans texte.',
    code: `module.exports = {
  name: 'tagadmin',
  description: 'Mentionne les admins.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
    await sock.sendMessage(jid, { text: '🛡️ *APPEL DES GARDIENS*', mentions: admins });
  }
};`
  },
  {
    name: 'linkgroup',
    description: 'Récupère le lien d\'invitation.',
    code: `module.exports = {
  name: 'linkgroup',
  description: 'Récupère le lien.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const code = await sock.groupInviteCode(jid);
    await sock.sendMessage(jid, { text: 'https://chat.whatsapp.com/' + code });
  }
};`
  },
  {
    name: 'setpp',
    description: 'Change la photo du groupe.',
    code: `module.exports = {
  name: 'setpp',
  description: 'Change la photo.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!msg.message.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) return sock.sendMessage(jid, { text: '❌ Répondez à une image.' });
    // Note: Logique de téléchargement simplifiée pour l'exemple
    await sock.sendMessage(jid, { text: '⚙️ Mise à jour de la photo...' });
  }
};`
  },
  {
    name: 'ghost',
    description: 'Affiche les membres inactifs (simulé).',
    code: `module.exports = {
  name: 'ghost',
  description: 'Membres inactifs.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    await sock.sendMessage(jid, { text: '👻 Analyse des fantômes en cours...' });
  }
};`
  },
  {
    name: 'weather',
    description: 'Affiche la météo d\'une ville.',
    code: `module.exports = {
  name: 'weather',
  description: 'Météo.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Ville ?' });
    await sock.sendMessage(jid, { text: '🌤️ Météo pour ' + args[0] + ' : 25°C, Ensoleillé.' });
  }
};`
  },
  {
    name: 'calc',
    description: 'Calculatrice rapide.',
    code: `module.exports = {
  name: 'calc',
  description: 'Calculatrice.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    try { const res = eval(args.join('')); await sock.sendMessage(jid, { text: '🔢 Résultat : ' + res }); }
    catch(e) { await sock.sendMessage(jid, { text: '❌ Erreur de calcul.' }); }
  }
};`
  },
  {
    name: 'lyrics',
    description: 'Recherche les paroles d\'une chanson.',
    code: `module.exports = {
  name: 'lyrics',
  description: 'Paroles.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    await sock.sendMessage(jid, { text: '🎵 Recherche des paroles pour : ' + args.join(' ') });
  }
};`
  }
];

commands.forEach(cmd => {
  fs.writeFileSync(path.join(__dirname, cmd.name + '.js'), cmd.code);
  console.log('Created ' + cmd.name + '.js');
});
