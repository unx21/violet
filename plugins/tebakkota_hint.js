let handler = async (m, { conn }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (!(id in conn.tebakkota)) throw false
    let json = conn.tebakkota[id][1]
    m.reply('```' + json.name.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_') + '```')
}
handler.command = /^tekohint$/i
handler.limit = true
module.exports = handler
