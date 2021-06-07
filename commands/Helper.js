exports.run = async(client, message, args) => {

message.channel.send(`<@&${config.helpers.helper}> (${message.author})`)
  
    

 

    }
    exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : [], 
         }
    
    exports.help = {
        name : 'helper',
        help: "",
        cooldown: 340
     }
    
