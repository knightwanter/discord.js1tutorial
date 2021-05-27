const Discord = require('discord.js);
                        
                        
module.exports = {
  name: "uptime",
  description: "Check the uptime",
  execute(client, message, args) {
    let seconds = Math.floor(client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message.channel.send(`**Uptime: \`${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\`**`)
      .catch(console.error);
  }
};
