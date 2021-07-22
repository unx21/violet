let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/pyamu.webp'
conn.sendFile(m.chat, sticker, 'pyamu.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Punya gw|punya gw|Punya mu|punya mu/
handler.command = new RegExp
module.exports = handler
