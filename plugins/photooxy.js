let fetch = require('node-fetch')
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt }) => {
  await m.reply(global.wait)
  let listeffect = `
*List Effect Photooxy :*

smoke
wolfmetal
underwaterocean
typography
neonlight
google
rainbowshine
camuflage
3dglowing
vintage
candy
gradientavatar
glowrainbow
stars
fur
flaming
crispchrome
kueultah
rainbowbg
metalicglow
striking3d
watermelon
underwebmatrix
multimaterial
harrypotter
8bit
kopi2
luxuryroyal
gerbang
woodblock
smoketypography
sweetcandy
silk
bevel
partyneon
greenleaves
modernmetal
lolcover
warface
pentakill
aov
battlefield
avatarlol
pokemon
lolavatarglitch
shinebannerlol
mastery7lol
dota2avatar
lol
crossfire
glowpentakill
warfacecover
coveroverwatch
lolcover2
csgo
lolpentakill
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
  let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
  text2 = text2.join(split)
  let url = global.API('xteam', '/photooxy/' + effect, { text, text2 }, 'APIKEY')
  await conn.sendFile(m.chat, url, 'photooxy.jpg', `*PHOTOOXY*\n*Effect:* ${effect}`, m)
}
handler.help = ['photooxy <effect|teks>']
handler.tags = ['creator']
handler.command = /^(photooxy)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.register = true

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
