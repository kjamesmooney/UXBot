const commando = require('discord.js-commando');
const discord = require('discord.js')

class InfoAboutMECommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Jake Lore'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setDescription("I am Jake, " +
            "Associate professor of UX design. " +
            "I am the industry.")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMECommand;