// cewe yang ada di iklan royco bikin ange njing
// pdhl cuma iklan :v

const fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
await m.reply(global.wait)
  if (!text) throw 'Nyari apa?'
  let res = await fetch(global.API('https://wall.alphacoders.com/api2.0','/get.php', {
    auth: '3e7756c85df54b78f934a284c11abe4e',
    method: 'search',
    term: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
  await conn.sendFile(m.chat, img.url_image, 'wallpaper', '©ヴァイオレット', m)
}
handler.help = ['wallp <query>']
handler.tags = ['internet','premium']
handler.command = /^wallp$/i
handler.premium = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler
