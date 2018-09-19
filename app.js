const Discord = require('discord.js');
const bot = new Discord.Client();
const configs = ('./config.json'); //extra configuration
const responses = require('./responses.json'); //responses for specific commands
const prefix = ","; //bot's default prefix
bot.on("ready", () => { 
  console.log('I am ready! :D'); 
}); 
bot.on("message", (message) => { 
  const fruit_response = responses.fruit[Math.floor(Math.random() * responses.fruit.length)];
  const args = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!(message.author.id === process.env.MASTER_ID)) return; //checks messages only with my id 
  switch(command)
  {
    case "boop":
      message.channel.send(fruit_response);
      break;
  }
});
bot.login(process.env.BOT_TOKEN);
//documentation is at https://discord.js.org/#/docs/main/stable/general/welcome
