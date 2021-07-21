let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/awoak.webp'
conn.sendFile(m.chat, sticker, 'awoak.webp', null, m, true, {
type: 'MessageSticker', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Awokawok|aowksowk|awoakowk/
handler.command = new RegExp
module.exports = handler