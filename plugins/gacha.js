let fs = require('fs')
let handler = async (m, { conn }) => {
  let LastGacha = global.DATABASE._data.users[m.sender].lastclaim
let cdj = `${JaM(new Date - LastGacha)}`
let cdm = `${MeNit(new Date - LastGacha)}`
let cds = `${DeTik(new Date - LastGacha)}`
let cd1 = Math.ceil(23 - cdj)
let cd2 = Math.ceil(59 - cdm)
let cd3 = Math.ceil(60 - cds)
let data = fs.readFileSync('/data/data/com.termux/files/home/violet/lib/gacha.js')
let parse = JSON.parse(data)
let random = Math.floor(Math.random() * parse.length);
let json = parse[random]
  if (new Date - global.DATABASE._data.users[m.sender].lastgacha > 86400000) {
    global.DATABASE._data.users[m.sender].uang += json.uang * 1
    global.DATABASE._data.users[m.sender].exp += 100
    m.reply(`Selamat anda mendapatkan +Rp${json.uang}`)
    global.DATABASE._data.users[m.sender].lastgacha = new Date * 1
  } else throw `Anda sudah mengklaim harian hari ini.\n\nTunggu ${cd1} Jam ${cd2} Menit ${cd3} Detik!`
}
handler.help = ['gacha']
handler.tags = ['Player']
handler.command = /^(gacha)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.player = true
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}
