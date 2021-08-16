let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
let pesan = `Hai ${name}\n\nKetik ${usedPrefix}menu atau ${usedPrefix}help untuk melihat semua fitur`
conn.reply(m.chat, pesan, m)
}
handler.customPrefix = /Bot/
handler.command = new RegExp

module.exports = handler
