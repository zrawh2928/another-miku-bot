exports.run = function(bot, message, args) {
  const Discord = require('discord.js');
  const embed = new Discord.RichEmbed()
  .setAuthor("Miku")
  .setColor(0x1a9ca8)
  .setFooter("© 12042#5754", "https://cdn.discordapp.com/avatars/381018297019269121/6eecdd6f48c7e75239f77a58584f93dd.png")
  .setImage("https://media.discordapp.net/attachments/434692075217485834/441911225874645012/image_2.jpg")
  .setDescription(`OMG`);
  message.channel.send({embed});
};
