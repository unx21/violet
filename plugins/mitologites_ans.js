// Made With 💙 by unx //

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tes Mitologi 」/i.test(m.quoted.text)) return
  conn.mitologi = conn.mitologi ? conn.mitologi : {}
  if (!(id in conn.mitologi)) throw 'Soal itu telah berakhir!'
  if (m.quoted.id == conn.mitologi[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.mitologi[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.mitologi[id][2]
      m.reply(`*Benar!*\n+Rp${conn.mitologi[id][2]}`)
      clearTimeout(conn.mitologi[id][3])
      delete conn.mitologi[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler