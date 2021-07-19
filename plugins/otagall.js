let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
	let user = global.DATABASE._data.users[m.sender]
	
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, '*「 TAG ALL 」*\n\n❖ ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n❖ `, m, {
    contextInfo: { mentionedJid: users }
 
  
})
}
handler.help = ['otagall']
handler.tags = ['owner']
handler.command = /^otagall$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
