let handler = m => m

let linkRegex = /(a(su|nj([ie]ng)?|jg))|(me(mek|ki))|(kontol)|(ba(bi|ngsat|jingan))|(goblo(k|g))|(fu?ck)|(janc[ou]k)|(jemb[ou]t)|(temp[ei]k)|(t[ou]l[ou]l)|(bgst)|(ngento(t|d))|(bego)/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (!chat.antiToxic && isGroupToxic) {
    m.reply('Jangan Toxic ya!!\n' + readMore + '\nMau Matikan? hubungi owner*')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

handler.owner = false

handler.admin = true
handler.botAdmin = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
