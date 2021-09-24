let handler = async (m) => {
	
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 PREMIUM 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ ❖ Unduh Video Dengan Link
┃ ❖ Limit Tak Terbatas
┃ ❖ Semua Fitur Terbuka
┃ ❖ Undang Bot Ke Group
┃ ❖ Personal Chat Bot
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Mau Jadi Premium?
┃ 
┃ Harga Premium
┃ ❖ 5k/Bulan
┃
┃ Invite Bot Ke Group 
┃ ❖ Free? 3 Hari
┃ ❖ 5k/Bulan
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ 
┃ Owner Akan Mengembalikan Sisa Premium
┃ Via Pulsa Apabila Bot Telah Berhenti Permanent
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ Silahkan Hubungi Owner
┃ Untuk Menjadi Premium User
┃ 
┃ Untuk Pembayaran Silahkan 
┃ cek di #donasi
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Keuntungan Jadi Premium User', 'status@broadcast')
  }
handler.help = ['premium']
handler.tags = ['premium']
handler.command = /^premium$/i
handler.group = false
handler.register = true

module.exports = handler
