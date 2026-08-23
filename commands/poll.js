module.exports = {
  name: 'poll',
  description: 'Crée un sondage.',
  execute: async (sock, msg, args) => {
    const jid = msg.key.remoteJid;
    if (!args[0]) return sock.sendMessage(jid, { text: 'Usage: .poll Question|Option1|Option2' });
    const [question, ...options] = args.join(' ').split('|');
    await sock.sendMessage(jid, { poll: { name: question, values: options, selectableCount: 1 } });
  }
};