const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      await m.reply(global.wait)
        let res = await fetch('https://lolhuman.herokuapp.com/api/random/bully?apikey=d87a49946e8993761219aef5')
        let img = await res.buffer()
        conn.sendMessage(m.chat, img, MessageType.image, {
            quoted: m, caption: '*©ヴァイオレット*'
        })
    } catch (e) {
        console.log(e)
        throw '_*Owner belum membayar tagihan fitur ini*_'
    }
}
handler.help = ['bully']
handler.tags = ['randimg']
handler.command = /^bully$/i
handler.premium = false
handler.register = true
handler.limit = true

module.exports = handler
