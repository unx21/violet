let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// HartA tahta Xteam
let handler  = async (m, { conn, text }) => {
  await m.reply(global.wait)
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 text,
await conn.sendFile(m.chat, global.API('xteam', '/tahta', { text, }, 'APIKEY'), 'Harta Tahta.png', 'Nih udah jadi Harta tahtamu...\n *_Tetap Support:_* *Kokoronationz*', m)
}
handler.help = ['tahta2'].map(v => v + '<teks>')
handler.tags = ['creator']
handler.command = /^tahta2$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.register = true

module.exports = handler
