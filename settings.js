const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Kavi"
global.socialm = "GitHub: CyberKavi"
global.location = "Sri Lanka"

//new
global.botname = 'KAVI-X'
global.ownernumber = '94766577249'
global.ownername = 'Cyber Kavi'
global.websitex = ""
global.wagc = ""
global.botscript = ''
global.packname = "KAVI-X"
global.author = "Cyber Kavi"
global.creator = "94766577249@s.whatsapp.net"
global.botprefix = '.'
global.mongoDB = `mongodb+srv://kavishka:KAVImihi321@whatsapp-bot.ssmxc2a.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-bot`
//bot set

global.autoblocknumber = '92'
global.antiforeignnumber = '91'
global.wari = true







let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})