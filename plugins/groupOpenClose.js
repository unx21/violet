let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	if(!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} close*\n	*○ ${usedPrefix + command} open*`, m)
	} else if(args[0] == 'open') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
		conn.fakeReply(m.chat, `*Grup berhasil dibuka!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
	} else if(args[0] == 'close') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
		conn.fakeReply(m.chat, `*Grup berhasil ditutup!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
	} else if(args[0] == 'buka') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
		conn.fakeReply(m.chat, `*Grup berhasil dibuka!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
	} else if(args[0] == 'tutup') {
		conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
		conn.fakeReply(m.chat, `*Grup berhasil ditutup!*`, '0@s.whatsapp.net', `${conn.user.name} Verified Bot`, 'status@broadcast')
	} else {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} close*\n	*○ ${usedPrefix + command} open*`, m)
	} 
}
handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = /^(group|grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler