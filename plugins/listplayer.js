/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let player = global.player.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
conn.sendMessage(m.chat, `*「 List Player 」*` + `\n\n` + player.map(v => '❖ @' + v.replace(/@.+/, '')).join`\n`, MessageType.extendedText, { contextInfo: { mentionedJid: player } })
}
handler.help = ['listplayer']
handler.tags = ['Player']
handler.command = /^(listplayer)$/i
handler.owner = false
handler.group = true
handler.private = false
handler.player = true
handler.register = true

module.exports = handler
