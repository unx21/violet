// Made With 💙 by unx //
let handler = async (m) => {
  
let teks = `
╭─ *「 Violet 」*
│
│ • *Original:* https://github.com/Nurutomo/wabot-aq
│ • *Me:* https://github.com/unx21
│
│
│    _Join Heree_
│
│ • *Heree:*
│ https://chat.whatsapp.com/Ij7zZoDTDgHAi9TTfzu0ay
│
│  _Made With 💙 by unx_
╰────────
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Violet Build With NodeJS', 'status@broadcast')
  }
handler.command = /^sc|script|scrape$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
