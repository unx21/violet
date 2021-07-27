global.owner = ['62887436568613','6289524339740'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['62887436568613'] // Premium user has unlimited limit
global.wait = "[❗]  ```Wait a minute...```"
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '22c0b4a47404ec7b'
}

// Sticker WM
global.packname = 'Violet-bot'
global.author = '@Unx'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
