const Discord = require('discord.js');
const Client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!';
});

client.on('message', message =>{
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

//THIS MUST BE THIS WAY
client.login(process.env.NDkwNTc1MjE1NDI4ODk0NzIy.DoRMbw.9aJgoAKNFV9srVcjO5vYL_m1gVM);
