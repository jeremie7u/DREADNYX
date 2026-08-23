module.exports = {
  name: 'inspect',
  description: "Analyse un lien d'invitation.",
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Usage: .inspect <lien>' });
    const code = args[0].split('/').pop();
    const info = await sock.groupGetInviteInfo(code);
    let text = '🔍 *INSPECTION GROUPE*\n\n';
    text += '📝 *Nom* : ' + info.subject + '\n';
    text += '🆔 *ID* : ' + info.id + '\n';
    text += '👤 *Créateur* : @' + info.owner.split('@')[0] + '\n';
    text += '👥 *Membres* : ' + info.size;
    await sock.sendMessage(jid, { text, mentions: [info.owner] });
  }
};