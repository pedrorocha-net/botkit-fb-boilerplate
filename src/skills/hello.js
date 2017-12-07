exports.condition = (params) => {
  return true;
};

exports.run = (params) => {
  params.bot.reply(params.message, "Hello! I'm your new chatbot. Please make me smarter ;)");
};
