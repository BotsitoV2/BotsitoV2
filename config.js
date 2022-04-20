//═══════[© 2022 Darlyn Bot Inc.]════════\\

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['59892939840','51918303426', '14708034938'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['59892939840'] //another owner number
global.premium = ['59892939840'] //premium number
global.pengguna = 'Matti' //username
global.botnma = 'Botsito' //bot name
global.ownernma = 'Matti' //owner name
global.packname = 'Matti' //sticker package name
global.author = '-Botsito' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: '¡Esta función es solo para administradores!',
    botAdmin: '¡El bot debe ser administrador primero!',
    owner: 'Esta función es solo para el propietario/owner',
    group: '¡Función utilizada solo para grupos!',
    private: '¡Características utilizadas solo para chat privado!',
    bot: 'Esta característica es solo para el número de bot',
    wait: 'En proceso, por favor espera...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
