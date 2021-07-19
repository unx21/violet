let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.dare)}`, m)
}
handler.help = ['dare']
handler.tags = ['game']
handler.command = /^(dare)$/i
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

global.dare = [
"Ajak orang yang tidak kamu kenal untuk selfie berdua dengan mu lalu upload ke snapgram",
"Ambil beberapa nomor dari kontakmu secara acak dan kirim sms *Aku hamil* sama mereka.",
"Ambil minuman apa saja yang ada didekat mu lalu campurkan dengan cabai dan minum!",
"Ambil nomor secara acak dari kontakmu, telepon dia, dan bilang *Aku mencintaimu*",
"Beli makanan paling murah di kantin (atau beli sebotol aqua) dan bilang sambil tersedu-sedu pada teman sekelasmu *Ini adalah makanan yang paling mahal yang pernah kubeli*",
"Beli satu botol coca cola dan siram bunga dengan coca cola itu di depan orang banyak.",
"Berdiri deket kulkas, tutup mata, pilih makanan secara acak didalemnya, pas makanpun mata harus tetep ditutup.",
"Berdiri di tengah lapangan basket dan berteriak, *AKU MENCINTAIMU PANGERANKU/PUTRIKU*",
"Beri hormat pada seseorang di kelas, lalu bilang *Hamba siap melayani Anda, Yang Mulia.*",
"Berjalan sambil bertepuk tangan dan menyanyi lagu *Selamat Ulang Tahun* dari kelas ke koridor.",
"Berlutut satu kaki dan bilang *Marry me?* sama orang pertama yang masuk ke ruangan.",
"Bikin hiasan kepala absurd dari tisu, apapun itu, terus suruh pose didepan kamera, terus upload.",
"Bilang *KAMU CANTIK/GANTENG BANGET NGGAK BOHONG* sama cewek/cowok yang menurutmu paling cantik/ganteng.",
"Bilang pada seseorang di kelas, *Aku baru saja diberi tahu aku adalah kembaranmu dulu, kita dipisahkan, lalu aku menjalani operasi plastik. Dan ini adalah hal paling serius yang pernah aku katakan.*",
"Buang buku catatan seseorang ke tempat sampah, di depan matanya, sambil bilang *Buku ini isinya tidak ada yang bisa memahami*",
"Cabut bulu kaki mu sendiri sebanyak 3 kali!",
"Pergi ke seseorang dan menakuti mereka.",
"Ciumlah peserta lain dengan penuh kasih (sisanya dapat memilih siapa).",
"Berikan pijatan kepada pendamping selama 5 menit.",
"Makan satu sendok makan mentega.",
"Meminta uang di jalan untuk menceritakan kisah lucu dan tidak ada yang kredibel dan dapatkan $ 50.",
"Bernyanyi dan menari di jalan seperti orang gila.",
"Menjadi budak pemain lain pilihan Kamu selama 5 menit.",
"Sambut orang yang pertama melewati jalan.",
"Menari dengan sapu atau kain pel.",
"Untuk pria: Jalan singkat seperti wanita dengan sepatu hak tinggi.",
"Mendaki untuk bernyanyi di bar bar.",
"Nyatakan siapa cinta sejati Kamu.",
"Ceritakan sesuatu yang sangat intim.",
"Nyanyikan alfabet tanpa menggerakkan mulut Kamu.",
"Lakukan kesan presiden terbaik Kamu.",
"Teriakkan kata pertama yang muncul di benak Kamu saat ini.",
"Hubungi tempat pizza dan pesan 300 pizza sarden.",
"Setelah Kamu menutup mata, rasakan wajah seseorang dan tebak siapa mereka.",
"Buatlah cerita tentang barang di sebelah kanan Kamu.",
"Nyanyikan semua yang Kamu katakan selama 10 menit berikutnya.",
"Berikan pijatan kaki kepada seseorang yang hadir.",
"Berikan cupang pada orang di sebelah kiri Kamu.",
"Ucapkan alfabet mundur dalam 15 detik.",
"Mintalah orang asing secara acak untuk bermesraan dengan Kamu.",
"Bertindak seperti Kamu tidak mengerti bahasa Kamu sampai giliran Kamu berikutnya (pikirkan bahasa Kamu).",
"Lakukan push-up sampai giliran Kamu lagi.",
"Kenakan kumis jari selama 5 menit berikutnya.",
"Makan telur mentah.",
"Menggonggong seperti anjing.",
"Nyanyikan sebuah lagu sampai akhir.",
"Menarilah dengan liar mengikuti lagu favorit Kamu.",
"Bertindak seperti anjing dan dibelai oleh semua orang.",
"Mandi dengan semua pakaian Kamu.",
"Gambarlah wajah di sekitar pusar Kamu.",
"Biarkan seseorang menulis kata di dahi Kamu dengan spidol permanen.",
"Posting foto Kamu yang memalukan secara online.",
"Letakkan bra atau pakaian dalam es batu dan tunggu sampai mencair.",
"Bertindak seperti wanita tua atau pria tua.",
"Berputar sepuluh kali, setelah selesai, cobalah berjalan dalam garis lurus.",
"Lakukan satu menit penuh tanpa berkedip.",
"Bertindak seperti monyet sampai giliran Kamu lagi.",
"Rayu orang disebelah kanan Kamu",
"Cium orang disebelah kiri Kamu",
"Tunjukkan trik sulap",
"Makan lima sendok makan bumbu masak",
"Lakukan breakdance selama 30 detik",
"Mandi dengan menggunakan baju yang Kamu pakai",
"Pecahkan 2 telur di kepala Kamu",
"Taruh es batu didalam celana Kamu",
]