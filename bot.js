const Discord = require('discord.js');
const config = require('./config.json');
const { prefix, token } = require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.on('ready', async () => {
    console.log('MAIN SHARD ONLINE')

    bot.user.setStatus('idle');
})


fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0) {
            console.log("i was unable to find any commands!");
        }

        jsfile.forEach((f) => {
            let props = require(`./commands/${f}`);
            console.log(`SHARD: [${f}] IS ONLINE`);
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            })
        })
})
bot.on("message", async message => {
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLocaleLowerCase();
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    // run commands
    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
})


	// if (command === 'ping') {
	// 	message.reply('Pong!');
	// } else if (command === 'log') {
	// 	message.channel.send('logged to console!');
	// 	console.log('log cmd executed');
	// }
	// else if (message.content === `${prefix}server`) {
	// 	message.channel.send(`Server: ${message.guild.name}\nMembers: ${message.guild.memberCount}`);
	// }
	


bot.login(config.token);
