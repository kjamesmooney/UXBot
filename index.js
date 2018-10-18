const Commando = require('discord.js-commando');
const bot = new Commando.Client();


bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message' , function(message){
    if(message.content.includes('hey'))
    {
        message.reply("Give me your elevator pitch, " + message.author);
    }
});

bot.on('message' , function(message){
    if(message.content.includes('design'))
    {
        message.reply("What is DESIGN?");
    }
});

bot.on('message' , function(message){
    if(message.content.includes('dying'))
    {
        message.reply("Sounds like dark UX to me.");
    }
});

bot.on('message' , function(message){
    if(message.content.includes('same'))
    {
        message.reply("Good competitive analysis.");
    }
});

bot.on('message' , function(message){
    if(message.content.includes('drink'))
    {
        message.reply(message.author + " which one are you more into, coffee or tea?");
    }
});

bot.on('message' , function(message){
    if(message.content.includes('just'))
    {
        message.reply(message.author + " DON'T SAY THE J WORD");
    }
});

bot.on('message' , function(message){
    if(message.content.includes('Jake'))
    {
        message.reply('I AM THE INDUSTRY');
    }
});

bot.on('message' , function(message){
    if(message.content.includes('let you know'))
    {
        message.reply('Do it with more emotion next time.');
    }
});

bot.on('message' , function(message){
    if(message.content.includes('Jeff Bezos'))
    {
        message.reply('*mouths* Elevator pitch!');
    }
});

bot.on('message' , function(message){
    if(message.content.includes('mouse'))
    {
        message.reply('I made 47 friggen mice');
        message.reply('And one keyboard.');
    }
});

bot.on('message' , function(message){
    if(message.content.includes('raccoon'))
    {
        message.reply('Is that a fox?');
    }
});

bot.on('message' , function(message){
    if(message.content.includes('our'))
    {
        message.reply('Speak up.');
    }
});

bot.on('ready' ,function(){
    console.log("UX sensors hot")
})

bot.login('NTAxMjExMTcwNDA1ODc1NzEy.DqWNCw.JLtNiP5KB2TPphGyyrOA-uNQtqo');