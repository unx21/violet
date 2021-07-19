let axios = require("axios");

let handler = async(m, { conn, text }) => {


    if (!text) return conn.reply(m.chat, 'Silahkan masukan kata yang akan diartikan', m)

  await m.reply(global.wait)
	axios.get(`https://mnazria.herokuapp.com/api/kbbi?search=${text}`).then ((res) => {
	 	let hasil = `Arti kata *${text}* \n\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kbbi'].map(v => v + ' <teks>')
handler.tags = ['primbon']
handler.command = /^(kbbi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
