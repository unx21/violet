const axios = require('axios')

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '_Masukkan yang dicari_', m)
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get('https://tobz-api.herokuapp.com/api/lirik?q=' + encodeURIComponent(text) + '&apikey=Tobzzz17')
            .then((res) => {

                let caption = `*Lirik Lagu ${res.data.result.judul}:*\n\n${res.data.result.lirik}`
                conn.reply(m.chat, caption, m)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
handler.help = ['lrc <judul lagu>']
handler.tags = ['internet']
handler.command = /^(lrc)$/i
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
