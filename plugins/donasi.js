let handler = async (m) => {
  
let violet =  './src/photo/faiitto.png'
let teks = `
┏━━ *「 DONASI 」*
┣ ┅ ━━━━━━━━━━
┃ ❖ Dana [0887436568613]
┃ ❖ OVO [0887436568613]
┃ ❖ Pulsa [0887436568613]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
Terimakasih sudah berdonasi 😁
`.trim()
  await conn.sendFile(m.chat, violet, 'faiitto.png', teks.trim(), { 
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
      message: { 
        "imageMessage": { 
          "mimetype": "image/jpeg", 
          "caption": `Donasi dan Pembayaran`,
          }
      }
    } ,m)
      }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = false

module.exports = handler
