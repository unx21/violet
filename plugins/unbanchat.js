let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Chat Terbuka untuk bot')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.owner = true

module.exports = handler
