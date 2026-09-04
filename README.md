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

## Commandes ajoutées récemment

Les commandes suivantes complètent la gestion avancée des groupes et les automatisations :

| Gestion de groupe | Automatisation |
|---|---|
| `groupid`, `groupstats`, `groupadmins`, `groupmembers`, `groupmode` | `remind`, `reminders`, `cancelreminder`, `countdown`, `scheduleopen`, `scheduleclose` |
| `groupaudit`, `tagmembers`, `groupdesc`, `grouptitle`, `memberroles` | `schedulestatus`, `canceljob`, `timezone`, `schedulemsg` |

Chaque commande reçoit un délai de trois secondes avant son exécution. Une répétition identique par le même utilisateur et dans la même conversation pendant ce délai est ignorée afin de limiter le spam. Les tâches temporisées sont conservées en mémoire ; elles doivent donc être recréées après un redémarrage du processus.

## Protection d’accès dans les groupes

Dans un groupe, l’exécution des commandes est réservée au propriétaire principal et aux utilisateurs secondaires enregistrés dans la liste SUDO. Si un autre membre tente d’utiliser une commande, le bot attend le délai anti-spam prévu puis envoie un avertissement au lieu d’ouvrir le menu ou d’exécuter la commande. Cette règle est appliquée au niveau central afin de couvrir les commandes existantes et futures.

Le contrôle ne s’applique pas aux conversations privées : les commandes de confidentialité restent disponibles en privé pour permettre à chaque utilisateur de donner ou retirer son consentement.

## Mode privé contextuel

Le bot ne lit pas les autres conversations présentes sur le téléphone de l’utilisateur. Il ne peut traiter que les messages privés envoyés directement à son propre compte WhatsApp. Par défaut, ce mode est désactivé et aucune conversation privée n’est mémorisée.

L’utilisateur doit activer explicitement le mode dans sa conversation privée avec le bot :

```text
.privatemode on
```

Après activation, DREADNYX conserve au maximum les 20 derniers messages échangés dans cette conversation afin de produire une réponse contextuelle. L’utilisateur peut consulter l’état avec `.privatememory`, désactiver le mode et effacer le contexte avec `.privatemode off`, ou supprimer immédiatement toutes ses données avec `.forgetme`. Les fichiers de mémoire sont créés dans `data/private-memory.json`, avec des permissions locales restrictives, et le dossier `data/` reste ignoré par Git.

La génération IA est désactivée par défaut. Pour l’activer sur un VPS, l’administrateur doit configurer `PRIVATE_AI_ENABLED=true`, `PRIVATE_AI_MODEL` et `OPENAI_API_KEY` dans le fichier `.env`. Les messages privés ne sont alors transmis qu’au fournisseur configuré pour générer la réponse, conformément à sa politique de confidentialité. N’activez cette option qu’après avoir informé les utilisateurs concernés.

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
- [Channel WhatsApp](https://whatsapp.com/channel/0029VbCdHygHAdNdsHFe8p2u)
- [Telegram](https://t.me/Jeremie_7k)
- [Groupe Telegram DREADNYX](https://t.me/Dreadnyxtest)
- [Groupe de support](https://chat.whatsapp.com/EcEtC4NNanJ9zBqqr8qFPH?s=cl&p=a&ilr=0)
- [Instagram](https://www.instagram.com/jeremie_septk)

---

© 2025-2026 **Jeremie** · Licence MIT
