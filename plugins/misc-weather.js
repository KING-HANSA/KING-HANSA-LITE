const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "weather",
    desc: "🌤 Get weather information for a location",
    react: "🌤",
    category: "misc",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) return reply("❗ Please provide a city name. Usage: .weather [city name]");

        const apiKey = '2d61a72574c11c4f36173b627f8cb177'; 
        const city = q;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(url);
        const data = response.data;

        const weather = `
🌍 *Weather Information for ${data.name}, ${data.sys.country}* 🌍

╭─「 *ᴡᴇᴀᴛʜᴇʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ* 」
│◈ тємρєяαтυяє  ${data.main.temp}°C 
│◈ ƒєєℓѕ ℓιкє  ${data.main.feels_like}°C
│◈ мιη тємρ  ${data.main.temp_min}°C
│◈ мαχ тємρ  ${data.main.temp_max}°C
│◈ нυмι∂ιту  ${data.main.humidity}%
│◈ ωєαтнєя  ${data.weather[0].main}
│◈ ∂єѕ¢яιρтιση  ${data.weather[0].description}
│◈ ωιη∂ ѕρєє∂  ${data.wind.speed} m/s
│◈ ρяєѕѕυяє  ${data.main.pressure} hPa
╰──────────●●►
╭──────────●●►
│ *Powered by OpenWeatherMap* 🌦️
│ © 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃 
│ 💻 *GitHub:* *github.com/KING-HANSA/KING-HANSA-LITE/* 
╰───────────●●►     
`;

        return reply(weather);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 404) {
            return reply("🚫 City not found. Please check the spelling and try again.");
        }
        return reply("⚠️ An error occurred while fetching the weather information. Please try again later.");
    }
});

