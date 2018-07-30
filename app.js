const Eris = require("eris");
var bot = new Eris.CommandClient(process.env.REG_BOT_TOKEN, {}, {
    description: "My bot refactored from d.js to Eris",
    owner: "SerialCereal",
    prefix: "."
});
const configs = ('./config.json');
const responses = require('./responses.json');
bot.on("ready", () => { 
  console.log('I am ready! :D'); 
}); 
bot.on("messageCreate", (msg) => { 
  const fruit_response = responses.fruit[Math.floor(Math.random() * responses.fruit.length)];
  const args = msg.content.slice((process.env.PREFIX).length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!(msg.author.id === process.env.MASTER_ID)) return; //checks messages only with my id
  if (msg.channel.id === process.env.EVAL_TEST) bot.createMessage(process.env.EVAL_TEST,eval(msg.content));
 
  switch(command)
  {
    case "pingme":
      bot.createMessage(msg.channel.id,"BOOPERS");
      break;
    case "boop":
      bot.createMessage(msg.channel.id,fruit_response);
      break;
    case "evalme":
      var doit = args.slice(1).join(" ");
      bot.createMessage(msg.channel.id,eval(doit));
      break;
  }
});
bot.connect();
//documentation is at https://discord.js.org/#/docs/main/stable/general/welcome ;)
