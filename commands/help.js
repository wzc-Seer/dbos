const Discord = require("discord.js");
const colors = require('../colors.json');
const GuildModel = require('../models/Guild')
const { connect } = require('mongoose');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
    const req = await GuildModel.findOne({ id: message.guild.id })
    if(!req){
        const doc = new GuildModel({ id: message.guild.id })
        await doc.save();
    }
    if(req.prefix == 'null'){
        var prefix = config.bot.prefix;
    } else {
        var prefix = req.prefix;
    }
    const helpEmbed = new Discord.MessageEmbed();
        helpEmbed.setTitle('Help')
        helpEmbed.setDescription('The simple yet powerful open source discord bot!');
        helpEmbed.addField('Commands', `${prefix}ping\n${prefix}prefix\n${prefix}server`, true);
        helpEmbed.addField('Admin', `${prefix}setprefix`, true);
        helpEmbed.setColor(colors.info);
    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help",
    aliases: []
}