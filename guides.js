const express = require("express");
const router = express.Router();
const discordBot = require("./bot");
const Config = require('./config.json');



router.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
router.get("/invite", function(request, response) {
  response.redirect("https://discordapp.com/api/oauth2/authorize?client_id="+Config.bot.id +"&permissions=8&scope=bot");
});
router.get("/easter", function(request, response){
  response.sendFile(__dirname + "/views/easteregg.html");
});
// if 404
router.get("*", function(request, response) {
  response.sendFile(__dirname + "/views/errors/404.html");
});
            
console.log('------------[ACTIVATING]-------------\nSHARD: guides.js ONLINE - This is a standalone shard!\n-------------------------')
module.exports = router;