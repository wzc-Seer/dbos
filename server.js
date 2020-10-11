const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");
const config = require("./config.json");
const app = express();

const discordBot = require("./bot");

// this is the code for the guides
app.use(require("./guides"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
setInterval(
  () =>
    require("node-fetch")("https://discorcpoo.glitch.me/").then(() =>
      console.log("Pinged website....")
    ),
  4 * 60 * 1000
);
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
