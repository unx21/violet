let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 Link Anime Overflow 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇                  *「 Hanya Kualitas 720 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ Eps 1 https://www79.zippyshare.com/v/fkXq5EUF/file.html
┃ ~ Eps 2 https://www59.zippyshare.com/v/xrHnNBpY/file.html
┃ ~ Eps 3 https://www40.zippyshare.com/v/o1jQE5At/file.html
┃ ~ Eps 4 https://www101.zippyshare.com/v/y7rzbyVD/file.html
┃ ~ Eps 5 https://www31.zippyshare.com/v/PvW5avV9/file.html
┃ ~ Eps 6 https://www101.zippyshare.com/v/07ZNo77Y/file.html
┃ ~ Eps 7 https://www70.zippyshare.com/v/Zeb71oiu/file.html
┃ ~ Eps 8 https://www67.zippyshare.com/v/aozjLwzn/file.html
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['overf']
handler.tags = ['weebs','premium']
handler.command = /^overf$/i
handler.register = true
handler.group = true
handler.private = false
handler.premium = true
handler.limit = false

module.exports = handler