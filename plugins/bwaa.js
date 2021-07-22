let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/bwaa.webp'
conn.sendFile(m.chat, sticker, 'bwaa.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /bwaa hayolohh|mo ngapain bang/
handler.command = new RegExp
module.exports = handler
