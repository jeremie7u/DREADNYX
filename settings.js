/*
#JEREMIE
BUY NO ENC +243987391338
*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "243987391338"
global.owner2 = "jeremie7u"
global.namaowner = "jeremie"
global.botname = "dreadnyx"
//======== Setting Bot & Link ========//
global.namabot = "dreadnyx" 
global.namabot2 = "dreadnyx"
global.foother = "© - Jeremie"
global.versibot = "70.0.0"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b'
global.linksaluran = "https://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b"
global.linkyt = 'https://youtube.com/@honoreeminent?si=S8gCWZR9jxEhKCEd'
global.linktele = 'https://t.me/Jeremie_7k'
global.packname = "Jeremie V70"
global.author = "Jeremie"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = 
"error": "soumets-toi..",
"done": "Succes ✅", 
"wait": "le bot est en cours d'envoi  . . .", 
"group": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"private":"<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"admin": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"adminbot": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"owner": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"developer": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b", 
"premium": "<tu veux devenir premium? Suis-moi d’abord>\n\nhttps://whatsapp.com/channel/0029VbAwH49JZg3ziL30kh3b"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
