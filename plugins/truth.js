let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.truth)}”`, m)
}
handler.help = ['truth']
handler.tags = ['game']
handler.command = /^(truth)$/i
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

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.truth = [
"Acara tv apa yang paling kamu benci?\nBerikan alasannya!",
"Apa baju yang (menurutmu) paling jelek yang pernah kamu pakai, dan kapan kamu memakainya?",
"Apa hal paling buruk (gosip) yang pernah kamu bilang tentang temenmu?",
"Apa hal paling memalukan dari dirimu?",
"Apa hal paling memalukan dari temanmu?",
"Apa hal pertama yang kamu lihat saat kamu melihat orang lain (lawan jenis)?",
"Apa hal pertama yang terlintas di pikiranmu saat kamu melihat cermin?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa hal terbodoh yang pernah kamu lakukan?",
"Apa ketakutan terbesar kamu?",
"Apa mimpi terburuk yang pernah kamu alami?",
"Apa mimpi terkonyol yang sampai sekarang kamu kamu ingat?",
"Apa pekerjaan paling konyol yang pernah kamu bayangin kamu akan jadi?",
"Apa sifat terburukmu menurut kamu?",
"Apa sifat yang ingin kamu rubah dari dirimu?",
"Apa sifat yang ingin kamu rubah dari temanmu?",
"Apa kebohongan terakhir yang Kamu katakan?",
"Hal apa yang paling memalukan yang pernah Kamu lakukan saat berkencan?",
"Apakah Kamu pernah secara tidak sengaja menabrak sesuatu (atau seseorang!) Dengan mobil Kamu?",
"Sebutkan seseorang yang pura-pura Kamu sukai tetapi sebenarnya tidak tahan.",
"Apa nama panggilan Kamu yang paling aneh?",
"Apa pengalaman Kamu yang paling menyakitkan secara fisik?",
"Jembatan apa yang Kamu senang Kamu bakar?",
"Apa hal paling gila yang pernah Kamu lakukan di transportasi umum?",
"Jika Kamu bertemu dengan jin, apa tiga keinginan Kamu?",
"Jika Kamu bisa menulis siapa pun di Bumi sebagai Presiden Amerika Serikat, siapa itu dan mengapa?",
"Apa hal paling kejam yang pernah Kamu katakan kepada orang lain?",
"Siapa ciuman terburukmu?",
"Apa satu hal yang akan Kamu lakukan jika Kamu tahu tidak ada konsekuensinya?",
"Apa hal paling gila yang pernah Kamu lakukan di depan cermin?",
"Apa hal paling kejam yang pernah Kamu katakan tentang orang lain?",
"Apa yang Kamu suka lakukan dengan teman yang tidak akan pernah Kamu lakukan di depan pasangan?",
"Siapa yang paling membuat Kamu iri?",
"Seperti apa piyama favoritmu?",
"Apakah Kamu pernah berpura-pura sakit untuk keluar dari pesta?",
"Siapa orang tertua yang pernah Kamu kencani?",
"Berapa banyak foto narsis yang Kamu ambil dalam sehari?",
"Berapa kali seminggu Kamu memakai celana yang sama?",
"Sebutkan sepuluh bagian tubuh yang disukai pasangan Kamu untuk dicium",
"Ucapkan daftar 10 barang atau barang yang pernah Kamu beli dan tidak pernah digunakan atau menyesal dibeli",
"Jika Kamu berlawanan s * x selama satu jam, apa yang akan Kamu lakukan?",
"Apa momen paling memalukan dalam hidup Kamu?",
"Apakah Kamu pernah dipermalukan? Jelaskan apa yang terjadi dan bagaimana perasaan Kamu",
"Jelaskan mimpi teraneh yang pernah Kamu alami dalam hidup Kamu",
"Dengan pemain mana Kamu ingin bertukar kehidupan selama seminggu?",
"Ciri fisik apa yang paling membuat Kamu dipuji?",
"Apa satu hal yang tidak akan pernah Kamu lakukan bahkan jika seseorang menawarkan Kamu semua uang di dunia?",
"Di antara semua orang di ruangan ini, cowok / cewek mana yang ingin kamu kencani?",
"Menurut Kamu, siapa di ruangan itu yang akan menjadi kencan yang buruk?",
"Kualitas atau karakteristik apa yang ingin Kamu ubah dari diri Kamu?",
"Apakah Kamu pernah jatuh cinta dengan teman dari pasangan Kamu? Apakah ada yang memperhatikan?",
"Menurut Kamu apa pendapat pacar Kamu tentang pernikahan?",
"Hal paling gila apa yang pernah terjadi padamu di mal?",
"Sebutkan pengalaman paling menjengkelkan dalam berbelanja.",
"Apa hal paling kejam yang pernah Kamu lakukan dalam hidup Kamu?",
"Apakah kamu pernah terpikir untuk selingkuh?",
"Pernahkah Kamu berbohong kepada pasangan untuk menghindari momen mesra, misalnya mengatakan bahwa Kamu merasa sakit?",
"Apa rumor atau gosip terburuk yang Kamu katakan atau ulangi dan pada akhirnya ada sesuatu yang salah?",
"Apa lelucon paling menjijikkan yang pernah dimainkan dengan seseorang?",
"Apa fantasi terliar Kamu?",
"Apakah Kamu pernah pipis di kolam?",
"Hal paling bodoh apa yang pernah Kamu lakukan di depan orang banyak?",
"Apa hal pertama yang akan Kamu lakukan jika Kamu tidak terlihat?",
"Apakah Kamu pernah diisyaratkan atau telah melangkahi seseorang dari s * x yang sama? Apa yang terjadi, bagaimana reaksi Kamu?",
"Manakah di antara pemain dalam grup ini yang dianggap memiliki pakaian paling sensual dan berani?",
"Menurut Kamu, siapa gaun pesta terburuk? Apa yang akan Kamu rekomendasikan?",
"Kamu mungkin berpikir bahwa seseorang dari teman atau keluarga Kamu membuat keputusan yang buruk dalam hidup mengatakan siapa dan apa yang dia lakukan.",
"Katakanlah siapa (di sini) yang memiliki pasangan yang salah atau tidak cocok untuknya.",
"Jika Kamu terdampar di sebuah pulau dengan satu orang yang Kamu kenal secara pribadi, siapakah yang ingin menjadi orang itu?",
"Dia menyebutkan sesuatu yang pernah dilakukan dan Kamu tidak ingin dikenal",
"Apakah Kamu pernah mengupil dan memakannya?",
"Manakah dari orang-orang dalam game ini, yang dianggap memiliki tubuh terbaik?",
"Siapa di antara orang-orang yang ada dalam permainan ini, yang percaya bahwa akhir-akhir ini penampilan fisik mereka memburuk: tubuhnya, pakaiannya?",
"Jika Kamu tiba-tiba menjadi tidak terlihat, hal-hal nakal apa lagi yang ingin Kamu lakukan?",
]