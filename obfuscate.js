#!/usr/bin/env node
/**
 * Script d'obfuscation de DREADNYX.
 * Usage : node obfuscate.js
 * Obfuscate les fichiers JS du repo (hors stormbot/ et node_modules)
 * et écrit les versions obfusquées à la place.
 */
const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

// --- Fichiers à obfusquer (code source du bot) ---
const FILES = [
  'index.js',
  'crasher.js',
  'bot.js',
  'akaranshield.js',
  'malwarepuissant-acj.js',
  'commands/admin.js',
  'commands/choose.js',
  'commands/emojimix.js',
  'commands/getlink.js',
  'commands/hidetag.js',
  'commands/joke.js',
  'commands/news.js',
  'commands/revoke.js',
  'commands/ssweb.js',
  'commands/top.js',
  'commands/translate.js',
'commands/afk.js',
  'commands/devinette.js',
  'commands/groupe.js',
  'commands/quote.js',
  'commands/sticker.js',
  'commands/warn.js',
  'commands/play.js',
  'commands/tts.js',
  'commands/antilink.js',
  'commands/gimage.js',
  'commands/infobot.js',
  'commands/menu.js',
  'commands/owner.js',
  'commands/ping.js',
  'commands/reboot.js',
  'commands/say.js',
  'commands/tagall.js',
  'commands/toimg.js',
  'commands/uptime.js',
  'commands/_group-utils.js',
  'commands/demoteall.js',
  'commands/promotehere.js',
  'commands/demotehere.js',
  'commands/setrules.js',
  'commands/rules.js',
  'commands/welcome.js',
  'commands/goodbye.js',
  'commands/slowmode.js',
  'commands/lockmedia.js',
  'commands/slowannounce.js',
  'commands/snapshot.js',
  'commands/auditadmins.js',
  'commands/membercount.js',
  'commands/randommember.js',
  'commands/rotateadmin.js',
  'commands/silenttag.js',
  'commands/mentionadmins.js',
  'commands/grouphealth.js',
  'commands/emergencylock.js',
  'commands/emergencyunlock.js',
  'commands/membercard.js',
  // Les 5 commandes "sociales" restent volontairement lisibles :
  // afk, devinette, groupe, sticker, warn (elles ne contiennent aucun secret).
];

// --- options strictement non destructives pour la logique ---
const OPTIONS = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.75,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.3,
  stringArray: true,
  stringArrayThreshold: 1,
  rotateStringArray: true,
  splitStrings: false,           // garder les chaînes entières (pas de coupure)
  unicodeEscapeSequence: false,
  stringArrayEncoding: ['base64'],
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: true,
  // Protéger les identifiants critiques de Node.js / CommonJS
  reservedNames: [
    'module', 'exports', 'require', 'global', 'console', 'process',
    '__dirname', '__filename',
    'setTimeout', 'setInterval', 'clearTimeout', 'Buffer',
    'Map', 'Promise', 'Date', 'Error', 'Object', 'Array',
    'parseInt', 'parseFloat', 'Math', 'RegExp', 'JSON', 'String', 'Number',
    'fs', 'path', 'os', 'axios', 'qs',
    'sock', 'msg', 'args', 'makeWASocket', 'useMultiFileAuthState'
  ],
  target: 'node',
  debugProtection: false,        // true casserais la reconnexion readline — reste off
  disableConsoleOutput: false    // garder les logs de démarrage
};

let ok = 0;
let fail = 0;
for (const rel of FILES) {
  const full = path.join(__dirname, rel);
  if (!fs.existsSync(full)) {
    console.log(`[SKIP] ${rel} (introuvable)`);
    fail++;
    continue;
  }
  const code = fs.readFileSync(full, 'utf8');
  try {
    const result = JavaScriptObfuscator.obfuscate(code, OPTIONS);
    // Vérification de syntaxe de la sortie
    new Function(result.getObfuscatedCode());
    fs.writeFileSync(full, result.getObfuscatedCode(), 'utf8');
    console.log(`[OK] ${rel} (${result.getObfuscatedCode().length} chars)`);
    ok++;
  } catch (err) {
    console.error(`[FAIL] ${rel} : ${err.message}`);
    fail++;
  }
}
console.log(`\nObfusqué : ${ok} fichiers | Échoués : ${fail}`);
