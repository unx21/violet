let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/nhen.webp'
conn.sendFile(m.chat, sticker, 'nhen.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
 // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Pedo/
handler.command = new RegExp
module.exports = handler
