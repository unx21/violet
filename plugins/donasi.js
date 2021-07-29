let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ OVO [0887436568613]
┃ ❖ Pulsa [0887436568613]
┃ ❖ Pulsa [089524339740]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

Terimakasih sudah berdonasi 😁
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = true

module.exports = handler
