// Commande adaptée de ZOKOU : .devinette — jeu de devinettes
const riddles = [
  { q: "Je peux voler sans ailes. Qui suis-je ?", a: "un nuage" },
  { q: "Plus je sèche, plus je mouille. Qui suis-je ?", a: "une serviette" },
  { q: "J'ai des villes, mais pas de maisons. J'ai des montagnes, mais pas d'arbres. Qui suis-je ?", a: "une carte" },
  { q: "Je parle sans bouche et j'entends sans oreilles. Qui suis-je ?", a: "un écho" },
  { q: "On me coupe, on me partage, mais je ne perds jamais ma valeur. Qui suis-je ?", a: "le temps" },
  { q: "Je monte sans bouger. Qui suis-je ?", a: "l'âge" },
  { q: "J'ai 13 coeurs mais aucun autre organe. Qui suis-je ?", a: "un jeu de cartes" },
  { q: "Plus on me prend, plus je grandis. Qui suis-je ?", a: "un trou" },
];

module.exports = {
  name: 'devinette',
  description: 'Pose une devinette et révèle la réponse après 30 secondes.',
  execute: async (sock, msg, args) => {
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    await sock.sendMessage(msg.key.remoteJid, { text: `🤔 *Devinette :*\n\n${riddle.q}\n\nLa réponse dans 30 secondes...` });
    setTimeout(async () => {
      await sock.sendMessage(msg.key.remoteJid, { text: `💡 Réponse : *${riddle.a}*` });
    }, 30000);
  }
};
