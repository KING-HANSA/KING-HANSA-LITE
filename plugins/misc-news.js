const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "news",
    desc: "Get the latest news headlines.",
    category: "misc",
    react: "📰",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const apiKey="0f2c43ab11324578a7b1709651736382";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const articles = response.data.articles;

        if (!articles.length) return reply("No news articles found.");

        // Send each article as a separate message with image and title
        for (let i = 0; i < Math.min(articles.length, 5); i++) {
            const article = articles[i];
            let message = `
╭─「 *ᴀʀᴛɪᴄʟᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* 」
│◈ тιтℓє  ${article.title}
│◈ ∂єѕ¢яιρтιση  ${article.description}
│◈ υяℓ  ${article.url}
╰──────────●●►
╭──────────●●►
│© 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃 
│🍁 *GitHub:* *github.com/KING-HANSA/KING-HANSA-LITE/* 
╰───────────●●►     
            `;

            console.log('Article URL:', article.urlToImage); // Log image URL for debugging

            if (article.urlToImage) {
                // Send image with caption
                await conn.sendMessage(from, { image: { url: article.urlToImage }, caption: message });
            } else {
                // Send text message if no image is available
                await conn.sendMessage(from, { text: message });
            }
        };
    } catch (e) {
        console.error("Error fetching news:", e);
        reply("Could not fetch news. Please try again later.");
    }
});
