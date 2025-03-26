module.exports = (bot, channelId) => {
  bot.on("photo", async (msg) => {
    const chatId = msg.chat.id;
    const photo = msg.photo[msg.photo.length - 1].file_id;
    const caption = msg.caption || "";

    try {
      await bot.sendPhoto(channelId, photo, {
        caption: caption,
      });
      await bot.sendMessage(chatId, "✅ Post kanalga joylandi!");
    } catch (err) {
      await bot.sendMessage(chatId, "❌ Xatolik: " + err.message);
    }
  });
};
