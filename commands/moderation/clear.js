module.exports = {
    name: 'clear',
    aliases: ['purge'],
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have permission to use this command') //When the author doesn't have the manage messages permission it wouldn't let them use the command
        if(!args[0]) return message.channel.send('Please specify an amount to delete (1-99)') // when there is no number provided
        if(isNaN(args[0])) return message.channel.send('Only numbers are allowed') // checking if the args is a number
        if(parseInt(args[0]) > 99) return message.channel.send('The max amount of messages you can delete is 99') //Max amount of messages available to delete is 99
        //now lets delete the messages
            await message.channel.bulkDelete(parseInt(args[0]) + 1) // deleting messages
                .catch(err => console.log(err)) // if there are errors it will show them in the console / terminal
            message.channel.send(`Deleted ${args[0]} messages! (This Message will automatically delete)`).then(m => m.delete({ timeout: 5000})) // sending the success message then deleting after 5 seconds.
    }        
}
