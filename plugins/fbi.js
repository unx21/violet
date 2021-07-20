let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/sound/fbi.mp3'
conn.sendFile(m.chat, vn, 'fbi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Saya pedo|Saya lolicon|Dih lolicon|Dih pedo|Dasar pedo/
handler.command = new RegExp
module.exports = handler