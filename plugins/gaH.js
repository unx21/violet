let imageToBase64 = require('image-to-base64');
let axios = require("axios");
let handler = async(m, { conn, text }) => {
  await m.reply('```Awas ketahuan..```')
let str = `
TOBAT BWANG
`.trim()

    axios.get('http://api-melodicxt-2.herokuapp.com/api/random/hentai?apiKey=APIKEY')
    .then((res) => {
      imageToBase64(res.data.result.result)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'foto.jpg', str, m)
        })
    })
}
handler.help = ['gaH']
handler.tags = ['weebs']
handler.command = /^(gaH)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 10

module.exports = handler
