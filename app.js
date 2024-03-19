const { App } = require("@slack/bolt");
require("dotenv").config();
const axios = require("axios");
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000,
});

app.message("hello", async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log(message);
  await say(`Hey there <@${message.user}>`);
});

(async () => {
  // Start your app
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();
