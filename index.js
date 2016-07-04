var BotKit = require("botkit")
var WitBot = require("witbot")

// Grab SLACK_TOKEN variable in command line
var SlackToken = process.env.SLACK_TOKEN
var WitToken = process.env.WIT_TOKEN

// Create botkit controller
var controller = BotKit.slackbot({
  debug: false
});

// Spawn controller
controller.spawn({
  token: SlackToken
// Pass token and start realtime messaging
}).startRTM(function(err, bot, payload) {
  if (err) {
    throw new Error("Error connecting to slack: ", err)
  }
  // Successfully connected
  console.log("Connected to Slack")
});
// BASH: SLACK_TOKEN=TOKEN_FOR_BOT_GENERATED npm start

var activeWitBot = WitBot(WitToken)