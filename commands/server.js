const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Getting server stats...");
    m.edit(`Server: ${message.guild.name}\nMembers: ${message.guild.memberCount}`); 
}

module.exports.help = {
    name: "server",
    aliases: ["si"]
}