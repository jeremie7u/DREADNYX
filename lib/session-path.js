const path = require('path');

function safeSegment(value) {
  const segment = String(value || '').trim().replace(/[^a-zA-Z0-9._-]/g, '-');
  return segment.slice(0, 80) || 'default';
}

function getAuthPath() {
  const root = process.env.SESSION_DIR || path.join(process.cwd(), 'auth_info_baileys');
  return path.join(root, safeSegment(process.env.SESSION_ID || 'default'));
}

module.exports = { getAuthPath };
