module.exports = (bot, channelId, msg) => {
  const text = msg.text;

  const reklama = "\n\n\n\n 📌 Manba: @holid27\n";
  const fullText = text + reklama;

  bot.sendMessage(channelId, fullText);
  bot.sendMessage(msg.chat.id, "✅ Matn kanalga joylandi!");
};
