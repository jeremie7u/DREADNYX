// Commande adaptée de ZOKOU : .warn / .unwarn — avertissements (admin requis)
const warns = new Map(); // clé: "groupId/sender" → nombre

const MAX_WARNS = 3;

module.exports = {
  name: 'warn',
  description: 'Ajoute un avertissement à un membre (@mention). 3 warns = max atteint. .warn @user remove pour retirer.',
  execute: async (sock, msg, args) => {
    const groupJid = msg.key.remoteJid;
    if (!groupJid.endsWith('@g.us')) {
      return sock.sendMessage(groupJid, { text: '❌ Cette commande fonctionne uniquement en groupe.' });
    }

    const mention = (msg.message.extendedTextMessage?.contextInfo?.mentionedJid || [])[0];
    if (!mention) {
      return sock.sendMessage(groupJid, { text: '❌ Mentionnez un membre : .warn @utilisateur' });
    }
    const key = `${groupJid}/${mention}`;
    const current = warns.get(key) || 0;

    const isRemove = args.includes('remove');
    if (isRemove) {
      if (current > 0) warns.set(key, current - 1);
      return sock.sendMessage(groupJid, { text: `⚠️ Avertissement retiré. ${mention.split('@')[0]} a maintenant ${warns.get(key) || 0}/${MAX_WARNS}.` });
    }

    const next = current + 1;
    warns.set(key, next);
    if (next >= MAX_WARNS) {
      warns.delete(key);
      try {
        await sock.groupParticipantsUpdate(groupJid, [mention], 'remove');
        return sock.sendMessage(groupJid, { text: `🚫 *${mention.split('@')[0]}* a atteint ${MAX_WARNS} avertissements et a été retiré du groupe.` });
      } catch {
        return sock.sendMessage(groupJid, { text: `⚠️ *${mention.split('@')[0]}* a atteint ${MAX_WARNS} avertissements (je n'ai pas pu l'expulser, admin requis).` });
      }
    }
    await sock.sendMessage(groupJid, { text: `⚠️ Avertissement ${next}/${MAX_WARNS} pour *${mention.split('@')[0]}*.` });
  }
};
