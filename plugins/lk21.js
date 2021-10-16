let fetch = require("node-fetch")

let handler = async (m, { conn, text}) => {
  await m.reply(global.wait)
  if (!text) throw 'Masukkan Judul Film!'
  let res = await fetch(`https://docs-jojo.herokuapp.com/api/lk21?q=`+encodeURIComponent(text))
  let json = await res.json()
  let {
    url,
    title,
    image,
    genre,
    year,
    duration,
    view,
    description,
    actor,
    directors,
    country,
    release,
    language,
    download_link
  } = json

  let isi = `
  *"LAYARKACA21"*
  
  Judul: ${title} (${view})
  Genre: ${genre}
  ${year}
  ${duration}
  Bahasa: ${language}
  Negara: ${country}
  Direktor: ${directors}
  Aktor: ${actor}
  Rilis: ${release}
  
       ${description}
  
  Link Download: ${download_link}
  `.trim()
  
  if (image) await conn.sendFile(m.chat, image, 'image.jpg', isi, m)
  else m.reply(isi)
}
handler.help = ['lk21 <film>']
handler.tags = ['internet']
handler.command = /^l(ayar)?k(aca)?21$/i
handler.register = true
handler.limit = true

module.exports = handler
