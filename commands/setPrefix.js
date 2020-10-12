const Discord = require("discord.js");
const GuildModel = require('../models/Guild')
const { connect } = require('mongoose');
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You are missing the following permissions: `ADMINISTRATOR`');
    if(!args.length) return message.reply('You didn\'t provide a prefix.');
    const req = await GuildModel.findOne({ id: message.guild.id })
    if(!req){
        const doc = new GuildModel({ id: message.guild.id })
        await doc.save();
    }
    if(req.prefix == 'null'){
        const doc = await GuildModel.findOneAndUpdate({ id: message.guild.id}, { $set: { prefix: args[0] }}, { new: true })
        message.reply(`Set the prefix to: \`${doc.prefix}\`.`)
    } else {
        const doc = await GuildModel.findOneAndUpdate({ id: message.guild.id}, { $set: { prefix: args[0] }}, { new: true });
            message.reply(`Set the prefix to: \`${doc.prefix}\`.`)
    } 
}

module.exports.help = {
    name: "setprefix",
    aliases: []
}