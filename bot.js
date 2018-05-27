const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'r6 dray') {
    	message.reply('embed=discord.Embed(title="Dray7z | R6DB", url="https://r6db.com/player/a633df64-18bf-4f2d-a314-d75ab9c77657")
embed.add_field(name=, value=undefined, inline=False)
await self.bot.say(embed=embed)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
