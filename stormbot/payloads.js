/**
 * Payloads de rendu lourds — testent la résilience du moteur
 * de rendu texte/emoji du client (Android + iOS).
 * Tous restent sous la limite de taille d'un message WhatsApp (~65 Ko).
 */
const heavyPayloads = [
    '\u202E'.repeat(5000) + 'A',          // override bidirectionnel massif
    '\u202A\u202C'.repeat(2500),          // embed/dir switches en boucle
    '👨‍👩‍👧‍👦'.repeat(700),              // séquences ZWJ familiales
    '🇫🇷'.repeat(1500),                    // drapeaux (paires d'indicateurs régionaux)
    '😀'.repeat(4000),                     // emojis simples en masse
    '\u200D'.repeat(2500) + 'x',          // ZWJ seuls
    'ي'.repeat(6000),                     // glyphes arabes (shaping complexe)
    '𒀀'.repeat(2000),                     // cunéiformes (paires de surrogates, 4 octets)
    '🧑‍💻'.repeat(1000),                    // ZWJ moderne multi-composants
    '\u061C\u200E\u200F'.repeat(1500),   // marques directionnelles (ALM/LRM/RLM)
    'a\u0300\u0301\u0302'.repeat(2000),  // empilement de diacritiques combinants
    '\uFE0F'.repeat(4000),                // variation selectors
];

/**
 * Génère un message d'emojis lourds aléatoire.
 */
function emojiPayload() {
    const pool = ['🔥', '💥', '⚡', '😱', '🚀', '💀', '🎯', '🧨'];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    return pick.repeat(1500 + Math.floor(Math.random() * 2000));
}

module.exports = { heavyPayloads, emojiPayload };
