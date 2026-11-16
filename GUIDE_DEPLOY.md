# Guide de déploiement DREADNYX

Ce guide reproduit les méthodes de déploiement de **Zokou FRENCH V2** (Heroku, Koyeb, Render, GitHub Actions et Termux), adaptées au bot DREADNYX.

## 1. Préparer les variables d'environnement

Comme Zokou avec son `set.env`, créez un fichier `.env` à la racine du dépôt (ou saisissez les variables dans l'interface de l'hébergeur) :

```env
# Fournisseur : baileys, cloud ou hybrid
BOT_PROVIDER=hybrid
# Le mode hybride démarre Meta Cloud API, Baileys et Telegram dans le même service
HYBRID_BAILEYS_ENABLED=true

# Mode de connexion Baileys : qr ou pairing
CONNECT_MODE=qr

# Identité du bot
NOM_BOT=DREADNYX
# Les seuls préfixes acceptés sont ., / et *
COMMAND_PREFIXES=.,/,*
# Identifiant logique de session ; ce n'est pas un token secret
SESSION_ID=dreadnyx-render
SESSION_DIR=auth_info_baileys
SETTINGS_WATCH_ENABLED=false

# Persistance de session sur Render Free via un stockage S3-compatible
SESSION_BACKUP_ENABLED=false
SESSION_BACKUP_INTERVAL_MS=60000
SESSION_BACKUP_PREFIX=dreadnyx-sessions
SESSION_BACKUP_KEY=
S3_ENDPOINT=
S3_REGION=auto
S3_BUCKET=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=

# Propriétaire (utilisé par les garde-fous du stormbot)
NUMERO_OWNER=243842068939
NOM_OWNER=jeremie

# StormBot
HEADLESS=true
ALLOWED_TARGETS=243842068939,243987391338

# Meta Cloud API : nécessaires en mode hybrid
META_ACCESS_TOKEN=
META_PHONE_NUMBER_ID=
META_VERIFY_TOKEN=
META_APP_SECRET=
META_WEBHOOK_HOST=0.0.0.0
META_WEBHOOK_PORT=10000

# Telegram : nécessaires seulement si le bridge est utilisé
TELEGRAM_BOT_TOKEN=
TELEGRAM_ADMIN_IDS=
```

> Si `CONNECT_MODE=pairing` : au démarrage, le terminal demande votre numéro, puis affiche le **code de paire à 8 caractères** à valider sur le téléphone (WhatsApp → Appareils liés → Lier un appareil → Lier avec un numéro).

## 2. Déploiement sur Heroku

