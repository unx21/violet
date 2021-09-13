let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {
	let pp = './src/avatar_contact.png'

let { exp, limit, level, role } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let nama = conn.getName(m.sender)
try {
  } catch (e) {

  } finally {
let res = global.API('http://hardianto-chan.herokuapp.com', '/api/rankcard', {
    profile: await conn.getProfilePicture(m.sender).catch(_ => ''),
    name: nama,
    bg: 'https://a-static.besthdwallpaper.com/violet-evergarden-wallpaper-3440x1440-947_15.jpg',
    needxp: max,
    curxp: exp,
    level: level,
    logorank: 'https://i.ibb.co/Wn9cvnv/FABLED.png'
  })
let caption = `
*👾 Your Profile:*
*👤 Name:* ${nama}
*⚜️ Role:* ${role}
*🔰 Level:* ${level}
*🔗 Exp :* ${exp} --> ${max}

_Create by @Kokoronationz_

`.trim()
    conn.sendFile(m.chat, res, 'test.jpg', caption, m, false)
} 
    
    }
handler.help = ['rank']
handler.tags = ['main']
handler.command = /^(rank|rankcard)$/i

handler.register = true
handler.fail = null
//https://github.com/Kokoronationz//
module.exports = handler
