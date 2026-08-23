module.exports = {
  name: 'admins',
  description: 'Mentionne tous les administrateurs du groupe.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!jid.endsWith('@g.us')) return;
    const metadata = await sock.groupMetadata(jid);
    const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
    await sock.sendMessage(jid, { text: '🚨 *APPEL AUX ADMINS*\n\n' + (args.join(' ') || 'Action requise !'), mentions: admins });
  }
};