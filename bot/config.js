require("dotenv").config();

module.exports = {
  token: process.env.BOT_TOKEN,
  channelId: process.env.CHANNEL_ID,
  adminId: process.env.ADMIN_ID,
};
