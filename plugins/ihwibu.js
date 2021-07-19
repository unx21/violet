let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Gapapa wibu, asalkan waras
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /IH WIBU|ih wibu|Ih wibu|Wibu/i
handler.command = new RegExp

module.exports = handler