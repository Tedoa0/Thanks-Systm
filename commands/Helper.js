const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require('../config.json')
const ayarlar = require('../ayarlar.json')
const emoji = require('../emoji')

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
    
