let handler = async (m, { conn, text, args }) => {

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
try {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let userss = text.split`,`.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v.length > 20)
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
    await time(10000)
  await conn.groupAdd(m.chat, userss)
} catch (e) {
  m.reply('Emror')
}
}
handler.help = ['edotensei'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(edotensei)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler