let handler = async(m, { conn, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, 'User yang mau distalk ?', m)
    await m.reply(global.wait)
    new Promise((resolve, reject) => {
        axios.get(`https://arugaz.my.id/api/media/stalktwitt?user=` + text)
            .then((res) => {
                const teks = `➸ *Nama* : ${res.data.result.fullname}\n➸ *Username* : ${res.data.result.username}\n➸ *Jumlah Followers* : ${res.data.result.follower}\n➸ *Jumlah Following* : ${res.data.result.following}\n➸ *Desc* : ${res.data.result.descText}\n\n\n ${res.data.result.descUrl}`

                conn.sendFile(m.chat, res.data.result.profile, 'Stalk Twitt', teks, m)

            })
            .catch(reject)
    })

}

handler.help = ['twitstalk', 'stalktwit'].map(v => v + ' <user>')
handler.tags = ['internet']
handler.command = /^(twitstalk|stalktwit)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler