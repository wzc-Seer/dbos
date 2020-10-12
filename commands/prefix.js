const Discord = require("discord.js");
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
        message.reply(`Current prefix: ${config.bot.prefix}`)
    } else {
        message.reply(`Current prefix: ${req.prefix}`)   
    }
    
}

module.exports.help = {
    name: "prefix",
    aliases: []
}