const express = require("express");
const router = express.Router();
const discordBot = require("./bot");
const Config = require('./config.json');
const Discord = require("discord.js");
const bot = new Discord.Client();
router.get("/api/domain", function(request, response) {
    let domain = Config.siteUrl;
    let port = Config.port;
    response.status(200).json({
      url: domain,
      port: port
    });
  });
router.get("/api/server", function(request, response){
    let serverInv = Config.server.invite;
    response.status(200).json({
        inviteCode: serverInv
    });
});
router.get("/s/join", function(request, response){
    let serverInv = Config.server.invite;
    response.redirect('https://discord.gg/invite/' + serverInv)
});
router.get("/api/git", function(request, response){
  response.redirect('https://github.com/dxy-Seer/dbos/');
});
router.get("/api/bot", async function(request, response) {
    let authURL;
    let domain = process.env.PROJECT_DOMAIN;
    let uptime = process.uptime();
    let ID = Config.bot.id;
    try {
      authURL =
        "https://discordapp.com/api/oauth2/authorize?client_id=" +
        Config.bot.id +
        "&permissions=8&scope=bot";
    } catch (e) {
      console.error(e);
    }
    
    response.status(200).json({
      url: authURL,
      invite: Config.server.invite,
      uptime: uptime,
      Clientid: ID
  });
});


router.get("/api/b/version", async function(request, response) {

    var VNUM = Config.bot.ver;

    if(VNUM == "null" || VNUM == "undefined"){
      var VNUMF = "0.0.0";
    } else {
      var VNUMF = VNUM;
    }

  response.status(200).json({
    Version: VNUMF
});
});

console.log('------------[ACTIVATING]-------------\nSHARD: api.js ONLINE - This is a standalone shard!\n-------------------------')
module.exports = router;