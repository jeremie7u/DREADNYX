try {
  require('dotenv').config();
} catch {
  // En CI, les secrets sont déjà fournis par l’environnement du processus.
}

if (String(process.env.BOT_PROVIDER || '').toLowerCase() !== 'cloud') {
  throw new Error('cloud-start.js nécessite BOT_PROVIDER=cloud');
}

const { getConfig } = require('./lib/meta-cloud-api');
getConfig();
console.log('[Meta] configuration Cloud API chargée depuis les variables d’environnement.');

require('./server');
