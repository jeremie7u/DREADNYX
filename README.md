# DREADNYX

<div align="center">

![DREADNYX](dreadnyx.jpg)

**Bot WhatsApp multi-appareils pour la gestion de groupes, l’automatisation et l’administration privée.**

[![Stars](https://img.shields.io/github/stars/jeremie7u/DREADNYX?style=flat-square&color=yellow)](https://github.com/jeremie7u/DREADNYX/stargazers)
[![Forks](https://img.shields.io/github/forks/jeremie7u/DREADNYX?style=flat-square&color=green)](https://github.com/jeremie7u/DREADNYX/network/members)
[![Version](https://img.shields.io/github/package-json/v/jeremie7u/DREADNYX?style=flat-square&color=red)](https://github.com/jeremie7u/DREADNYX/blob/main/package.json)
[![Licence](https://img.shields.io/github/license/jeremie7u/DREADNYX?style=flat-square)](https://github.com/jeremie7u/DREADNYX/blob/main/LICENSE)

Créé par [Jeremie 7K](https://github.com/jeremie7u)

</div>

## Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Connexion WhatsApp](#connexion-whatsapp)
- [Utilisation](#utilisation)
- [Commandes](#commandes)
- [Administration et SUDO](#administration-et-sudo)
- [Mode privé contextuel](#mode-privé-contextuel)
- [Déploiement permanent](#déploiement-permanent)
- [Configuration](#configuration)
- [Sécurité](#sécurité)
- [Me contacter](#me-contacter)

## Présentation

DREADNYX est un bot WhatsApp multi-appareils construit avec [Baileys](https://github.com/WhiskeySockets/Baileys) et [Node.js](https://nodejs.org/). Son architecture modulaire permet de gérer des groupes, d’exécuter des automatisations, de contrôler les accès et de connecter une session WhatsApp depuis Telegram.

Les commandes utilisent le préfixe `.` et sont organisées par catégories dans le menu du bot.

## Fonctionnalités

DREADNYX propose notamment :

- Une connexion WhatsApp par QR code ou code d’association.
- Une reconnexion automatique et une session multi-appareils persistante.
- Un système de commandes modulaires chargé depuis le dossier `commands/`.
- Des outils de modération et d’administration avancés pour les groupes.
- Un système multi-utilisateur propriétaire/SUDO.
- Des automatisations de rappels, de compte à rebours et d’ouverture ou fermeture programmée des groupes.
- Un bridge Telegram réservé à la connexion et à la gestion des sessions WhatsApp.
- Un menu avec identité visuelle, lien Telegram et contenu multimédia.
- Un mode privé contextuel activable avec le consentement explicite de l’utilisateur.
- Une protection des commandes de groupe réservée au propriétaire et aux utilisateurs secondaires autorisés.

## Installation

### Prérequis

| Dépendance | Utilité |
|---|---|
| [Node.js](https://nodejs.org/) 16 ou supérieur | Exécution du bot |
| [Git](https://git-scm.com/downloads) | Téléchargement du projet |
| [FFmpeg](https://ffmpeg.org/download.html) | Traitement des contenus audio et vidéo |
| Un compte Telegram | Utilisation du bridge de connexion, si activé |

### Installation locale ou sur VPS

```bash
git clone https://github.com/jeremie7u/DREADNYX.git
cd DREADNYX
npm ci --omit=dev
cp .env.example .env
npm start
```

Le fichier `.env` doit être complété localement et ne doit jamais être publié dans le dépôt.

## Déploiement avec GitHub Actions

Le dépôt contient un workflow GitHub Actions dans `.github/workflows/deploy.yml`. Il vérifie le code, installe les dépendances et démarre DREADNYX pour un test distant. Le workflow peut être lancé automatiquement après un `push` sur `main` ou manuellement depuis l’onglet **Actions** du dépôt.

### Préparer les secrets GitHub

Dans GitHub, ouvrez **Settings → Secrets and variables → Actions → New repository secret**, puis ajoutez les variables suivantes :

| Secret | Valeur |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Token du bot Telegram |
| `TELEGRAM_ADMIN_IDS` | Identifiants Telegram autorisés, séparés par des virgules |
| `PRIVATE_AI_ENABLED` | `true` uniquement si le mode IA privé est activé |
| `PRIVATE_AI_MODEL` | Par exemple `gpt-5-mini` |
| `OPENAI_API_KEY` | Clé du fournisseur IA, uniquement si nécessaire |
| `OPENAI_API_BASE` | Adresse de l’API, si elle diffère de la valeur par défaut |

Les secrets ne doivent jamais être placés directement dans `README.md`, `settings.js`, un fichier `.env` versionné ou une commande affichée dans les journaux.

### Lancer le workflow

1. Ouvrez l’onglet **Actions** du dépôt [`jeremie7u/DREADNYX`](https://github.com/jeremie7u/DREADNYX/actions).
2. Sélectionnez **DREADNYX Telegram/WhatsApp test**.
3. Cliquez sur **Run workflow**, choisissez la branche `main`, puis confirmez.
4. Consultez les journaux des étapes **Install Node dependencies**, **Validate JavaScript** et **Start application for manual test**.
5. Si le bridge Telegram est configuré, utilisez ensuite `/connect` dans Telegram pour demander l’association WhatsApp.

### Limite du workflow GitHub Actions

GitHub Actions sert ici à tester et démarrer temporairement le bot. Ce n’est pas un service d’hébergement permanent : le job s’arrête à l’expiration de sa durée maximale ou lorsque GitHub termine l’exécution. Pour une disponibilité continue, déployez le même dépôt sur un VPS avec PM2 ou sur une plateforme persistante compatible avec Node.js. La session WhatsApp et les dossiers de données doivent être conservés sur un stockage persistant.

La méthode générale reste similaire à celle des déploiements de bots WhatsApp comme Zokou : dépôt GitHub, variables d’environnement, installation Node.js et point d’entrée JavaScript. Elle n’est toutefois pas strictement identique, car DREADNYX utilise son propre workflow, son bridge Telegram et une architecture `launcher.js`/Baileys différente.

## Connexion WhatsApp

Au premier démarrage, DREADNYX peut utiliser le QR code affiché dans le terminal. Lorsque le bridge Telegram est activé, l’association peut également être demandée depuis le bot Telegram avec la commande :

```text
/connect
```

Le numéro WhatsApp doit être saisi au format international, sans `+`, espace ni tiret. Le code d’association reçu doit rester privé et ne doit jamais être transmis à une autre personne.

## Utilisation

Les commandes sont exécutées avec le préfixe `.`. Quelques exemples :

```text
.menu
.groupid
.groupstats
.sudolist
.privatemode
```

Le menu présente les fonctionnalités disponibles et leurs catégories. Les commandes qui modifient les réglages d’un groupe nécessitent que le bot dispose des droits d’administration nécessaires.

## Commandes

### Gestion de groupe

| Commandes | Utilité |
|---|---|
| `.groupid` | Affiche l’identifiant du groupe |
| `.groupstats` | Affiche les statistiques du groupe |
| `.groupadmins` | Liste les administrateurs |
| `.groupmembers` | Liste les membres |
| `.groupmode` | Affiche les réglages du groupe |
| `.groupaudit` | Effectue un audit de sécurité |
| `.tagmembers` | Mentionne les membres ciblés |
| `.groupdesc` | Affiche la description du groupe |
| `.grouptitle` | Affiche le nom du groupe |
| `.memberroles` | Affiche le rôle des membres ciblés |

### Automatisation

| Commandes | Utilité |
|---|---|
| `.remind` | Programme un rappel |
| `.reminders` | Affiche les rappels actifs |
| `.cancelreminder` | Annule un rappel |
| `.countdown` | Lance un compte à rebours |
| `.scheduleopen` | Programme l’ouverture du groupe |
| `.scheduleclose` | Programme la fermeture du groupe |
| `.schedulestatus` | Affiche les tâches programmées |
| `.canceljob` | Annule une tâche |
| `.timezone` | Définit ou affiche le fuseau horaire |
| `.schedulemsg` | Programme un message |

Chaque commande utilise un délai de trois secondes afin de limiter les répétitions rapprochées et de préserver une utilisation ordonnée du bot.

## Administration et SUDO

Le propriétaire principal peut gérer les utilisateurs secondaires autorisés :

```text
.addsudo numéro
.delsudo numéro
.sudolist
```

Dans un groupe, les commandes sont réservées au propriétaire principal et aux utilisateurs enregistrés dans la liste SUDO. Les autres membres reçoivent un message d’information au lieu d’ouvrir le menu ou d’exécuter une commande.

## Mode privé contextuel

Le mode privé est désactivé par défaut. Il ne peut traiter que les messages envoyés directement au compte WhatsApp du bot ; il ne donne pas accès aux autres conversations présentes sur le téléphone de l’utilisateur.

L’utilisateur peut activer le mode dans sa conversation privée avec le bot :

```text
.privatemode on
```

Après activation, DREADNYX utilise un contexte limité aux 20 derniers messages de cette conversation pour améliorer la cohérence des réponses. Les commandes de contrôle sont :

```text
.privatemode on
.privatemode off
.privatememory
.forgetme
```

`.privatemode off` désactive le mode et efface le contexte. `.forgetme` supprime toutes les données contextuelles associées à la conversation.

La génération IA reste facultative et peut être activée sur le serveur avec les variables d’environnement prévues dans `.env.example`.

## Déploiement permanent

Pour une exécution continue, utilisez un VPS Ubuntu avec Node.js et PM2 :

```bash
npm install --global pm2
pm2 start launcher.js --name dreadnyx
pm2 save
pm2 startup
```

Les dossiers de session WhatsApp et de données doivent rester présents sur le serveur afin de conserver l’association et les réglages du bot.

## Configuration

| Élément | Rôle |
|---|---|
| `settings.js` | Propriétaire, SUDO, liens et paramètres du bot |
| `launcher.js` | Démarrage du bridge WhatsApp et Telegram |
| `commands/` | Commandes modulaires |
| `data/command-categories.json` | Catégories affichées dans le menu |
| `.env` | Variables sensibles et options de services |
| `package.json` | Dépendances et scripts du projet |

Exemple de variables d’environnement :

```env
TELEGRAM_BOT_TOKEN=votre_token_telegram
TELEGRAM_ADMIN_IDS=identifiant_telegram
PRIVATE_AI_ENABLED=false
PRIVATE_AI_MODEL=gpt-5-mini
OPENAI_API_KEY=votre_cle_si_necessaire
OPENAI_API_BASE=https://api.openai.com/v1
```

## Sécurité

Ne publiez jamais de token Telegram, de clé API, de code d’association WhatsApp, de clé privée SSH ou de fichier `.env` dans un dépôt public. Utilisez les secrets du serveur ou les variables sécurisées de votre plateforme de déploiement.

Les utilisateurs doivent être informés avant l’activation du mode privé contextuel et doivent pouvoir désactiver ce mode ou supprimer leur contexte avec les commandes prévues.

## Me contacter

- [YouTube](https://www.youtube.com/@Honor%C3%A9%C3%89minent)
- [Channel WhatsApp](https://whatsapp.com/channel/0029VbCdHygHAdNdsHFe8p2u)
- [Telegram](https://t.me/Jeremie_7k)
- [Groupe Telegram DREADNYX](https://t.me/Dreadnyxtest)
- [Groupe de support WhatsApp](https://chat.whatsapp.com/EcEtC4NNanJ9zBqqr8qFPH?s=cl&p=a&ilr=0)
- [Instagram](https://www.instagram.com/jeremie_septk)

---

© 2025–2026 **Jeremie 7K** · Licence MIT
