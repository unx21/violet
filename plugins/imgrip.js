let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  await m.reply(global.wait)
  conn.sendFile(m.chat, global.API('https://Hardianto.xyz', '/api/rip', {
    image: await conn.getProfilePicture(who).catch(_ => ''),
    apikey: 'hardianto'
  }), 'RIP.png', '*©ヴァイオレット*', m)
}

handler.help = ['rip @user']
handler.tags = ['creator']
handler.command = /^rip$/i
handler.limit = true
handler.register = true
module.exports = handler
