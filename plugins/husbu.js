let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(`https://recoders-area.caliph.repl.co/api/husbu?apikey=FreeApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.url, 'husbu.jpg', json.name, m)
}
handler.help = ['husbu'].map(v => v + ' ')
handler.tags = ['weebs']
handler.command = /^(husbu)$/i
handler.register = true
handler.limit = true
module.exports = handler