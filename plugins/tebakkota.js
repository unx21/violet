let handler = async (m, { conn }) => {
    conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
    let id = m.chat
    if (!(id in conn.tebakkota)) throw false
    let json = conn.tebakkota[id][1]
    let nya = json.jawaban
    let nyanya = nya.replace(/[BCDFGHJKLMNPQRSTVWXYZ]/g, '_')
    m.reply('```' + nyanya + '```')
}
handler.command = /^teko$/i
handler.limit = true
module.exports = handler
