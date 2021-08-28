let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (id in conn.tebakkota) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkota[id][0])
        throw false
    }
    let res = await fetch(API('dhnjing', '/fun/tebakkota'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekohint untuk bantuan
Bonus: Rp${poin}
`.trim()
    conn.tebakkota[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkota[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, conn.tebakkota[id][0])
            delete conn.tebakkota[id]
        }, timeout)
    ]
}
handler.help = ['tebakkota']
handler.tags = ['game']
handler.command = /^tebakkota/i
handler.limit = true
handler.register

module.exports = handler
