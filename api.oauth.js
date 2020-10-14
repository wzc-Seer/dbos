const express = require("express");
const router = express.Router();
const discordBot = require("./bot");
const config = require('./config.json');
const Discord = require("discord.js");
const bot = new Discord.Client();
const OAuthClient = require('disco-oauth');
const AuthCli = new OAuthClient(config.bot.id, config.bot.secret);
const cookies = require('cookies');

// const app = express();
// const client = new OAuthClient(config.bot.id, config.bot.secret)
//   .setScopes('identify', 'guilds')
//   .setRedirect(config.siteUrl + ':'+ config.port +'/login');


// router.get('/api/auth', (req, res) => {
//     if (req.cookies.userKey) res.redirect('/dashboard');
//     else res.redirect(client.authCodeLink);
// });
// router.get('/login', async (req, res)=>{
//     try {
//       let userKey = await client.getAccess(req.query.code);
//       res.cookie('userKey', userKey);
//       res.redirect('/options');
//     }
//     catch(err) {
//       res.render('error', {
//         message: err.message, error: err
//       });
//     }
//   });
  
//   router.get('/options', (req, res) => {
//     if (!req.cookies.userKey) res.redirect('/');
//     else res.render('options', {title: 'Express EJS'});
// });
// router.get('/user', async (req, res) => {
//     if (!req.cookies.userKey) res.redirect('/');
//     else {
//       try {
//         let user = await client.getUser(req.cookies.userKey);
//         res.render('user', {title: 'Express EJS', user});
//       }
//       catch (err) {
//         res.render('error', {
//           message: err.message, error: err
//         });
//       }
//     }
// });
  
//   router.get('/guilds', async (req, res) => {
//     if (!req.cookies.userKey) res.redirect('/');
//     else {
//       try {
//         let guilds = await client.getGuilds(req.cookies.userKey);
//         console.log(guilds.size);
//         res.render('guilds', {title: 'Express EJS', guilds});
//       }
//       catch (err) {
//         res.render('error', {
//           message: err.message, error: err
//         });
//       }
//     }
// });
console.log('------------[ACTIVATING]-------------\nSHARD: api.oauth.js ONLINE - This is a standalone shard!\n-------------------------')
module.exports = router;