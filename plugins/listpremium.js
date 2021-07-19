/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
conn.sendMessage(m.chat, `*「 List Premium 」*` + `\n\n` + prem.map(v => '❖ @' + v.replace(/@.+/, '')).join`\n`, MessageType.extendedText, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['listpremium']
handler.tags = ['premium']
handler.command = /^(listprem(ium)?)$/i
handler.owner = true

module.exports = handler