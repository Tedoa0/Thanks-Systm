const emoji = require('../emoji')
exports.run = async(client, message, args) => {

message.channel.send(`<@&${config.helpers.helper}> (${message.author})`).then(message.react(emoji.onayemoji))
  
    

 

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
    
