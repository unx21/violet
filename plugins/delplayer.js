let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (!global.player.includes(who.split`@`[0])) throw 'Dia bukan player'
    let index = global.player.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.player.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} Anda telah diberhentikan sebagai *Player*`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delplayer [@user]']
handler.tags = ['owner']
handler.command = /^(delplayer$/i

handler.owner = true

module.exports = handler
