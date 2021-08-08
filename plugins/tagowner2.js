let handler = async (m, { conn, text }) => {
  let name = ('62887436568613@s.whatsapp.net')
  let panggil = `
  Tuan Unx Sedang Tidur saat Ini, mohon Untuk Tidak Mengganggu
  `.trim()
  let mentionedJid = [name]
 conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})
  
}
handler.customPrefix = /62887436568613/i
handler.command = New RegExp

module.exports = handler
