const fs = require('fs');
const path = require('path');

const supported = new Map([
  ['ping', message => 'Pong — DREADNYX Cloud API est opérationnel.'],
  ['help', () => helpText()],
  ['menu', () => helpText()],
  ['uptime', () => `Uptime Cloud API : ${Math.floor(process.uptime())} secondes.`],
  ['id', message => `Votre identifiant WhatsApp Cloud est : ${message.from}`],
  ['getid', message => `Votre identifiant WhatsApp Cloud est : ${message.from}`],
  ['owner', () => 'Le propriétaire du bot est configuré côté serveur.'],
  ['say', (_message, args) => args.join(' ').slice(0, 4096) || 'Utilisation : .say votre texte'],
]);

function discoverCommands() {
  const directory = path.join(__dirname, 'commands');
  try {
    return fs.readdirSync(directory)
      .filter(file => file.endsWith('.js'))
      .map(file => file.slice(0, -3))
      .filter(name => !name.startsWith('_'))
      .sort();
  } catch {
    return [];
  }
}

function helpText() {
  const names = [...supported.keys()].map(name => `.${name}`).join(', ');
  return `DREADNYX Cloud API\n\nCommandes migrées : ${names}\n\nLes commandes de groupe, Baileys, audio, vidéo et médias restent temporairement disponibles uniquement dans le mode Baileys.`;
}

function parseCommand(text) {
  const value = String(text || '').trim();
  if (!value.startsWith('.')) return null;
  const parts = value.slice(1).split(/\s+/);
  return { name: parts.shift().toLowerCase(), args: parts };
}

async function dispatch(message) {
  const command = parseCommand(message.text);
  if (!command) {
    return `Bonjour${message.profileName ? ` ${message.profileName}` : ''} ! Je suis DREADNYX Cloud API. Écrivez .menu pour afficher les commandes disponibles.`;
  }
  const handler = supported.get(command.name);
  if (handler) return String(await handler(message, command.args));
  return `La commande .${command.name} existe dans DREADNYX Baileys, mais n'est pas encore migrée vers Cloud API. Elle reste disponible en mode Baileys.`;
}

module.exports = { dispatch, discoverCommands, supported };
