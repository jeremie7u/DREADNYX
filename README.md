# DREADNYX

<div align="center">

![banner](dreadnyx.jpg)

**Bot WhatsApp multi-device** construit avec [Baileys](https://github.com/WhiskeySockets/Baileys) et [Node.js](https://nodejs.org/).

[![Stars](https://img.shields.io/github/stars/jeremie7u/DREADNYX?style=flat-square&color=yellow)](https://github.com/jeremie7u/DREADNYX/stargazers)
[![Forks](https://img.shields.io/github/forks/jeremie7u/DREADNYX?style=flat-square&color=green)](https://github.com/jeremie7u/DREADNYX/network/members)
[![Taille](https://img.shields.io/github/repo-size/jeremie7u/DREADNYX?style=flat-square&color=blue)](https://github.com/jeremie7u/DREADNYX)
[![Version](https://img.shields.io/github/package-json/v/jeremie7u/DREADNYX?style=flat-square&color=red)](https://github.com/jeremie7u/DREADNYX/blob/main/package.json)
[![Licence](https://img.shields.io/github/license/jeremie7u/DREADNYX?style=flat-square)](https://github.com/jeremie7u/DREADNYX/blob/main/LICENSE)

Créé par [jeremie7u](https://github.com/jeremie7u) · N'oubliez pas de laisser une étoile ! ⭐

</div>

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Système de commandes](#système-de-commandes)
- [Configuration](#configuration)
- [Problèmes connus et solutions](#problèmes-connus-et-solutions)
- [Sécurité](#sécurité)
- [Me contacter](#me-contacter)

## Fonctionnalités

- Connexion WhatsApp via **QR code** (Baileys multi-device)
- Système de **commandes modulaires** : chaque commande est un fichier `.js` dans le dossier `commands/`
- **Reconnexion automatique** en cas de déconnexion
- Chargement dynamique des commandes avec gestion d'erreurs (une commande cassée ne fait plus tomber tout le bot)
- Support multi-langages et scripts de crash-testing (voir `crasher.js`)
- Exemples de scripts Python et Node pour l'automatisation

## Installation

### Pré-requis

| Dépendance | Pourquoi |
|---|---|
| [Node.js](https://nodejs.org/) ≥ 16 | Runtime JavaScript |
| [Git](https://git-scm.com/downloads) | Cloner le dépôt |
| [FFmpeg](https://ffmpeg.org/download.html) | Traitement audio/vidéo |
| Un éditeur de texte | Modifier la configuration |

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/jeremie7u/DREADNYX.git
cd DREADNYX

# 2. Installer les dépendances
npm install

# 3. Démarrer le bot
npm start
```

Au premier démarrage, un **QR code** s'affiche dans le terminal : scannez-le avec WhatsApp (Paramètres → Appareils liés → Lier un appareil).

### Activation 24/7 (Termux)

```bash
npm i -g pm2
termux-wake-lock
pm2 start index.js --name=dreadnyx
pm2 save
pm2 startup
```

## Utilisation

Le bot écoute les messages commençant par `.`. Ajoutez vos commandes dans le dossier `commands/` :

```js
// commands/ping.js — exemple
module.exports = {
  name: 'ping',
  description: 'Affiche la latence du bot.',
  execute: async (sock, msg, args) => {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Pong !' });
  }
};
```

## Configuration

| Fichier | Rôle |
|---|---|
| `settings.js` | Numéro du propriétaire, liens, messages prédéfinis |
| `index.js` | Point d'entrée principal du bot |
| `package.json` | Dépendances et scripts npm |
| `crasher.js` | Module de crash-testing (importé par bot.js) |
| `commands/` | Dossier des commandes modulaires |

## Problèmes connus et solutions

| Problème | Solution |
|---|---|
| `MODULE_NOT_FOUND: dotenv` | Exécuter `npm install` après le clone |
| `Cannot find module '@adiwajshing/baileys'` | Le package `@adiwajshing/baileys` n'est plus maintenu (dernière version 5.0.0). Le projet utilise désormais `@whiskeysockets/baileys` |
| SyntaxError dans `settings.js` | Corrigé : l'objet `global.msg` manquait son accolade ouvrante `{` |
| Le dossier `commands/` est vide | Créer le dossier et y ajouter des fichiers `.js` au format montré plus haut |
| Les fichiers du dossier `all/` sont absents | `crasher.js` dépend du dossier `all/` (functions, database, converters) qui n'est pas inclus dans ce dépôt. Copiez-le depuis votre installation complète |

## Sécurité

> ⚠️ **Important** : ne commitez jamais de tokens, clés API ou numéros de téléphone en clair dans le code.
> `bot.js` contenait un token Telegram bot exposé publiquement — il a été remplacé par une lecture depuis la variable d'environnement `TELEGRAM_BOT_TOKEN`. **Révoquez l'ancien token immédiatement** sur [@BotFather](https://t.me/BotFather).

Utilisez un fichier `.env` (déjà supporté via `dotenv`) pour vos valeurs sensibles :

```env
TELEGRAM_BOT_TOKEN=votre_token_ici
OPENAI_API_KEY=votre_cle_ici
```

## Me contacter

- [YouTube](https://www.youtube.com/@Honor%C3%A9%C3%89minent)
- [Channel WhatsApp](https://whatsapp.com/channel/0029Vb5ZMUJJUM2bhqMKPH1H)
- [Telegram](https://t.me/Jeremie_7k)
- [Groupe de support](https://chat.whatsapp.com/C6pWKvDfFRTAXScxTGFqvP)
- [Instagram](https://www.instagram.com/jeremie_septk)

---

© 2025-2026 **Jeremie** · Licence MIT

## Nouveautés v3.0.2

- **Connexion par code de paire (OTP)** : démarrez avec `CONNECT_MODE=pairing npm start`, entrez votre numéro dans le terminal et validez le code à 8 caractères sur votre téléphone. Le QR code reste le mode par défaut.
- **10 nouvelles commandes inspirées de ZOKOU** (réécrites proprement pour DREADNYX) : `.menu`, `.ping`, `.afk`, `.warn`, `.pp`, `.groupe`, `.play`, `.tts`, `.devinette`, `.sticker`, `.quote`
- **Module StormBot** (`stormbot/`) : testeur de résilience WhatsApp basé sur whatsapp-web.js (voir `stormbot/README.md`)
- **Déploiement identique à Zokou** : Heroku (app.json), Koyeb (Docker), Render, GitHub Actions, Termux — voir `GUIDE_DEPLOY.md`

### Installation des commandes optionnelles

```bash
npm install ytdl-core yt-search google-tts-api   # .play, .tts
npm run storm:install                              # StormBot (Puppeteer + Chrome)
```
