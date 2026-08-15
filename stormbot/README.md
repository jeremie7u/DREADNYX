# StormBot DREADNYX

> ⚠️ **Avertissement** : cet outil est un testeur de résilience. Il doit être utilisé **uniquement sur vos propres comptes/numéros et vos propres groupes de test**. Son utilisation sur des tiers est interdite et peut entraîner le bannissement de votre numéro WhatsApp.

## Installation

```bash
cd stormbot
npm install
npm start
```

> **Important** : StormBot repose sur `whatsapp-web.js`, qui pilote un vrai navigateur Chrome via Puppeteer. Sur un serveur sans écran (VPS, panel), le mode headless est automatique. En local, vous pouvez forcer la fenêtre visible : `HEADLESS=false npm start`.

## Commandes

| Commande | Description |
|---|---|
| `!status` | État du bot et session active |
| `!storm <numéro> [nb]` | Inondation texte rapide (défaut : 5 000 messages) |
| `!storm -u <numéro> [nb]` | Idem + payloads Unicode/emojis lourds (test du renderer) |
| `!storm -t <numéro> [nb]` | Mode TURBO : injection DOM directe (~150 msg/s) |
| `!groupstorm <nom> [nb]` | Inondation d'un groupe dont le bot est membre |
| `!stop` | Interrompt le storm en cours |

## Garde-fous

Le fichier `config.js` permet de verrouiller les cibles autorisées : remplissez `allowedTargets` (numéros au format international sans `+`) et `allowedGroups` pour refuser toute cible non listée. `maxMessages` (20 000 par défaut) plafonne chaque storm.

## Corrections appliquées par rapport au fichier d'origine

| Problème d'origine | Correction |
|---|---|
| `puppeteer` absent des dépendances → crash à l'installation | Ajouté (`^22.15.0`) |
| `headless: false` → crash sur VPS sans écran | `headless: 'new'` par défaut, contrôlable via `HEADLESS` |
| Aucune gestion des rejets/exceptions globaux | `process.on('unhandledRejection'/'uncaughtException')` ajoutés |
| Pas de chemin Chrome personnalisable | Variable `CHROME_PATH` supportée |
