/* This section of code is used by the install and setup guides, if you modify it make sure you still are hosting a webpage (seen in "show") or Uptime Robot will stop working */

const express = require("express");
const router = express.Router();
const discordBotkit = require("botkit-discord");
const discordBot = require("./bot");
const Config = require('./config.json');




router.get("/domainname", function(request, response) {
  let domain = process.env.PROJECT_DOMAIN;
  response.status(200).json({
    message: domain
  });
});

router.get("/botinfo", async function(request, response) {
  let authURL;
  let domain = process.env.PROJECT_DOMAIN;
  let uptime = process.uptime();

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
    domain: domain,
    uptime: uptime
  });
});


router.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
router.get("/use", function(request, response) {
  response.redirect("https://www.npmjs.com/package/@dxy_seer/easydiscord");
});
router.get("/npm", function(request, response) {
  response.redirect("https://www.npmjs.com/package/@dxy_seer/easydiscord");
});
// if 404
router.get("*", function(request, response) {
  response.sendFile(__dirname + "/views/errors/404.html");
});


module.exports = router;