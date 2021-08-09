const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  
  let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
  let user = global.DATABASE._data.users[m.sender]
  let tnbot = (await conn.getFile(await conn.getProfilePicture(m.fromMe))).data.toString('base64')
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n\n*${usedPrefix}daftar <nama>|<umur>*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  if (age < 18) throw 'Maaf, Anda belum bisa mendaftar.'
  if (age > 40) throw 'Maaf, Anda terlalu tua.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Gift:* Rp10000
┃ *Registered:* ${rtotalreg}
┃ *Serial Number:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━

 _Simpan Serial Number Anda!_
 _Jangan Lupa Untuk ${usedPrefix}claim Dan ${usedPrefix}mining_
`.trim()
await conn.reply(m.chat, caption,/* { 
  key: { 
    remoteJid: 'status@broadcast', 
    participant: '0@s.whatsapp.net', 
    fromMe: false 
  }, message: { 
    "imageMessage": { 
      "mimetype": "image/jpeg", 
      "caption": `Registration Successful!`, 
      "jpegThumbnail": tnbot} } }, { contextInfo: { mentionedJid: [m.sender] } }*/m)
global.DATABASE._data.users[m.sender].uang += 10000
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>|<umur>')
handler.tags = ['main']

handler.command = /^(daftar|reg(ister)?)$/i
handler.disabled = false

module.exports = handler

