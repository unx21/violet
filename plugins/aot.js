let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 Only Attack On Titan 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season I 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-subtitle-indonesia/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season II 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-season-2/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Season III 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-season-3/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin The Final Season 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-the-final-season/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Chuugakkou 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://animasu.net/anime/shingeki-kyojin-chuugakkou/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Kuinaki Sentaku (OVA) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-kuinaki-sentaku/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : OVA 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-ova/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Lost Girl 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-lost-girls/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin : Chronicle 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-chronicle/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Movie I : Guren no Yumiya 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-movie-1-guren-no-yumiya/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Shingeki no Kyojin Movie II : Jiyuu no Tsubasa 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/shingeki-no-kyojin-movie-2-jiyuu-no-tsubasa/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Shingeki no Kyojin 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/shingeki-no-kyojin/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Shingeki no Kyojin : Before The Fall 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/shingeki-no-kyojin-before-the-fall/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

`.trim()) // Tambah sendiri kalo mau
handler.help = ['aot']
handler.tags = ['weebs']
handler.command = /^aot$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler