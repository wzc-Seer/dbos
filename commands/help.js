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
     const helpEmbed = new Discord.MessageEmbed()
            .setColor(colors.info)
            .setTitle('**Help**')
            .setURL(config.siteUrl)
            .setDescription('The simple yet powerful open source discord bot!')
            .setThumbnail('https://github.com/dxy-Seer/dbos/blob/main/public/img/logo.PNG?raw=true')
            .addFields(
                { name: '**Fun**', value: `${prefix}ping\n${prefix}prefix\n${prefix}server`, inline: true },
                { name: '**Admin**', value: `${prefix}setprefix`, inline: true },
            )
            .setTimestamp()
            .setFooter('DBOS - The simple yet powerful open source bot!', 'https://github.com/dxy-Seer/dbos/blob/main/public/img/logo.PNG?raw=true');
 
    message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help",
    aliases: []
}