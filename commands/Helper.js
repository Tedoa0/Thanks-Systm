const emoji = require('../emoji')
const config = require('../config.json')
exports.run = async(client, message, args) => {
 if(message.channel.id !== "Kanal İd") return message.channel.send('Bu komutu sadece <#Kanal ID> Kanalında Kullanabilirsin').then(tedoa => tedoa.delete({ timeout : 10000 })) 
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
    
