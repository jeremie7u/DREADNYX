# DREADNYX

![DREADNYX](dreadnyx.jpg)

DREADNYX est un bot WhatsApp multi-appareils basé sur Node.js et Baileys. Il aide à administrer les groupes, automatiser certaines tâches et utiliser des commandes pratiques depuis WhatsApp. Une intégration WhatsApp Cloud API de Meta est également disponible pour les déploiements compatibles avec les webhooks.

Le mode `hybrid` permet de faire tourner le webhook Meta, Baileys et le bridge Telegram dans un seul service Render. **Baileys et Meta Cloud API doivent utiliser deux numéros WhatsApp différents** : un même numéro ne peut pas être connecté aux deux systèmes en même temps.

Créé par [Jeremie 7K](https://github.com/jeremie7u).

## Fonctionnalités essentielles

- Gestion et modération de groupes.
- Commandes d’information, d’administration et d’automatisation.
- Connexion WhatsApp par QR code ou code d’association en mode Baileys.
- Préfixes acceptés : `.`, `/` et `*`.
- Délai de réponse de trois secondes pour limiter les répétitions rapprochées.
- Gestion du propriétaire et des utilisateurs SUDO.
- Bridge Telegram pour les fonctions de connexion autorisées.
- Mode privé contextuel activable avec le consentement de l’utilisateur.
- Téléchargement audio/vidéo facultatif avec `yt-dlp` et FFmpeg.

## Installation rapide

### Prérequis

- Node.js 16 ou supérieur.
- Git.
- FFmpeg si les fonctions audio/vidéo sont utilisées.
- `yt-dlp` si les téléchargements multimédias sont utilisés.

```bash
git clone https://github.com/jeremie7u/DREADNYX.git
cd DREADNYX
npm ci --omit=dev
cp .env.example .env
npm start
```

Sous Windows, copiez `.env.example` vers `.env` manuellement si la commande `cp` n’est pas disponible.

## Configuration minimale

Complétez `.env` sans jamais publier ce fichier :

```env
BOT_PROVIDER=baileys
CONNECT_MODE=pairing
COMMAND_PREFIXES=.,/,*
SESSION_ID=dreadnyx-default
SESSION_DIR=auth_info_baileys
NOM_BOT=DREADNYX
NUMERO_OWNER=votre_numero_sans_plus
NOM_OWNER=votre_nom
```

Le numéro doit être au format international, sans `+`, espace ni tiret. `SESSION_ID` identifie la session Baileys ; ce n’est ni un token ni un code de connexion.

Pour utiliser l’API Cloud de Meta à la place de Baileys :

```env
BOT_PROVIDER=cloud
META_ACCESS_TOKEN=votre_token_meta
META_PHONE_NUMBER_ID=votre_phone_number_id
META_VERIFY_TOKEN=votre_token_de_verification
META_APP_SECRET=votre_app_secret
META_WEBHOOK_PORT=3000
META_WEBHOOK_HOST=0.0.0.0
```

Pour le mode hybride sur Render, utilisez `BOT_PROVIDER=hybrid`, conservez les variables `META_*`, et ajoutez les variables Baileys (`CONNECT_MODE`, `SESSION_ID`, `SESSION_DIR`, `NUMERO_OWNER`). Le numéro Baileys est connecté séparément du numéro configuré dans Meta. Ajoutez aussi `TELEGRAM_BOT_TOKEN` et `TELEGRAM_ADMIN_IDS` si le bridge Telegram est souhaité.

Les secrets Meta, Telegram et IA doivent être ajoutés dans les variables sécurisées de l’hébergeur, jamais dans GitHub ou dans `README.md`.

## Utilisation

Après la connexion WhatsApp, envoyez une commande dans une conversation ou un groupe :

```text
.menu
/ping
*groupid
.groupstats
.sudolist
.privatemode on
```

`.menu` affiche les commandes disponibles. Les commandes de groupe sensibles sont réservées au propriétaire et aux utilisateurs SUDO autorisés. Le bot doit également disposer des droits d’administration nécessaires dans le groupe.

Les commandes audio et vidéo sont optionnelles :

```text
.song nom de la chanson
.video sujet ou titre
```

Elles nécessitent `yt-dlp` et FFmpeg sur le serveur. Utilisez uniquement des contenus que vous êtes autorisé à télécharger et partager.

## Déploiement sur Render

1. Créez un **Web Service** depuis le dépôt GitHub.
2. Utilisez `npm install` comme commande de build.
3. Pour le mode Baileys seul, utilisez `npm start`. Pour Meta seul, utilisez `npm run start:cloud`. Pour les deux services dans un même Web Service, utilisez `npm run start:hybrid`.
4. Ajoutez les variables de `.env.example` dans **Environment**.
5. Définissez au minimum `COMMAND_PREFIXES=.,/,*` et un `SESSION_ID` unique. En mode hybride, ajoutez les variables Meta et Telegram nécessaires.

Le plan gratuit Render peut recréer le conteneur et supprimer les fichiers locaux de session. Une nouvelle connexion WhatsApp peut donc être nécessaire après certains redéploiements. Pour une session persistante, utilisez un stockage durable ou un VPS avec PM2.

Guide de déploiement détaillé : [GUIDE_DEPLOY.md](GUIDE_DEPLOY.md).

Un blueprint sans secrets est également fourni dans [`render.yaml`](render.yaml).

## Structure utile

| Élément | Rôle |
|---|---|
| `launcher.js` | Lance le mode Baileys et les intégrations associées |
| `cloud-start.js` | Lance le mode WhatsApp Cloud API |
| `commands/` | Commandes WhatsApp |
| `.env.example` | Modèle de configuration sans secrets |
| `data/` | Données locales du bot |

## Sécurité

Ne publiez jamais un token Telegram, un token Meta, une clé API, un code d’association WhatsApp, une clé SSH ou un fichier `.env`. Si un secret est exposé, révoquez-le immédiatement auprès du service concerné et générez-en un nouveau.

## Me contacter

- [Telegram](https://t.me/Jeremie_7k)
- [Groupe Telegram DREADNYX](https://t.me/Dreadnyxtest)
- [Channel WhatsApp](https://whatsapp.com/channel/0029VbCdHygHAdNdsHFe8p2u)
- [Groupe de support WhatsApp](https://chat.whatsapp.com/EcEtC4NNanJ9zBqqr8qFPH?s=cl&p=a&ilr=0)
- [Instagram](https://www.instagram.com/jeremie_septk)

## Licence

Distribué sous licence [MIT](LICENSE).
