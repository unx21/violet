let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇  *「 DONASI UNTUK SERVER 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Dana [083892828233]
┃ ❖ VA Bca [3901083892828233]
┃ ❖ [ https://trakteer.id/Kayla-bot ]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
Bantu kayla agar tetap aktif.
Chat owner jika sudah berdonasi akan dikasih hadiah.
Terimakasih sudah berdonasi 😁
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = false

module.exports = handler
