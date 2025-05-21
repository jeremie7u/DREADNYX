# DREADNYX

DREADNYX est un puissant bot WhatsApp multi-fonctions conçu pour la gestion avancée de groupes, l'automatisation, LES BUGS,l'intelligence artificielle, et l'amusement. Développé avec l'API non officielle Baileys, il permet une connexion facile par QR Code ou code pair.

---

## ✅ Fonctionnalités principales

- **Modération complète** : welcome/goodbye, anti-spam, anti-lien, kick, mute, warn, etc.
- **Administration** : auto-admin, gestion des rôles, fermeture/ouverture auto, changement de nom/desc du groupe.
- **IA intégrée** : GPT-4, bot IA, génération de contenu avec `invideoai`.
- **Plugins dynamiques** : installation, suppression, liste de plugins personnalisés.
- **Multimédia** : téléchargement depuis TikTok, YouTube, Facebook, Instagram, Spotify, etc.
- **Fun & Réactions** : caliner, pleurer, embrasser, gifs, quizz, jeux de mots, énigmes.
- **Recherche Web** : Google, YouTube, APK, Stickers, Images, Sons, Vidéos...
- **Commandes avancées** : look (vue unique), save, auto-push Git, etc.
- **Personnalisation** : nom du bot, préfixes, variables Heroku, système d’avertissement.

---

## ⚙️ Installation

```bash
git clone https://github.com/jeremie7u/dreadnyx
cd dreadnyx
npm install
Obtenir dreadnyx 🛠️

Cliquez sur <Fork> pour copier le repo sur votre compte GitHub. Ajoutez une étoile 🌟 pour encourager les développeurs !

session du bot

QR-code
code d'appairage

Déploiement☄

Déploiement GitHub

Forkez le dépôt.

Modifiez le fichier exemple_de_set.env en set.env et ajoutez-y votre session_ID.

Créez un nouveau fichier .github/workflows/deploy.yml et mettez-y ce contenu :

name: Node.js CI on: push: branches: - main pull_request: branches: - main schedule: - cron: '0 */4 * * *' jobs: build: runs-on: ubuntu-latest strategy: matrix: node-version: [20.x] steps: - name: Checkout repository uses: actions/checkout@v3 - name: Set up Node.js uses: actions/setup-node@v3 with: node-version: ${{ matrix.node-version }} - name: Install ffmpeg run: | sudo apt-get update sudo apt-get install -y ffmpeg - name: Install dependencies run: | npm install -g pm2 npm install - name: Start application with timeout run: | timeout 1990s npm run dreadnyx 

Contributions 🤝

Les contributions à dreadnyx sont les bienvenues.📖📖
