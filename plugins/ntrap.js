let axios = require("axios")



let handler = async (m, { conn }) => {

   await m.reply('Tunggu bentar vio cariin... ')

    let res = await axios("https://api.waifu.pics/nsfw/trap")

    let json = res.data

    let url = json.url

    conn.sendFile(m.chat, url, "trap.png", "nyari bacol ya?", m)

    }

handler.help = ['nsfw trap']

handler.tags = ['internet']

handler.command = /^ntrap$/i

handler.premium = true

handler.register = true

//Tenkyuu to Unx-sama

module.exports = handler
