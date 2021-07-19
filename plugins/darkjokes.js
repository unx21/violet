let handler = async(m, { conn }) => {
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles',m)
}
handler.help = ['darkjokes']
handler.tags = ['fun']
handler.command = /^darkjokes$/i
handler.disabled = false
handler.owner = false
handler.register = true
handler.group = true
handler.private = false
handler.limit = 7
module.exports = handler
