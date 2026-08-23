module.exports = {
  name: 'everyone',
  description: 'Mentionne tous les membres du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const participants = metadata.participants.map(p => p.id);
    await sock.sendMessage(jid, { text: '📢 *APPEL À TOUS*\n\n' + (args.join(' ') || 'Regardez ici !'), mentions: participants });
  }
};