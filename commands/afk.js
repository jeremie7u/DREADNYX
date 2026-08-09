// Commande adaptée de ZOKOU : .afk — signaler une absence
const afkState = new Map();

module.exports = {
  name: 'afk',
  description: 'Signale votre absence (optionnel : raison). .afk retour — pour annuler.',
  execute: async (sock, msg, args) => {
    const sender = msg.key.participant || msg.key.remoteJid;
    const reason = args.join(' ') || 'Absence sans raison.';

    if (afkState.has(sender)) {
      afkState.delete(sender);
      return sock.sendMessage(msg.key.remoteJid, { text: `✅ *${sender.split('@')[0]}* est de retour !` });
    }

    afkState.set(sender, { reason, time: Date.now() });
    await sock.sendMessage(msg.key.remoteJid, { text: `😴 *${sender.split('@')[0]}* est maintenant AFK.\nRaison : ${reason}` });
  }
};
