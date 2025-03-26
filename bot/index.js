const TelegramBot = require("node-telegram-bot-api");
const { token, channelId } = require("./config");
const photoHandler = require("./handlers/photoHandler");
const textHandler = require("./handlers/textHandler");
const bot = new TelegramBot(token, { polling: true });

// Handlers
photoHandler(bot, channelId);
textHandler(bot, channelId);

console.log("🤖 Bot ishga tushdi...");
