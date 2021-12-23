let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/deal.webp'
conn.sendFile(m.chat, sticker, 'deal.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
 // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /(D|d)eal/
handler.command = new RegExp
module.exports = handler
