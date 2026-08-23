module.exports = {
  name: 'lyrics',
  description: 'Paroles.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    await sock.sendMessage(jid, { text: '🎵 Recherche des paroles pour : ' + args.join(' ') });
  }
};