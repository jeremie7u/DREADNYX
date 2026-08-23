const fs = require('fs');
const path = require('path');

// Charge la configuration sans dépendances locales supprimées par l'obfuscation.
require('./settings');

function normalizeJid(value) {
  return String(value || '').split('@')[0].split(':')[0].replace(/\D/g, '');
}

function isSudo(jid) {
  const normalized = normalizeJid(jid);
  const owner = normalizeJid(global.owner);
  const sudo = Array.isArray(global.sudo) ? global.sudo : [];
  return Boolean(normalized && (normalized === owner || sudo.some((item) => normalizeJid(item) === normalized)));
}

global.isSudo = isSudo;
global.normalizeJid = normalizeJid;
global.dataDir = global.dataDir || path.join(__dirname, 'data');
fs.mkdirSync(global.dataDir, { recursive: true });

module.exports = { isSudo, normalizeJid };
