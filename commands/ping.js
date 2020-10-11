const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`); 
    console.log('Ping command used in: ' + message.guild.id)
}

module.exports.help = {
    name: "ping",
    aliases: ["p"]
}