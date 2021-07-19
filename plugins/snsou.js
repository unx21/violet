let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 Only Food War 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma : San no Sara 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma-san-no-sara/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma : San no Sara - Tootsuki Ressha-Hen 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma-san-no-sara-tootsuki-ressha-hen/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma : Shin no Sara 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma-shin-no-sara/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma : Gou no Sara 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma-gou-no-sara/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shokugeki no Souma : Ni no Sara (OVA) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shokugeki-no-souma-ni-no-sara-ova/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Shokugeki no Souma 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/shokugeki-no-souma/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sksouma']
handler.tags = ['weebs']
handler.command = /^snsou$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler