const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");
const config = require("./config.json");
const app = express();
var varPORT = config.port || 3000;
app.use(express.static("public"));
if(config.server.invite == ''){
  console.log('ERROR -> You need to input a server invite code, example: TJY6Xyg\nStopping process.');
} else if(config.siteUrl == ''){
  console.log('ERROR -> You need to input a site url, example: https://localhost\nStopping process.');
} else if(config.bot.id == ''){
  console.log('ERROR -> You need to input a bot id, example: 668843307329126410\nStopping process.');
} else if(config.bot.prefix == ''){
  console.log('ERROR -> You need to input a prefix, example: !\nStopping process.');
} else if(config.bot.token == ''){
  console.log('ERROR -> You need to input a bot token, example: NzUzMjc0MTU1MjgxMTU0MTY4.X1jzOQ.RwEgbwp5a_2svPcUijU6wrAY9Dg\nStopping process.');
} else {
  const discordBot = require("./bot");
  setInterval(
  () =>
    require("node-fetch")(config.siteUrl).then(() =>
      console.log("Pinged website....")
    ),
  4 * 60 * 1000
);
app.use(require("./err.js"));
app.use(require("./api.js"));
app.use(require("./guides"));
const listener = app.listen(varPORT, function() {
  console.log("Site online on the address: " + config.siteUrl + ":" + varPORT + "\n-------------------------");
});
}

