module.exports = (bot, channelId) => {
  bot.on("text", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    // Agar bu command bo‘lmasa (start, help...)
    if (text.startsWith("/")) return;

    const fullText =
      text + "\n\n—\n📌 Manba: @holid27";

    try {
      await bot.sendMessage(channelId, fullText);
      await bot.sendMessage(chatId, "✅ Matn kanalga joylandi!");
    } catch (err) {
      await bot.sendMessage(chatId, "❌ Xatolik: " + err.message);
    }
  });
};
