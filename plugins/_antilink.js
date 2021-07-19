let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { isAdmin, isBotAdmin, conn, participants }) {
  const ambilAdminGrup = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }
const adminGrup = ambilAdminGrup(participants)
let daftar = adminGrup.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
  if ( /izin min/i.test(m.text) ) throw false
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLink && isGroupLink) {
    conn.reply(m.chat, `*「 LINK TERDETEKSI! 」*\n\nsilahkan kak kalo mau kick :/\n${daftar}`, m, { contextInfo: { mentionedJid: adminGrup } })
    if (global.opts['restrict']) {
      if (isAdmin || !isBotAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler