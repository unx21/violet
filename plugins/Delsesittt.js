let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}
try {
If ( conn.game[m.sender] == true ) {
delete conn.game[m.seder]
conn.reply( m.chat, `*[ 🎳 TicTacToe Games ]*
session ttt berhasil dihapus`,
m)
} else if ( conn.game[m.sender == false) {
m.reply(`lu g punya sesi tictactoe paok`)
}
} catch(e) {
m.reply(`eror`)
}
	//Eror yntkts
handler.help = ['delsesittt']
handler.tags = ['game']
handler.command = /^(delsesittt|dellsesitt)$/i

handler.register = true
handler.fail = null

module.exports = handler
