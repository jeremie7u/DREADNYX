try {
  require('dotenv').config();
} catch {
  // Render fournit déjà les variables d’environnement au processus.
}

const provider = String(process.env.BOT_PROVIDER || '').toLowerCase();
if (provider !== 'hybrid') {
  throw new Error('hybrid-start.js nécessite BOT_PROVIDER=hybrid');
}

const { getConfig } = require('./lib/meta-cloud-api');
getConfig();
console.log('[Hybrid] configuration Meta Cloud API validée.');

// Le webhook Meta occupe le port HTTP public de Render.
require('./cloud-entry');

if (String(process.env.HYBRID_BAILEYS_ENABLED || 'true').toLowerCase() !== 'false') {
  // Baileys et Telegram tournent dans le même processus, mais avec leur propre session.
  require('./launcher');
  console.log('[Hybrid] Baileys et son bridge Telegram sont démarrés.');
} else {
  console.log('[Hybrid] Baileys désactivé par HYBRID_BAILEYS_ENABLED=false.');
}
