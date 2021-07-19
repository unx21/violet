let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let handler  = async (m, { conn, text: txt }) => {
  await m.reply(global.wait)
let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
 let [text, ...wm] = txt.trimStart().split('|')
  wm = wm.join('|')
await conn.sendFile(m.chat, global.API('xteam', '/quotemaker', { text, wm }, 'APIKEY'), 'nulis.jpg', '*©Kuriyama-bot*', m)
}
handler.help = ['quote'].map(v => v + 'maker <text>|<name>')
handler.tags = ['creator']
handler.command = /^quotemaker$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.register = true

module.exports = handler
