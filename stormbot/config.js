/**
 * Configuration + garde-fous du StormBot DREADNYX.
 * Réglez allowedTargets et allowedGroups pour restreindre
 * les cibles à VOS numéros et VOS groupes de test.
 */
module.exports = {
    // Nom de la session persistante (dossier .wwebjs_auth/)
    sessionName: 'dreadnyx-storm',

    // ---------- GARDE-FOUS ----------
    // Si non vide, seuls ces numéros (format international sans +) peuvent être inondés.
    // Exemple : ['243842068939', '243987391338']
    allowedTargets: [],

    // Si non vide, seuls ces groupes (id sérialisé, ex: '1234567890-1234567890@g.us') peuvent être inondés.
    allowedGroups: [],

    // Plafond absolu de messages par storm
    maxMessages: 20000,

    // ---------- DÉBIT ----------
    batchSize: 20,          // envois parallèles par batch (mode API)
    batchDelayMs: 60,       // pause entre deux batches
    turboDelayMs: 5,        // délai entre envois en mode TURBO (~150 msg/s)
    heavyPayloadCount: 20,  // nb de payloads lourds injectés en fin de storm

    // ---------- SÉLECTEURS WHATSAPP WEB ----------
    // Peuvent changer avec les mises à jour de l'UI — à ajuster si besoin.
    selectors: {
        searchBox: 'div[contenteditable="true"][data-tab="3"]',
        messageInput: 'div[contenteditable="true"][data-tab="10"]'
    }
};
