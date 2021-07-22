let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇                 *「 Tutorial Buat Bot WA 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Termux User 」*
┃
┃ ❖ pkg install git
┃ ❖ pkg install nodejs
┃ ❖ pkg install ffmpeg
┃ ❖ pkg install imagemagick
┃
┇       Untuk Githubnya
┃
┃ ❖ git clone https://unx21/violet
┃ ❖ ls
┃ ❖ cd ciolet
┃
┇  Terakhir Penginstalannya Cuy
┃
┃ ❖ npm i
┃ ❖ node . [ session name is optional ]
┃
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler