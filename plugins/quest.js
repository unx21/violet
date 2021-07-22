let handler  = async (m, { conn, usedPrefix: _p  }) => {
  conn.reply(m.chat, `
╔═════════════════════╗
┇                       *「 QUEST 」*
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
║
║ ❖  Kumpulkan Saldo Senilai 50 M
║
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
┇                      *「 HADIAH 」*
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
║
║ ❖  Posisi I = Extra Saldo 25 M
║ ❖  Posisi II = Extra Saldo 20 M
║ ❖  Posisi III = Extra Saldo 15 M
║ ❖  Posisi IV = Extra Saldo 10 M
║ ❖  Posisi V = Extra Saldo 5 M
║
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
┇                    *「 RULES 」*
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
║
║ ❖  Quest Dibuka Setiap Hari Rabu dan Sabtu
║ ❖  Untuk Mengikuti Quest Harap Mendaftar
║ ❖  Admin Akan Memberikan Pegangan Sebesar 1 M
║ ❖  Dilarang Meminta Saldo Dari Pemain Lain
║ ❖  Dilarang Mengklaim Prize Diluar Waktu Quest
║
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
┇                    *「 TIME 」*
┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━
║
║ ❖  Quest Dimulai Pukul 18.00 WIB
║ ❖  Quest Berakhir Pukul 23.00 WIB
║
╚═════════════════════╝

`.trim(), m)
}
handler.help = ['quest']
handler.tags = ['Player']
handler.command = /^(quest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.player = true
handler.group = true
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
