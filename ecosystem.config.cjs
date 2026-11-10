module.exports = {
  apps: [{
    name: 'dreadnyx-hybrid',
    script: './hybrid-start.js',
    cwd: __dirname,
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '512M',
    env: {
      NODE_ENV: 'production',
      BOT_PROVIDER: 'hybrid',
      HYBRID_BAILEYS_ENABLED: 'true',
      COMMAND_PREFIXES: '.,/,*',
      SESSION_ID: 'default',
      META_WEBHOOK_HOST: '0.0.0.0',
      META_WEBHOOK_PORT: '3000',
      META_REPLY_DELAY_MS: '3000'
    }
  }]
};
