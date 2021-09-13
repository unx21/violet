// Made with 💙 by unx //

let fetch = require('node-fetch')
let timeout = 120000
let poin = 7500
let handler = async (m, { conn, usedPrefix }) => {
    conn.braintest = conn.braintest ? conn.braintest : {}
    let id = m.chat
    if (id in conn.braintest) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.braintest[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/braintest.json')

    if (!res.ok) throw await `${res.status} ${res.statusText}`

    let data = await res.json()

    let json = data[Math.floor(Math.random() * data.length)]

    let caption = `
*「 Brain Test 」*
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}bthint* untuk bantuan
Bonus: Rp${poin}
`.trim()
  conn.braintest[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.braintest[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.braintest[id][0])
        delete conn.braintest[id]
      }, timeout)
    ]
  }
  handler.help = ['braintest']
  handler.tags = ['game']
  handler.command = /^braintest/i
  handler.register = true
  handler.limit = true
  
  module.exports = handler