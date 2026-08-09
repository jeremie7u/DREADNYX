// Commande adaptée de ZOKOU : .ping — latence du bot
module.exports = {
  name: 'ping',
  description: 'Affiche la latence du bot (ms).',
  execute: async (sock, msg, args) => {
    const start = Date.now();
    const reply = await sock.sendMessage(msg.key.remoteJid, { text: '🏓 Pong...' });
    const latency = Date.now() - start;
    await sock.sendMessage(msg.key.remoteJid, { text: `✅ Pong ! Latence : *${latency} ms*`, quoted: reply });
  }
};
