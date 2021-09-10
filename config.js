global.owner = ['6289516091066'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6289516091066'] // Premium user has unlimited limit
global.wait = "[❗]  ```Wait a minute...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '704c4ea5a022bfc1'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Kayla-bot'

global.multiplier = 89 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
