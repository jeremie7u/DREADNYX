// Exemple de commande modulaire pour DREADNYX
// Format attendu : module.exports = { name, description, execute(sock, msg, args) }

module.exports = {
  name: 'ping',
  description: "Affiche la latence du bot (exemple).",
  execute: async (sock, msg, args) => {
    const start = Date.now();
    await sock.sendMessage(msg.key.remoteJid, { text: 'Pong !' });
    console.log(`Latence : ${Date.now() - start} ms`);
  }
};
