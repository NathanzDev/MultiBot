const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "Kick Command",

    async run (client, message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cant use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); 
        if (!reason) reason = "No reason given";

        const kickembed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to kick");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");

        await mentionMember.send(kickembed);
        await mentionMember.kick({
            reason: reason
        }).then(() => message.channel.send("Successfully Kicked: " + mentionMember.user.tag))
    }
}