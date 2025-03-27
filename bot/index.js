const TelegramBot = require("node-telegram-bot-api");
const { token, channelId, adminId } = require("./config");
const bot = new TelegramBot(token, { polling: true });

// Admin check
bot.on("message", (msg) => {
  const userId = msg.from.id;

  if (userId !== Number(adminId)) {
    bot.sendMessage(
      msg.chat.id,
      "⛔ Sizga ruxsat yo'q. darsliklar tez kunda chiqadi Youtbe kanalimizga obuna bo'ling \n\n youtube.com/@holid27 "
    );
    return;
  }

  // Admin bo‘lsa - handlerlar ishlaydi
  if (msg.photo) {
    require("./handlers/photoHandler")(bot, channelId, msg);
  } else if (msg.text && !msg.text.startsWith("/")) {
    require("./handlers/textHandler")(bot, channelId, msg);
  }
});

// /start komandasi
bot.onText(/\/start/, (msg) => {
  const isAdmin = msg.from.id === Number(adminId);
  if (isAdmin) {
    bot.sendMessage(
      msg.chat.id,
      "👋 Salom admin! Siz kanalga post yuborishingiz mumkin."
    );
  } else {
    bot.sendMessage(msg.chat.id, "⛔ Bu bot faqat admin uchun.");
  }
});

console.log("🤖 Bot ishga tushdi...");
