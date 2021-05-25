const Discord = require('discord.js');
const client = new Discord.Client();
const { TOKEN, PREFIX } = require('./config.json');
const fs = require('fs');
const config = require('./config.json');



client.commands = new Discord.Collection();


const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(PREFIX) || message.author.bot)
		return;

	const args = message.content.slice(PREFIX.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command))
		return message.channel.send(`${command} is not a valid command.`);

//ADD YOUR COMMANDS HERE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
if(command === 'ping') {
  client.commands.get('ping').execute(client, message);
}



  

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	});


client.on("ready", () => {
        console.log(`${client.user.tag} is now online!`);

        client.user.setActivity(`Tutorial`, { type: "WATCHING" });
});


 
client.login(TOKEN);