1. Créez un compte sur [Heroku](https://id.heroku.com/login).
2. Cliquez sur le bouton ci-dessous (identique au bouton deploy de Zokou) :

   [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/jeremie7u/DREADNYX)

3. Ou en ligne de commande :

```bash
heroku create
git push heroku main
heroku config:set CONNECT_MODE=qr NUMERO_OWNER=243842068939
```

## 3. Déploiement sur Koyeb (Docker)

1. Créez un compte sur [Koyeb](https://dashboard.koyeb.com/signup).
2. Créez un service de type **Docker** pointant vers l'image publiée de DREADNYX, ou utilisez le bouton deploy :

```
app.koyeb.com/deploy?name=dreadnyx&type=docker&image=docker.io/<votre-dockerhub>/dreadnyx:latest&env[CONNECT_MODE]=qr&env[NUMERO_OWNER]=243842068939&env[NOM_BOT]=DREADNYX&ports=8000;http;/
```

3. Le `Dockerfile` fourni à la racine construit et lance le bot avec pm2, exactement comme le Dockerfile de Zokou.

## 4. Déploiement sur Render

1. Créez un compte sur [Render](https://dashboard.render.com).
2. Nouveau **Web Service** → **Public Git Repository** → sélectionnez `https://github.com/jeremie7u/DREADNYX`.
3. Plan gratuit → section **Environment Variables** → ajoutez les variables de la section 1. Ne mettez jamais les tokens dans GitHub.
4. Build Command : `npm install` · Start Command : `npm run start:hybrid`
5. **Deploy service**.

Le fichier `render.yaml` fournit aussi cette configuration sous forme de blueprint. Les variables marquées `sync: false` doivent être renseignées manuellement dans Render.

### Persister la session Baileys sur le plan gratuit

Le système de fichiers de Render Free est éphémère. Il ne faut donc pas compter sur `auth_info_baileys/` seul. Créez un bucket S3-compatible, par exemple Cloudflare R2, puis ajoutez dans Render :

```env
SESSION_BACKUP_ENABLED=true
SESSION_BACKUP_KEY=<64 caractères hexadécimaux générés avec : openssl rand -hex 32>
S3_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
S3_REGION=auto
S3_BUCKET=<nom-du-bucket>
S3_ACCESS_KEY_ID=<clé R2>
S3_SECRET_ACCESS_KEY=<secret R2>
```

La session est compressée puis chiffrée localement avec AES-256-GCM avant l’envoi. Le bot restaure la sauvegarde avant de charger Baileys et l’actualise périodiquement. Ne changez pas `SESSION_BACKUP_KEY` après la première sauvegarde, sinon elle ne pourra plus être déchiffrée. Ces valeurs doivent être saisies dans l’onglet **Environment** de Render, jamais dans le dépôt.

### Connexion Telegram

Le bridge Telegram est démarré automatiquement par `launcher.js` lorsque `TELEGRAM_BOT_TOKEN` est présent. Ajoutez dans Render :

```env
TELEGRAM_BOT_TOKEN=<token BotFather déjà stocké dans vos secrets>
TELEGRAM_ADMIN_IDS=<ID Telegram numérique, séparé par des virgules>
```

Le code ne contient pas le token en dur. Les commandes de gestion du bridge restent limitées à Telegram ; les commandes WhatsApp continuent d’être exécutées sur WhatsApp. Après chaque modification des variables, choisissez **Save, rebuild, and deploy**.

## 5. Déploiement par GitHub Actions (identique à Zokou)

Le fichier `.github/workflows/deploy.yml` est déjà inclus. Il démarre le bot sur les runners GitHub :

```yaml
name: Node.js CI
on:
  push:
    branches: [main]
  schedule:
    - cron: '0 */4 * * *'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20.x
      - run: sudo apt-get install -y ffmpeg
      - run: npm install -g pm2 && npm install
      - run: timeout 14520s npm start   # relance toutes les 4 heures
```

> `SESSION_ID` choisit le sous-dossier de session (`auth_info_baileys/dreadnyx-render`) et évite les collisions entre sessions. Avec `SESSION_BACKUP_ENABLED=true`, ce dossier est sauvegardé chiffré dans le bucket externe avant les recréations du conteneur.

> Important : le numéro connecté par Baileys et le numéro enregistré dans Meta Cloud API doivent être différents. Le service hybride partage le même processus Node.js, mais les deux comptes WhatsApp restent séparés.

## 6. Déploiement sur Termux (Android)

```bash
pkg install nodejs git ffmpeg -y
git clone https://github.com/jeremie7u/DREADNYX.git && cd DREADNYX
npm install && npm run storm:install
npm i -g pm2
termux-wake-lock
pm2 start index.js --name=dreadnyx
pm2 save && pm2 startup
```

## 7. VPS Linux (recommandé pour la stabilité)

```bash
sudo apt update && sudo apt install -y nodejs npm ffmpeg chromium-browser
npm i -g pm2
git clone https://github.com/jeremie7u/DREADNYX && cd DREADNYX
npm install && npm run storm:install
CHROME_PATH=$(which chromium-browser) npm start     # StormBot inclus
pm2 start index.js --name dreadnyx && pm2 save
```
