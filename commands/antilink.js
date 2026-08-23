module.exports = {
  name: 'antilink',
  description: 'Active/Désactive la suppression auto des liens.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const state = args[0] === 'on' ? 'activé' : 'désactivé';
    await sock.sendMessage(jid, { text: "✅ L'Anti-Link est désormais " + state + "." });
  }
};