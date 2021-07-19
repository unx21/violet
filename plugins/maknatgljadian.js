let axios = require("axios");
let handler = async(m, { conn, text }) => {
	let [tgl, bln, thn] = text.split `-`

    if (!tgl) return conn.reply(m.chat, 'Masukan tanggal', m)
    if (!bln) return conn.reply(m.chat, 'Masukan bulan', m)
    if (!thn) return conn.reply(m.chat, 'Masukan tahun', m)

  await m.reply(global.wait)
	axios.get(`https://videfikri.com/api/primbon/tgljadian/?tgl=${tgl}&bln=${bln}&thn=${thn}`).then ((res) => {
	 	let hasil = `*Makna tgl jadian:* ${res.data.result.hasil}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['tgljadian <tgl-bln-thn>']
handler.tags = ['primbon']
handler.command = /^(tgljadian)$/i
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
