let handler = async (m) => {
  
let violet =  './src/photo/evergarden.jpg'
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇          *「 About Tensura 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Tensura OVA 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/tensei-shitara-slime-datta-ken-ova/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Tensura Nikki 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://gomunime.online/anime/tensura-nikki-tensei-shitara-slime-datta-ken/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Tensura 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/tensei-shitara-slime-datta-ken/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Tensura : Spin Off 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/tensei-shitara-slime-datta-ken-spin-off/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Tensura Nikki 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/tensura-nikki-tensei-shitara-slime-datta-ken/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Tensura : Makoku Gurashi no Trinity 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/tensei-shitara-slime-datta-ken-ibun-makoku-gurashi-no-trinity/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Manga Tenchura 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://komikindo.co/manga/tenchura-tensei-shitara-slime-datta-ken/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Light Novel 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://dragoisekai.blogspot.com/2019/11/tensei-shitara-slime-datta-ken.html
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Web Novel (Download) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://bakadame.com/light-novel-tensei-shitara-slime-datta-ken-bahasa-indonesia/
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇ *「 Web Novel (Online) 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ~ https://novelringan.com/series/tensei-shitara-slime-datta-ken-wn/
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  await conn.sendFile(m.chat, violet, 'evergarden.jpg', teks.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `Link Anime Dan Manga Tensura Series`,
          }
      }
    } ,m)
      }
handler.help = ['tensura']
handler.tags = ['weebs']
handler.command = /^tensura$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler
