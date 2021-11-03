const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'embed',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle(`Nathanz Discord Server`)
        .setDescription('Please join the discord or you will see a monstor under your bed :)')
        .setColor('00ff46')
        .setThumbnail('https://i.imgur.com/9rPavem.png')

        // message.channel.send()
        // message.reply()

        message.channel.send(embed)
    }
}