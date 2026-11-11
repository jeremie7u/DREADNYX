try {
  require('dotenv').config();
} catch {
  // Render fournit déjà les variables d’environnement.
}

const express = require('express');
const crypto = require('crypto');
const meta = require('./lib/meta-cloud-api');
const { dispatch } = require('./cloud-commands');

const app = express();
const port = Number(process.env.PORT || 10000);
const host = process.env.RENDER_EXTERNAL_HOSTNAME ? '0.0.0.0' : (process.env.META_WEBHOOK_HOST || '0.0.0.0');
const maxBodyBytes = 1024 * 1024;
const replyDelayMs = Math.max(0, Number(process.env.META_REPLY_DELAY_MS || 3000));
const processedMessageIds = new Map();

app.disable('x-powered-by');
app.use(express.json({
  limit: maxBodyBytes,
  verify: (request, response, buffer) => {
    request.rawBody = buffer;
  },
}));

function hasAlreadyProcessed(messageId) {
  if (!messageId) return false;
  const now = Date.now();
  for (const [id, timestamp] of processedMessageIds) {
    if (now - timestamp > 10 * 60 * 1000) processedMessageIds.delete(id);
  }
  if (processedMessageIds.has(messageId)) return true;
  processedMessageIds.set(messageId, now);
  return false;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function verifySignature(rawBody, signature, appSecret) {
  if (!appSecret) return true;
  const expected = `sha256=${crypto.createHmac('sha256', appSecret).update(rawBody).digest('hex')}`;
  const received = String(signature || '');
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(received);
  return expectedBuffer.length === receivedBuffer.length && crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

async function handleTextMessage(message) {
  if (hasAlreadyProcessed(message.id)) return;
  await delay(replyDelayMs);
  const reply = await dispatch(message);
  if (reply) await meta.sendText(message.from, reply);
}

app.get('/', (request, response) => response.status(200).send('DREADNYX Bot en ligne'));
app.get('/health', (request, response) => response.status(200).json({ ok: true, provider: process.env.BOT_PROVIDER || 'baileys' }));

app.get('/webhook', (request, response) => {
  const challenge = meta.verifyWebhook(request.query);
  if (challenge === null) return response.status(403).send('Forbidden');
  return response.type('text').send(challenge);
});

app.post('/webhook', (request, response) => {
  const rawBody = request.rawBody || Buffer.from(JSON.stringify(request.body || {}));
  if (!verifySignature(rawBody, request.headers['x-hub-signature-256'], process.env.META_APP_SECRET || '')) {
    return response.status(401).send('Invalid signature');
  }

  response.status(200).send('EVENT_RECEIVED');
  for (const message of meta.extractMessages(request.body)) {
    handleTextMessage(message).catch(error => console.error('[Meta] traitement impossible:', error.message));
  }
});

const server = app.listen(port, host, () => {
  console.log(`[Render] serveur HTTP en écoute sur ${host}:${port}`);
  console.log('[Render] routes disponibles: /, /health, /webhook');
});

server.on('error', error => {
  console.error(`[Render] impossible d’écouter sur ${host}:${port}:`, error.message);
  process.exitCode = 1;
});

module.exports = { app, server };
