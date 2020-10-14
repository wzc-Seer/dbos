const express = require("express");
const router = express.Router();
const discordBot = require("./bot");
const Config = require('./config.json');
const app = express();
app.set('view engine', 'ejs');


router.get("/", function(request, response) {
  response.render(__dirname + "/views/index.ejs");
});
router.get("/invite", function(request, response) {
  response.redirect("https://discordapp.com/api/oauth2/authorize?client_id="+Config.bot.id +"&permissions=8&scope=bot");
});
router.get("/easter", function(request, response){
  response.render(__dirname + "/views/eastereggc");
});
// if 404
router.get("*", function(request, response) {
  response.render(__dirname + "/views/errors/404.ejs");
});
            
console.log('------------[ACTIVATING]-------------\nSHARD: guides.js ONLINE - This is a standalone shard!\n-------------------------')
module.exports = router;