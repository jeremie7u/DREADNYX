const https = require('https');
const crypto = require('crypto');

function required(name) {
  const value = process.env[name];
  if (!value || !String(value).trim()) {
    throw new Error(`Variable d'environnement manquante: ${name}`);
  }
  return String(value).trim();
}

function getConfig() {
  return {
    accessToken: required('META_ACCESS_TOKEN'),
    phoneNumberId: required('META_PHONE_NUMBER_ID'),
    verifyToken: required('META_VERIFY_TOKEN'),
    appSecret: process.env.META_APP_SECRET || '',
    graphVersion: process.env.META_GRAPH_VERSION || 'v23.0',
  };
}

function request(pathname, method, body, config) {
  return new Promise((resolve, reject) => {
    const payload = body === undefined ? '' : JSON.stringify(body);
    const request = https.request({
      hostname: 'graph.facebook.com',
      path: `/${config.graphVersion}${pathname}`,
      method,
      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        'Content-Type': 'application/json',
        ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
      },
    }, response => {
      let raw = '';
      response.setEncoding('utf8');
      response.on('data', chunk => { raw += chunk; });
      response.on('end', () => {
        let parsed;
        try { parsed = raw ? JSON.parse(raw) : {}; } catch { parsed = { raw }; }
        if (response.statusCode < 200 || response.statusCode >= 300) {
          const message = parsed?.error?.message || `Meta Graph API HTTP ${response.statusCode}`;
          return reject(new Error(message));
        }
        resolve(parsed);
      });
    });
    request.on('error', reject);
    if (payload) request.write(payload);
    request.end();
  });
}

async function sendText(to, body, options = {}) {
  const config = getConfig();
  if (!/^\d{7,15}$/.test(String(to))) throw new Error('Destinataire WhatsApp invalide');
  if (!body || String(body).length > 4096) throw new Error('Le texte doit contenir entre 1 et 4096 caractères');
  return request(`/${config.phoneNumberId}/messages`, 'POST', {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: String(to),
    type: 'text',
    text: { preview_url: Boolean(options.previewUrl), body: String(body) },
  }, config);
}

function verifyWebhook(query) {
  const config = getConfig();
  return query['hub.mode'] === 'subscribe' &&
    query['hub.verify_token'] === config.verifyToken
    ? query['hub.challenge']
    : null;
}

function verifySignature(rawBody, signature, appSecret) {
  if (!appSecret) return true;
  const expected = `sha256=${crypto.createHmac('sha256', appSecret).update(rawBody).digest('hex')}`;
  const received = String(signature || '');
  const expectedBuffer = Buffer.from(expected);
  const receivedBuffer = Buffer.from(received);
  return expectedBuffer.length === receivedBuffer.length &&
    crypto.timingSafeEqual(expectedBuffer, receivedBuffer);
}

function extractMessages(payload) {
  const messages = [];
  for (const entry of payload?.entry || []) {
    for (const change of entry.changes || []) {
      const value = change.value || {};
      for (const message of value.messages || []) {
        messages.push({
          id: message.id,
          from: message.from,
          type: message.type,
          text: message.type === 'text' ? message.text?.body || '' : '',
          timestamp: message.timestamp,
          phoneNumberId: value.metadata?.phone_number_id,
          profileName: value.contacts?.[0]?.profile?.name || '',
        });
      }
    }
  }
  return messages;
}

module.exports = {
  getConfig,
  sendText,
  verifyWebhook,
  verifySignature,
  extractMessages,
};
