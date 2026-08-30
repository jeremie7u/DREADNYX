const { isSudo } = require('../global');
module.exports = {
  name: 'broadcast',
  description: 'Diffuse un message.',
  execute: async (sock, msg, args) => {
    const sender = msg.key.participant || msg.key.remoteJid;
    if (!global.isSudo(sender)) return;
    const groups = Object.keys(await sock.groupFetchAllParticipating());
    for (let jid of groups) {
      await sock.sendMessage(jid, { text: '📢 *DIFFUSION DREADNYX*\n\n' + args.join(' ') });
    }
  }
};
// Délai humain et anti-spam appliqué au niveau central.
module.exports = require('../lib/command-delay').wrapCommand(module.exports);
