const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "githubstalk",
    desc: "Fetch detailed GitHub user profile including profile picture.",
    category: "misc",
    react: "🖥️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const username = args[0];
        if (!username) {
            return reply("Please provide a GitHub username.");
        }

        const apiUrl = `https://api.github.com/users/${username}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        let userInfo = `
💜*KING-HANSA-LITE GIT STALK*

╭─「 *ɢɪᴛ ꜱᴛᴀʟᴋ* 」
│◈ *υѕєяηαмє*  ${data.name || data.login}
│◈ *gιтнυв υяℓ*  (${data.html_url})
│◈ *вισ*  ${data.bio || 'Not available'}
│◈ *ℓσ¢αтιση*  ${data.location || 'Unknown'}
│◈ *ρυвℓι¢ яєρσѕ*  ${data.public_repos}
│◈ *ƒσℓℓσωєяѕ*  ${data.followers} | Following: ${data.following}
│◈ *¢яєαтє∂ αт*  ${new Date(data.created_at).toDateString()}
│◈ *ρυвℓι¢ gιѕтѕ*  ${data.public_gists}
╰──────────●●►
╭──────────●●►
│© 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃* 
│🍁 *GitHub*: *github.com/KING-HANSA/KING-HANSA-LITE/*
╰───────────●●►      
> *KING-HANSA-LITE-GIT-STALK*
`;

        await conn.sendMessage(from, { image: { url: data.avatar_url }, caption: userInfo }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error fetching data: ${e.response ? e.response.data.message : e.message}`);
    }
});
