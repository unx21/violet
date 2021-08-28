let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw 'Sudah premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Selamat @${who.split`@`[0]}. Sekarang kamu telah menjadi member premium, Jangan lupa untuk ${usedPrefix}gift`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprems @user']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
