const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
pattern: "blowjob",
desc: "Fetch a random blowjob girl image.",
category: "anime",
react: "🍓",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/nsfw/blowjob`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random blowjob Girl Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
