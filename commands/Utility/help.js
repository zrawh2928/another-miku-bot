const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

exports.run = (bot, message, args) => {
  // variables
  const subFolders = fs.readdirSync('./commands/').filter(folders => folders != 'Owner');
  var cmdCategory = [],
    textToBeSend = '';

  try { // BEGIN TRY
    if (!args[0]) {
      const embed = new Discord.RichEmbed();
      for (var i = 0; i < subFolders.length; i++) {
        cmdCategory.push(subFolders[i]);
        let availableCommands = fs.readdirSync(`./commands/${subFolders[i]}`).filter(files => files.endsWith(".js")).map(x => x.replace(".js", "")).join(', ');
        embed.addField(cmdCategory, availableCommands, true);
        cmdCategory.splice(subFolders[i], 1);
      }
      embed.setAuthor("Miku -- Help", "http://tinyurl.com/ybabktzo");
      embed.setColor(0x0776b7);
      embed.setThumbnail("https://tinyurl.com/MikuHelp");
      embed.setFooter("Use help <command name> for advanced help. (Including usage, aliases, etc.)\nPlease use NSFW channel to run NSFW command(s).");
      embed.setDescription("Description: `<this-is-required>` `[this-is-optional]`.");
      message.channel.send({
        embed
      });
    } else {
      let cmd = args[0];
      let find;
      if (bot.commands.has(cmd)) find = bot.commands.get(cmd);
      else if (bot.aliases.has(cmd)) find = bot.commands.get(bot.aliases.get(cmd));
      let cmdName = find.help;
      let cdDura = find.conf.cooldown;
      message.channel.send(`==== ==== Advanced Help ==== ====\n\nCommand      :: ${cmdName.name}\nCategory     :: ${cmdName.category}\nDescription  :: ${cmdName.description}\nUsage        :: ${cmdName.usage}\nParameter(s) :: ${cmdName.param}\nAliases      :: ${cmdName.aliases}\nCooldown     :: ${cdDura} second${cdDura == 1 ? "" : "(s)"}\n\n=================================`, {
        code: 'asciidoc'
      });
    }
  } // END TRY
  catch (_) { // BEGIN CATCH
    const idk = [
      `I cannot find **${args[0]}** in me (UωU)`,
      `**${args[0]}** is not a command, nor aliases! (QωQ)`,
      `Please run __help__ for available commands, **${message.author.username}** (OωO)`,
    ].random();
    const embed = new Discord.RichEmbed()
      .setAuthor("Not found!")
      .setThumbnail("https://tinyurl.com/MikuError")
      .setColor(0xf44336)
      .setDescription(idk);
    message.channel.send({
      embed
    });
  } // END CATCH
};

exports.conf = {
  aliases: ["h", "halp"],
  cooldown: 3
};

exports.help = {
  name: "help",
  category: "Utility",
  description: "Displays all available commands.",
  usage: "help [param]",
  param: "",
  aliases: "h, halp"
};