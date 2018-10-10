const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '早安') {
    	message.reply('早安');
  	}
	
	else if(message.content === '午安') {
    	message.reply('午安');
  	}
	
	else if(message.content === '晚安') {
    	message.reply('晚安');
  	}
	
	else if(message.content === '安安') {
    	message.reply('安安');
  	}
	
	else if(message.content === '拜拜') {
    	message.reply('拜拜');
  	}
	
	else if(message.content === '大家早安') {
    	message.reply('早安');
  	}
	
	else if(message.content === '大家午安') {
    	message.reply('午安');
  	}
	
	else if(message.content === '大家晚安') {
    	message.reply('晚安');
  	}
	
	else if(message.content === '大家安安') {
    	message.reply('安安');
  	}
	
	else if(message.content === '大家拜拜') {
    	message.reply('拜拜');
  	}
	
	else if(message.content === '有人要打嗎') {
    	message.reply('我要!');
  	}
	
	else if(message.content === '我的改變') {
    	message.reply('你看得見!');
  	}
	
	else if(message.content === '愚者的改變') {
    	message.reply('大家看得見!');
  	}
	
	else if(message.content === '山藥 當歸 枸杞') {
    	message.reply('Go!');
  	}
	
	else if(message.content === '上帝是公平的') {
    	message.reply('因為他對每個人都不公平 Bang!');
  	}
	
	else if(message.content === '誰最可愛') {
    	message.reply('嫻嫻最可愛!');
  	}
	
	else if(message.content === '我最拿手的菜是什麼') {
    	message.reply('我覺得你燒的白開水不錯');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
