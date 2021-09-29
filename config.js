global.owner = ['62887436568613', '62895361677059'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['62887436568613','6281387880724','6281233807317','62895398040685','62881023683976','6289516091066'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '689330763f16fbcb',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Haaachamaaa',
  'https://pencarikode.xyz': 'pais',
  'http://zekais-api.herokuapp.com': 'LjNKiMwk',
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'Violet-bot'

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
