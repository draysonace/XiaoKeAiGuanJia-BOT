const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'r6 dray') {
    	message.reply({embed: {
  color: 3447003,
  description: "[Dray7z | R6DB](https://r6db.com/player/a633df64-18bf-4f2d-a314-d75ab9c77657)"
}});
  	}
	
	if else (message.content === 'r6 jager') {
    	message.reply({embed: {
  color: 3447003,
  description: "[Fundy123 | R6DB](https://r6db.com/player/0ce52d73-e597-4aad-b2ac-3733b9c37194)"
}});
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
