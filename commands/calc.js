module.exports = {
  name: 'calc',
  description: 'Calculatrice.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    try { const res = eval(args.join('')); await sock.sendMessage(jid, { text: '🔢 Résultat : ' + res }); }
    catch(e) { await sock.sendMessage(jid, { text: '❌ Erreur de calcul.' }); }
  }
};