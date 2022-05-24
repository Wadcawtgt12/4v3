const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'D2F1E747F5',
}

// Other
global.owner = ['628816563424']
global.premium = ['628816563424']
global.ownername = 'Cloudh'
global.botname = 'Tia-Bot'
global.packname = '✨ Sean ✨'
global.gc = 'https://setiawangmg.blogspot.com/'
global.limitawal = '10'
global.author = 'Sean'
global.sessionName = 'session'
global.prefa = ['#','!','.']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.sc = fs.readFileSync('./media/Sean.jpg')
global.tq = fs.readFileSync('./media/Sean.jpg')
global.menu = fs.readFileSync('./media/Sean.jpg')
global.allmenu = fs.readFileSync('./media/Sean.jpg')
global.thumb = fs.readFileSync('./media/Sean.jpg')
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
