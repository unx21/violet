let handler = async (m, { conn, text }) => {
  let name = ('62887436568613@s.whatsapp.net')
  let panggil = `
  Master Sedang Tidur Saat Ini, Mohon Untuk Tidak Mengganggu
  `.trim()
  let mentionedJid = [name]
 conn.reply(m.chat, panggil, m, { contextInfo: { mentionedJid }})
  
}
handler.customPrefix = /62887436568613/i
handler.command = New RegExp

module.exports = handler
