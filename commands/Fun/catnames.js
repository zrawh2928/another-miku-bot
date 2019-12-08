const Discord = require("discord.js");
const catname = require("cat-names");

exports.run = (bot, message, args) => {
  const name = catname.random();
  const emoji = [
    "OwO",
    "( 0w0)-b",
    "😁",
    "😌",
    "😳",
    "🐱",
    "😆",
    "👌",
    "😙"
  ].random();
  const embed = new Discord.MessageEmbed()
    .setAuthor("Miku -- Cat Names")
    .setColor(0x1a9ca8)
    .setDescription(`If you were my dog, I\'d name you **${name}**!${emoji}`)
    .setFooter("cat-names");
  message.channel.send({ embed });
};

exports.conf = {
  aliases: ["catname"],
  cooldown: 4,
  guildOnly: false,
  userPerm: [""],
  botPerm: ["EMBED_LINKS"]
};

exports.help = {
  name: "catnames",
  category: "Fun",
  description: "What is your name if you were born as a cat? OwO",
  usage: "catnames",
  param: ""
};
