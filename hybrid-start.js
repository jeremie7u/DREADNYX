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

// Le serveur HTTP Render doit écouter avant les connexions WhatsApp.
require('./server');

async function start() {
  if (String(process.env.HYBRID_BAILEYS_ENABLED || 'true').toLowerCase() === 'false') {
    console.log('[Hybrid] Baileys désactivé par HYBRID_BAILEYS_ENABLED=false.');
    return;
  }

  // Sur Render Free, la session locale est éphémère. La restauration doit
  // arriver avant le chargement de l'initialisation obfusquée de Baileys.
  const sessionBackup = require('./lib/session-backup');
  await sessionBackup.start();

  // Baileys et Telegram tournent dans le même processus, mais avec leur propre session.
  require('./launcher');
  console.log('[Hybrid] Baileys et son bridge Telegram sont démarrés.');
}

start().catch((error) => {
  console.error('[Hybrid] démarrage impossible:', error.message);
  process.exitCode = 1;
});
