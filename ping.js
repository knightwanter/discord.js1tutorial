const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  name: "ping",
  description: "bot latency",
  execute(client, message) {
    message.channel.send("Pinging.......").then(message => {
      setTimeout(function() {
        message.edit(`🏓pong! ${client.ws.ping}ms`);
      }, 2500);
    });
  }
};