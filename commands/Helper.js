const emoji = require('../emoji')
const config = require('../config.json')
exports.run = async(client, message, args) => {
 if(message.channel.id !== config.helpers.helperKanal) return message.channel.send(`Bu komutu sadece <#${config.helpers.helperKanal}> Kanalında Kullanabilirsin`).then(tedoa => tedoa.delete({ timeout : 10000 })).then(message.react(emoji.redemoji)) 
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
    
