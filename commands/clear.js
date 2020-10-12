const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    // if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You don\'t have the following permissions: `MANAGE_MESSAGES`.');
    // if(isNaN(args[0])) return message.reply('Please specify a number of messages between: 2\ - 100.');
    // if(args[0] > 100) return message.reply('Please insert less then 100.');
    // if(args[0] < 2) return message.reply('Please insert more then 1.');
    // message.channel.bulkDelete(args[0])
    //     .then(messages => message.reply(`Deleted ${messages.size}/${args[0]} messages.`))
    //     .catch(() => message.reply('Something went wrong while deleting the messages!'));
  
//   Werkt niet?
}

module.exports.help = {
    name: "clear",
    aliases: ["prune"]
}