let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
 let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/waifu')
 let { desc, image, name, source } = await res.json()
 let hasil = `*NAME :* ${name}\n*DESC :* ${desc}\n*URL :* ${source}`
 conn.sendFile(m.chat, image, 'image.png', hasil, m)
}
handler.help = ['waifu']
handler.tags = ['weebs']
handler.command = /^waifu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 3

module.exports = handler
