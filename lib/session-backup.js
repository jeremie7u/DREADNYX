'use strict';

const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const {
  S3Client,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
} = require('@aws-sdk/client-s3');
const { getAuthPath } = require('./session-path');

const ENABLED = /^(1|true|yes|on)$/i.test(String(process.env.SESSION_BACKUP_ENABLED || ''));
const INTERVAL_MS = Math.max(60_000, Number(process.env.SESSION_BACKUP_INTERVAL_MS || 60_000));
const BUCKET = String(process.env.S3_BUCKET || '').trim();
const PREFIX = String(process.env.SESSION_BACKUP_PREFIX || 'dreadnyx-sessions').replace(/^\/+|\/+$/g, '');
const SESSION_ID = String(process.env.SESSION_ID || 'default').replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 80) || 'default';

function configured() {
  return ENABLED && Boolean(BUCKET && process.env.S3_ACCESS_KEY_ID && process.env.S3_SECRET_ACCESS_KEY && process.env.SESSION_BACKUP_KEY);
}

function configError() {
  const missing = [];
  for (const key of ['S3_BUCKET', 'S3_ACCESS_KEY_ID', 'S3_SECRET_ACCESS_KEY', 'SESSION_BACKUP_KEY']) {
    if (!process.env[key]) missing.push(key);
  }
  return new Error(`Sauvegarde session activée mais variables manquantes: ${missing.join(', ')}`);
}

function encryptionKey() {
  const value = String(process.env.SESSION_BACKUP_KEY || '');
  return /^[a-f0-9]{64}$/i.test(value) ? Buffer.from(value, 'hex') : crypto.createHash('sha256').update(value).digest();
}

function objectKey() {
  return `${PREFIX}/${SESSION_ID}.tar.gz.enc`;
}

function client() {
  return new S3Client({
    region: process.env.S3_REGION || 'auto',
    endpoint: process.env.S3_ENDPOINT || undefined,
    forcePathStyle: /r2\.cloudflarestorage\.com$/i.test(String(process.env.S3_ENDPOINT || '')),
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stderr = '';
    child.stderr.on('data', (chunk) => { stderr += chunk.toString(); });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolve() : reject(new Error(`${command} a échoué (${code}): ${stderr.trim()}`)));
  });
}

function encrypt(input) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(input), cipher.final()]);
  return Buffer.concat([Buffer.from('DNYX1'), iv, cipher.getAuthTag(), ciphertext]);
}

function decrypt(input) {
  if (!Buffer.isBuffer(input) || input.subarray(0, 5).toString() !== 'DNYX1') throw new Error('Format de sauvegarde session invalide');
  const iv = input.subarray(5, 17);
  const tag = input.subarray(17, 33);
  const ciphertext = input.subarray(33);
  const decipher = crypto.createDecipheriv('aes-256-gcm', encryptionKey(), iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}

async function bodyToBuffer(body) {
  if (!body) return Buffer.alloc(0);
  if (typeof body.transformToByteArray === 'function') return Buffer.from(await body.transformToByteArray());
  const chunks = [];
  for await (const chunk of body) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks);
}

async function restore() {
  if (!ENABLED) return false;
  if (!configured()) throw configError();
  const s3 = client();
  try {
    await s3.send(new HeadObjectCommand({ Bucket: BUCKET, Key: objectKey() }));
  } catch (error) {
    if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) return false;
    throw error;
  }
  const response = await s3.send(new GetObjectCommand({ Bucket: BUCKET, Key: objectKey() }));
  const tempDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'dreadnyx-restore-'));
  const archive = path.join(tempDir, 'session.tar.gz');
  try {
    await fs.promises.writeFile(archive, decrypt(await bodyToBuffer(response.Body)), { mode: 0o600 });
    const authPath = getAuthPath();
    await fs.promises.mkdir(path.dirname(authPath), { recursive: true, mode: 0o700 });
    await run('tar', ['-xzf', archive, '-C', path.dirname(authPath)]);
    return true;
  } finally {
    await fs.promises.rm(tempDir, { recursive: true, force: true });
  }
}

async function backup() {
  if (!ENABLED) return false;
  if (!configured()) throw configError();
  const authPath = getAuthPath();
  try { await fs.promises.access(authPath); } catch { return false; }
  const tempDir = await fs.promises.mkdtemp(path.join(os.tmpdir(), 'dreadnyx-backup-'));
  const archive = path.join(tempDir, 'session.tar.gz');
  try {
    await run('tar', ['-czf', archive, '-C', path.dirname(authPath), path.basename(authPath)]);
    const body = encrypt(await fs.promises.readFile(archive));
    await client().send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: objectKey(),
      Body: body,
      ContentType: 'application/octet-stream',
      ServerSideEncryption: process.env.S3_SERVER_SIDE_ENCRYPTION || undefined,
    }));
    return true;
  } finally {
    await fs.promises.rm(tempDir, { recursive: true, force: true });
  }
}

async function start() {
  if (!ENABLED) return { enabled: false, restored: false };
  if (!configured()) throw configError();
  let restored = false;
  try {
    restored = await restore();
    console.log(`[Session] sauvegarde externe ${restored ? 'restaurée' : 'absente'} pour ${SESSION_ID}.`);
  } catch (error) {
    console.error('[Session] restauration externe impossible:', error.message);
  }
  const timer = setInterval(() => backup().catch((error) => console.error('[Session] sauvegarde échouée:', error.message)), INTERVAL_MS);
  timer.unref?.();
  return { enabled: true, restored };
}

module.exports = { start, restore, backup, configured, objectKey };
