let axios = require("axios")



let handler = async (m, { conn }) => {

   await m.reply('Tunggu bentar vio cariin... ')

    let res = await axios("https://api.waifu.pics/nsfw/waifu")

    let json = res.data

    let url = json.url

    conn.sendFile(m.chat, url, "waifu.png", "nyari bacol ya?", m)

    }

handler.help = ['nsfw waifu']

handler.tags = ['internet']

handler.command = /^nwaifu$/i

handler.premium = true

handler.register = true

//Aldoyy pengococ handal

module.exports = handler
