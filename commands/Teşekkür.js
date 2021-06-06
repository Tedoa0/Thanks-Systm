const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require('../config.json')
const ayarlar = require('../ayarlar.json')
const emoji = require('../emoji')

exports.run = async(client, message, args) => {
    let embed = new MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic : true })).setColor("RANDOM")
     var prefix = ayarlar.prefix
    if (args[0] && (args[0].includes('yardım') || args[0].includes('bilgi') || args[0].includes('help') )){

        message.channel.send(embed.setFooter(config.bots.footer).setDescription(`\`${prefix}teşekkür @Tedoa/ID <yorum> / top / reset\``))
        message.react(emoji.tedoa)
        return;
}

if (args[0] && (args[0].includes('top') || args[0].includes('liste') )){
    

    let top =  message.guild.members.cache.filter(uye => db.get(`teşşekür.${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`teşşekür.${uye2.id}`))-Number(db.get(`teşşekür.${uye1.id}`)))
    .slice(0, 15).map((uye, index) => ` \`${index+1}.\` ${uye} - **${db.get(`teşşekür.${uye.id}`)}** teşekkür `).join('\n')
    
    message.channel.send(embed.setTimestamp().setFooter(message.author.tag+" tarafından istendi!", message.author.avatarURL)
    .setDescription(`

    ${top || "Kimse bir teşşekür almamış!"}`))
  
    message.react(emoji.onayemoji)
 
    return;

}



let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!member) return message.channel.send(embed.setDescription(`${message.author} Lütfen bir kullanıcı belirtin @Tedoa/İD gibi.`)).then(tedoa => tedoa.delete({timeout : 8000})).then(message.react(emoji.redemoj))
if (member.user.bot) return message.channel.send(embed.setDescription(`${message.author} Botlara teşekkür edemezsin!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react(emoji.redemoj))
if(member.id === message.author.id) return message.channel.send(embed.setDescription(`${message.author} Kendi kendine teşekkür edemezsin!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react(emoji.redemoj))
let yorum = args.splice(2).join(" ") || "Yorum Belirtilmedi."


if (args[0] && (args[0].includes('delete') || args[0].includes('sıfırla') ||  args[0].includes('reset') )){


    if (!config.helpers.helper.some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
    return message.channel.send(embed.setDescription(`${message.author} Bu komutu kullanabilmek için yeterli yetkin yok!`)).then(tedoa => tedoa.delete({timeout : 5000})).then(message.react(emoji.redemoj))
    
    if (member.roles.cache.has(config.helpers.helper)) {
        db.delete(`teşşekür.${member.id}`)
    message.channel.send(embed.setDescription(`${member} adlı kullanıcının teşekkür verisi başarıyla sıfırlandı`)).then(tedoa => tedoa.delete({ timeout : 10000 }))
    message.react(emoji.onayemoji)
    } else {
        message.channel.send(embed.setDescription(`Helper olmayan bir kullanıcı nasıl teşşekür alabilir aq ?`)).then(tedoa => tedoa.delete({ timeout : 10000 })).then(message.react(emoji.redemoj))
    }

    return;

}



if (member.roles.cache.has(config.helpers.helper)) {

db.add(`teşşekür.${member.id}`, +1)
message.channel.send(embed.setDescription(`
${member} adlı helpere, ${message.author} tarafından teşekkür edildi! ${emoji.tedoa}`))
message.react(emoji.tedoa)


} else {
    message.channel.send(embed.setDescription(`${message.author} bu kullanıcı bir helper değil sadece helper (<@&${config.helpers.helper}>) rolü olan kişilere teşekkür edebilirsin!`)).then(tedoa => tedoa.delete({ timeout : 10000 })).then(message.react(emoji.redemoj))
}

    
    

 

    }
    exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : ["thanks","thank","thank-you","tşk"], 
         }
    
    exports.help = {
        name : 'teşekkür',
        help: "",
        cooldown: 1   
     }
    