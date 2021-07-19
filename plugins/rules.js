let handler  = async (m, { conn, usedPrefix: _p  }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan dalam menggunakan *Violet-Bot*

1. Teks dan nama pengguna WhatsApp anda akan Kami simpan di dalam server selama bot aktif
2. Data akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner
6. Beberapa fitur ada yang error, jadi berhentilah mengeluh jika masih ingin menggunakan bot ini
7. Apapun yang anda perintah pada bot ini, *Mohon untuk tidak Berlebihan dalam memberikan Command*

*Jangan di baca doang, tapi di patuhi juga !*
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
