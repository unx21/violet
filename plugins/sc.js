// Made With 💙 by unx //
 // https://github.com/unx21 //

let handler = async m => m.reply(`
╭─ *「 Violet 」*
│
│ • *Link:* https://github.com/unx21/violet
│
│
│   _Join Official Group Violet-bot_
│
│ • *Heree:* https://chat.whatsapp.com/Ij7zZoDTDgHAi9TTfzu0ay
│
╰────────
`, text.trim(),
      { key: { 
          remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net', fromMe: false }, "caption": '${conn.user.name} Verified Bot'} } }, m)
          }
       }

handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc|script|scrape$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
