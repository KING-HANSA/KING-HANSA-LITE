
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "list",
    desc: "To get the list.",
    react: "🍁",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/media_menu.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
misc: '',
search: '',
fun: '',
anime: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
🍁 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔 🍁

      👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄! ✨ 
╭─「 *ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ* 」
│◈ *яυηтιмє* ${runtime(process.uptime())}
│◈ *σωηєя ηαмє* 𝐇𝐚𝐧𝐬𝐚 𝐃𝐞𝐰𝐦𝐢𝐧𝐚
│◈ *σωηєя ηυмвєя* ${config.BOT_NUMBER}
╰──────────●●►
╭──────────●●►
${menu.download}
${menu.main}
${menu.fun}
${menu.group}
${menu.owner}
${menu.misc}
${menu.search}
${menu.anime}
╰───────────●●►
╭──────────●●►
│© *𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃* 
│🍓 *GitHub* *github.com/KING-HANSA/KING-HANSA-LITE*
╰───────────●●► 
`

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
