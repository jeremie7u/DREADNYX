// Commande : .calc <expression> — calculatrice simple (seuls + - * / ( ) et chiffres autorisés)
module.exports = {
  name: 'calculator',
  description: 'Calculatrice (.calc 2+2*3).',
  execute: async (sock, msg, args) => {
    const expr = args.join(' ').replace(/\s/g, '');
    if (!expr || !/^[\d+\-*/().]+$/.test(expr)) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Usage : .calc <expression>\nExemple : .calc (2+2)*3\nSeuls + - * / ( ) et chiffres sont autorisés.' });
    }
    if (expr.length > 100) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Expression trop longue.' });
    }
    try {
      // Évaluation sûre : uniquement des chiffres et opérateurs déjà validés par la regex
      const result = new Function(`"use strict"; return (${expr});`)();
      if (result === undefined || !isFinite(result)) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ Résultat invalide (division par zéro ?).' });
      }
      await sock.sendMessage(msg.key.remoteJid, { text: `🧮 *Calcul :*\n\n${expr} = *${result}*` });
    } catch {
      await sock.sendMessage(msg.key.remoteJid, { text: '❌ Expression invalide.' });
    }
  }
};
