const ALLOWED_PREFIXES = Object.freeze(['.', '/', '*']);

function getPrefixes() {
  const configured = String(process.env.COMMAND_PREFIXES || '').split(',')
    .map(value => value.trim())
    .filter(value => ALLOWED_PREFIXES.includes(value));
  return configured.length ? [...new Set(configured)] : [...ALLOWED_PREFIXES];
}

function matchPrefix(text) {
  const value = String(text || '').trimStart();
  return getPrefixes().find(prefix => value.startsWith(prefix)) || null;
}

module.exports = { ALLOWED_PREFIXES, getPrefixes, matchPrefix };
