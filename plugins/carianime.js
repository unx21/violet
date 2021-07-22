let axios = require("axios");
let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Animenya', m)

	axios.get(`https://arugaz.herokuapp.com/api/sdmovie?film=${text}`).then ((res) => {
	 	let hasil = `*Anime ${text}*\n\nJudul : ${res.data.result.title}\nRating : ${res.data.result.rating}\nInfo : ${res.data.result.sinopsis}\nLink Video : ${res.data.result.video}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['carianime'].map(v => v + ' <anime>')
handler.tags = ['weebs']
handler.command = /^(carianime)$/i
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