# Migration DREADNYX vers WhatsApp Cloud API

La migration est progressive. Le mode `baileys` reste le mode par défaut afin de préserver les 109 commandes existantes.

## Lot 1 — migré

Les commandes textuelles suivantes sont disponibles avec `BOT_PROVIDER=cloud` : `.ping`, `.help`, `.menu`, `.uptime`, `.id`, `.getid`, `.owner` et `.say`.

## Lot 2 — à adapter

Les commandes qui répondent avec un texte simple peuvent être portées une par une vers un handler Cloud API. Elles doivent utiliser `meta.sendText()` au lieu de `sock.sendMessage()` et recevoir le format normalisé produit par le webhook.

## Non-transposable automatiquement

Les commandes qui dépendent de `sock`, des messages cités Baileys, des événements de présence, de la gestion détaillée d’un groupe, de l’authentification par QR/code d’association ou des formats multimédias doivent être réécrites avec les endpoints et les capacités Cloud API correspondants. Elles ne doivent pas être exécutées par le dispatcher Cloud API actuel.

## Validation

- `BOT_PROVIDER=baileys` : comportement existant conservé.
- `BOT_PROVIDER=cloud` : serveur HTTP `/webhook` et endpoint `/health`.
- Les secrets sont lus uniquement via `process.env`.
- Aucun token n’est stocké dans le dépôt.
