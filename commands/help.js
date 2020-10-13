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
     message.channel.send(`**Help**\nThe simple yet powerful open source discord bot!\n\n\n\n${prefix}ping\n${prefix}prefix\n${prefix}server\n\n**Admin**\n${prefix}setprefix`);
}

module.exports.help = {
    name: "help",
    aliases: []
}