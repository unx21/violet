let handler = async (m, { conn }) => {
  let ownerGroup = m.chat.split`-`[0] + '0@s.whatsapp.net'
  let users = (await conn.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
  for (let user of users) if (user !== ownerGroup + '0@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '0@s.whatsapp.net' && user !== '0@s.whatsapp.net' && user!== '0@s.whatsapp.net')  await conn.groupRemove(m.chat, [user])
}
handler.help = ['kickall']
handler.tags = ['owner']
handler.command = /^(kickall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = false
handler.botAdmin = true
handler.fail = null
module.exports = handler
