  let handler = async (m, { conn, command, args }) => {
  let chats = conn.chats.all().map(chat => chat.jid)
  let isDelete = /^(clearall|deleteall)/i.test(command)
  for (let id of chats) {
    if (isDelete) await conn.modifyChat(id, 'delete', {
      includeStarred: false
    }).catch(console.log)
    await conn.modifyChat(id, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
  }
  conn.reply(m.chat, chats.length + ' chat grup telah dib' + (isDelete ? 'ersihkan' : 'isukan selamanya'), m)
}
handler.help = ['deleteallchat', 'deleteallchat group', 'muteallchat', 'muteallchat group']
handler.tags = ['owner']
handler.command = /^(clearall|deleteall|muteall)chat$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
