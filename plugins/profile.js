const { createHash } = require('crypto')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, isPrems }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let premium = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, uang, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let sn = createHash('md5').update(who).digest('hex')
    let str = `
*Name:* ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n*About:* ' + about : ''}
*Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* https://wa.me/${who.split`@`[0]}${registered ? '\n*Age:* ' + age : ''}
*XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${max - exp} left to levelup]
*Saldo:* Rp${uang}
*Level:* ${level}
*Limit:* ${limit}
*Premium:* ${premium ? 'YES':'NO'}
*Registered:* ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n*Last Claim:* ' + new Date(lastclaim) : ''}
*SN:* ${sn}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['main']
handler.command = /^profile?$/i
handler.register = true
module.exports = handler

