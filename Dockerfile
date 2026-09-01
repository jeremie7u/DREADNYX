# DREADNYX — Dockerfile adapté de la méthode Zokou (Koyeb / Docker)
FROM node:20-bookworm

# Dépendances système : Chrome (whatsapp-web.js), ffmpeg, outils image
RUN apt-get update && apt-get install -y \
    ffmpeg \
    imagemagick \
    chromium \
    chromium-sandbox \
    fonts-noto-color-emoji \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Dépendances Node
COPY package.json ./
COPY stormbot/package.json ./stormbot/
RUN npm install -g pm2 && npm install
RUN cd stormbot && npm install

# Application
COPY . .

# WhatsApp Web en headless avec le Chrome système
ENV HEADLESS=true
ENV CHROME_PATH=/usr/bin/chromium

EXPOSE 8000

CMD ["pm2-runtime", "launcher.js"]
