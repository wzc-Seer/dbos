const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

 
         if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You do not have permission to use this command!')
         if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('Something went wrong! Atlas doesn\'t have the right permissions to execute this command!')

         const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

         if(!args[0]) return message.channel.send('Please specify a user!');

         if(!member) return message.channel.send('Can\'t find this user in the server.');
         if(!member.kickable) return message.channel.send('This user can\'t be kicked since they have a higher role than me.');

         if(member.id === message.author.id) return message.channel.send(`${member}, you can\'t kick yourself!`);

         let reason = args.slice(1).join(" ");

         if(reason === undefined) reason = 'Unspecified';

         member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong!')
         })

        message.channel.send(`${member} was successfully kicked!`);

   }






module.exports.help = {
    name: "kick",
    aliases: ["remove"]
}