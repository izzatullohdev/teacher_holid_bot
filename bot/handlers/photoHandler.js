module.exports = (bot, channelId, msg) => {
  const photo = msg.photo[msg.photo.length - 1].file_id;
  const caption = msg.caption || "";

  const reklama =
    "\n\n—\n📌 Manba: @holid27\n🎬 YouTube: youtube.com/@withholid27";
  const fullCaption = caption + reklama;

  bot.sendPhoto(channelId, photo, { caption: fullCaption });
  bot.sendMessage(msg.chat.id, "✅ Post kanalga joylandi!");
};
