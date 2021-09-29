let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
await m.reply(global.wait)
  try {
  let res = await fetch('https://api.waifu.pics/sfw/glomp')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Glomp', 'Violet')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['glomp']
handler.tags = ['expression']
handler.command = /^glomp/i
handler.register = true
handler.limit = true

module.exports = handler
