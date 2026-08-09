// Commande adaptée de ZOKOU : .play — téléchargement audio depuis YouTube
// Requiert : npm install ytdl-core (facultatif)
module.exports = {
  name: 'play',
  description: 'Télécharge l\'audio d\'une vidéo YouTube (.play <titre ou URL>).',
  execute: async (sock, msg, args) => {
    const query = args.join(' ');
    if (!query) {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Usage : .play <titre ou URL>' });
    }

    let ytdl;
    try {
      ytdl = require('ytdl-core');
    } catch {
      return sock.sendMessage(msg.key.remoteJid, { text: '❌ Module ytdl-core non installé. Exécutez : npm install ytdl-core' });
    }

    try {
      const isUrl = /^https?:\/\//.test(query);
      const url = isUrl ? query : await searchYouTube(ytdl, query);
      if (!url) {
        return sock.sendMessage(msg.key.remoteJid, { text: '❌ Aucune vidéo trouvée.' });
      }
      const info = await ytdl.getInfo(url);
      const format = ytdl.chooseFormat(info.formats, { quality: 'lowestaudio', filter: 'audioonly' });
      await sock.sendMessage(msg.key.remoteJid, { text: `⏳ Récupération de : *${info.videoDetails.title}*` });
      await sock.sendMessage(msg.key.remoteJid, {
        audio: { url: format.url },
        mimetype: 'audio/mpeg',
        fileName: `${info.videoDetails.title}.mp3`
      });
    } catch (err) {
      await sock.sendMessage(msg.key.remoteJid, { text: `❌ Erreur : ${err.message}` });
    }
  }
};

async function searchYouTube(ytdl, query) {
  try {
    const search = require('yt-search');
    const result = await search(query);
    const video = result.videos?.[0];
    return video?.url || null;
  } catch {
    return null;
  }
}
