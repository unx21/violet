//by BochilGaming
//https://github.com/BochilGaming/

let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}
    let id = m.chat
    if (id in conn.caklontong) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebaklirik[id][0])
        throw false
    }
    let res = await fetch('http://94.130.142.91:25621/tebaklirik')
    let json = await res.json()
    let caption = `
*「 Tebak Lirik 」*

Soal: *${json.result.soal}*

Timeout: *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tlhint* untuk bantuan
Bonus: +Rp${poin}
`.trim()
    conn.tebaklirik[id] = [
      await conn.reply(m.chat,  caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebaklirik[id]) conn.reply(m.chat, `Waktu habis!\n${json.result.deskripsi}`, conn.tebaklirik[id][0])
        delete conn.tebaklirik[id]
      }, timeout)
    ]
  }
handler.help = ['tebaklirik']
handler.tags = ['game']
handler.command = /^tebaklirik/i
handler.register = true

handler.limit = true
  
module.exports = handler