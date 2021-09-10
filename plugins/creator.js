let handler = function (m) {
  //ini hanyalah contoh, jangan di uncomment_-
  //Example this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6289516091066', 'Hans', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i
handler.group = false
handler.register = false

module.exports = handler
