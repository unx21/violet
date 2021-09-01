//MARI MENJIPLAK DENGAN CINTA//

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
    let res = await fetch(API('https://dhnjing.xyz/fun/tebakkota?apikey=ea9dbc3e49b85e'))
    if (!res.status) throw eror
    let result = await res.json()
    if (result.status != 200) throw json
    let json = result.result
    let caption = `
*「 Tebak Kota 」*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teko untuk bantuan
Bonus: Rp${poin}
`.trim()
 conn.tebakkota[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakkota[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakkota[id][0])
        delete conn.tebakkota[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakkota']
  handler.tags = ['game']
  handler.command = /^tebakkota/i
  handler.register = true
  handler.disabled = false
  handler.limit = true
  
  module.exports = handler
