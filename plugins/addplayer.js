let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.player.includes(who.split`@`[0])) throw 'Adalah player!'
    global.player.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Selamat, @${who.split`@`[0]}. Kamu telah menjadi Player`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addplayer @user']
handler.tags = ['owner']
handler.command = /^addplayer$/i
handler.rowner = true
handler.group = true
handler.register = true

module.exports = handler
