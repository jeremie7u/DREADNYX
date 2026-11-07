const http = require('http');
const { URL } = require('url');
const meta = require('./lib/meta-cloud-api');
const { dispatch } = require('./cloud-commands');

const port = Number(process.env.PORT || process.env.META_WEBHOOK_PORT || 3000);
const host = process.env.META_WEBHOOK_HOST || '0.0.0.0';
const maxBodyBytes = 1024 * 1024;
const replyDelayMs = Math.max(0, Number(process.env.META_REPLY_DELAY_MS || 3000));
const processedMessageIds = new Map();

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

function readBody(request) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    request.on('data', chunk => {
      size += chunk.length;
      if (size > maxBodyBytes) {
        reject(new Error('Webhook payload too large'));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on('end', () => resolve(Buffer.concat(chunks)));
    request.on('error', reject);
  });
}

function sendJson(response, status, payload) {
  const body = JSON.stringify(payload);
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  response.end(body);
}

async function handleTextMessage(message) {
  if (hasAlreadyProcessed(message.id)) return;
  await delay(replyDelayMs);
  const reply = await dispatch(message);
  if (reply) await meta.sendText(message.from, reply);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);

    if (request.method === 'GET' && url.pathname === '/webhook') {
      const challenge = meta.verifyWebhook(Object.fromEntries(url.searchParams.entries()));
      if (challenge === null) return response.writeHead(403).end('Forbidden');
      return response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' }).end(challenge);
    }

    if (request.method === 'POST' && url.pathname === '/webhook') {
      const rawBody = await readBody(request);
      if (!meta.verifySignature(rawBody, request.headers['x-hub-signature-256'], process.env.META_APP_SECRET || '')) {
        return response.writeHead(401).end('Invalid signature');
      }
      let payload;
      try { payload = JSON.parse(rawBody.toString('utf8')); } catch {
        return sendJson(response, 400, { error: 'Invalid JSON' });
      }
      response.writeHead(200).end('EVENT_RECEIVED');
      for (const message of meta.extractMessages(payload)) {
        handleTextMessage(message).catch(error => console.error('[Meta] traitement impossible:', error.message));
      }
      return;
    }

    if (request.method === 'GET' && url.pathname === '/health') {
      return sendJson(response, 200, { ok: true, provider: 'meta-cloud-api' });
    }

    response.writeHead(404).end('Not found');
  } catch (error) {
    console.error('[Meta] erreur webhook:', error.message);
    if (!response.headersSent) sendJson(response, 500, { error: 'Internal server error' });
  }
});

server.listen(port, host, () => {
  console.log(`[Meta] webhook en écoute sur ${host}:${port}`);
});
