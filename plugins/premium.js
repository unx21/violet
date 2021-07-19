let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 PREMIUM 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Mau Jadi Premium?
┃ 
┃ Harga Premium
┃ 5k/Bulan
┃
┃ Invite Bot Ke Group 
┃ 15k/Bulan
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Pembayaran Anda Akan Saya
┃ Kembalikan Dalam Bentuk Pulsa
┃ Apabila Bot Telah Berhenti Secara Permanent
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Silahkan Hubungi Owner
┃ Untuk Menjadi Premium User
┃ 
┃ Untuk Pembayaran Silahkan 
┃ cek di #donasi
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i
handler.group = false
handler.register = true

module.exports = handler
