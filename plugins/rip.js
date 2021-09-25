const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)
try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let rip = `http://zekais-api.herokuapp.com/rip?url=${url}&apikey=LjNKiMwk`
  let stiker = await sticker(null, rip, 'RIP', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}
//Kokoronationx//

handler.help = ['stickerrip (caption|reply media)']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?rip$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
