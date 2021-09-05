let handler = async (m) => {
  
let violet =  './src/photo/viogar.png'
let teks = `
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
`.trim()
  await conn.sendFile(m.chat, violet, 'viogar.png', teks.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `Link Anime Dan Manga Food War`,
          }
      }
    } ,m)
      }
handler.help = ['snsou  [ food war ]']
handler.tags = ['weebs']
handler.command = /^snsou$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = true

module.exports = handler
