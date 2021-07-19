let handler  = async (m, { conn, args }) => {
	if(args || args[0]) {
		let text = args.join` `
		var fr = text
	} else if(m.quoted.text) {
		var fr = m.quoted.text
	} else if(args[0] && m.quoted.text) {
		var fr = m.quoted.text
	} 
	conn.groupUpdateDescription(m.chat, fr)
}
handler.help = ['setdesc <text>']
handler.tags = ['group']
handler.command = /^(setdesc)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler
