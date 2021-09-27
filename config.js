global.owner = ['62887436568613'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['62887436568613'] // Premium user has unlimited limit
global.wait = "[❗]  ```Wait a minute...```"
global.eror = '```[ ⚠️ ] EROR 404```'

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://neoxr-api.herokuapp.com': 'yntkts'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Violet-bot'

global.multiplier = 89 // The higher, The harder levelup
global.flatext = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&doScale=true&scaleWidth=800&scaleHeight=400&fontsize=90&fillTextType=1&text='

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
