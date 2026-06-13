const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━⭓
┃ 👑 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
┣━━━━━━━━━━━━━━━
┃ 🧑 𝗡𝗮𝗺𝗲       ➤ 𝐂𝐨𝐜𝐚 𝐀𝐫𝐚𝐯
┃ 🚹 𝗚𝗲𝗻𝗱𝗲𝗿     ➤ 𝐌𝐚𝐥𝐞
┃ ❤️ 𝗦𝘁𝗮𝘁𝘂𝘀     ➤ 𝐒𝐢𝐧𝐠𝐥𝐞
┃ 🎂 𝗔𝗴𝗲        ➤ 🖤🍫🎀
┃ ☪️ 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻   ➤ 𝐈𝐬𝐥𝐚𝐦
┃ 🎓 𝗦𝘁𝘂𝗱𝘆      ➤ 𝐇𝐧𝐫'𝐬 𝟐𝐧𝐝 𝐘𝐞𝐚𝐫
┃ 🇧🇩 𝗖𝗼𝘂𝗻𝘁𝗿𝘆    ➤ 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┗━━━━━━━━━━━━━━━⭓

┏━━━━━━━━━━━━━━━⭓
┃ 🌐 𝗦𝗢𝗖𝗜𝗔𝗟 𝗟𝗜𝗡𝗞𝗦
┣━━━━━━━━━━━━━━━
┃ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸   ➤ http://fb.com/61552846104112
┃ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 ➤ https://m.me/61552846104112
┃ 📷 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 ➤ 𝐂𝐨𝐜𝐚 𝐀𝐫𝐚𝐯
┗━━━━━━━━━━━━━━━⭓

┏━━━━━━━━━━━━━━━⭓
┃ ⏳ 𝗨𝗣𝗗𝗔𝗧𝗘𝗗 𝗧𝗜𝗠𝗘
┣━━━━━━━━━━━━━━━
┃ 🕒 ${time}
┗━━━━━━━━━━━━━━━⭓

🖤 𝐂𝐨𝐜𝐚 𝐀𝐫𝐚𝐯 • 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 🎀
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/idyXtoO.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
