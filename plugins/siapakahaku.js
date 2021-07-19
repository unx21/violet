let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler  = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.siapakahaku[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/siapakahaku', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*「 Siapakah Aku 」*

${json.result.level}
Soal: "${json.result.soal}"

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}sahint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
    conn.siapakahaku[id] = [
      await conn.reply(m.chat, caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.siapakahaku[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.siapakahaku[id][0])
        delete conn.siapakahaku[id]
      }, timeout)
    ]
  }
  handler.help = ['siapakahaku']
  handler.tags = ['game']
  handler.command = /^siapakahaku/i
  handler.register = true

  handler.limit = true
  
  module.exports = handler