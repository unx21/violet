let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/ngoplo.mp3'
conn.sendFile(m.chat, vn, 'ngoplo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Musik|Joged/
handler.command = new RegExp
module.exports = handler
