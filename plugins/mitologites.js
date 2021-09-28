// Made with 💙 by unx //

let fetch = require('node-fetch')
let timeout = 120000
let poin = 2500
let handler = async (m, { conn, usedPrefix }) => {
    conn.mitologi = conn.mitologi ? conn.mitologi : {}
    let id = m.chat
    if (id in conn.mitologi) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.mitologi[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/mitologi.json')

    if (!res.ok) throw await `${res.status} ${res.statusText}`

    let data = await res.json()

    let json = data[Math.floor(Math.random() * data.length)]

    let caption = `
*「 Tes Mitologi 」*

${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus: Rp${poin}
`.trim()
  conn.mitologi[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.mitologi[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.mitologi[id][0])
        delete conn.mitologi[id]
      }, timeout)
    ]
  }
  handler.command = /^mitologites/i
  handler.register = true
  handler.limit = true
  
  module.exports = handler