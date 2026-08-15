# Guide de déploiement DREADNYX

Ce guide reproduit les méthodes de déploiement de **Zokou FRENCH V2** (Heroku, Koyeb, Render, GitHub Actions et Termux), adaptées au bot DREADNYX.

## 1. Préparer les variables d'environnement

Comme Zokou avec son `set.env`, créez un fichier `.env` à la racine du dépôt (ou saisissez les variables dans l'interface de l'hébergeur) :

```env
# Mode de connexion : qr (défaut) ou pairing (code de paire demandé dans le terminal)
CONNECT_MODE=qr

# Identité du bot
NOM_BOT=DREADNYX
PREFIXE=.

# Propriétaire (utilisé par les garde-fous du stormbot)
NUMERO_OWNER=243842068939
NOM_OWNER=jeremie

# StormBot
HEADLESS=true
ALLOWED_TARGETS=243842068939,243987391338
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
3. Plan gratuit → section **Environment Variables** → **Add from .env** → collez le `.env` de la section 1 (ajoutez `SESSION_ID` / votre session si besoin).
4. Build Command : `npm install && npm run storm:install` · Start Command : `npm start`
5. **Deploy service**.

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

> Sur Render/GitHub Actions, le dossier `auth/` est perdu entre les relances : il faudra re-scanner le QR (ou re-saisir le code de paire) à chaque redémarrage. Pour une connexion permanente, préférez un VPS.

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
