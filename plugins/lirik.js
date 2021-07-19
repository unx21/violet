const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get(`https://docs-jojo.herokuapp.com/api/lirik?q=` + encodeURIComponent(text))
            .then((res) => {

                const caption = `*• Lirik Lagu ${text} :*\n\n${res.data.result}`
                conn.reply(m.chat, caption, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['lirik <judul lagu>']
handler.tags = ['internet']
handler.command = /^(lirik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
