exports.run = async (client, message, args) => {
const Discord = require("discord.js");
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <#519883032837095434>" )
                let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
let dueno = message.guild.owner
if(!user) return message.channel.send("Necesitas mencionar a alguien")
if(!razon) return message.channel.send("Escribe el objeto")
const sucessembed = new Discord.RichEmbed()
.setColor(0x00ffff)
.setTitle('✅ Objeto entregado')
message.channel.send(sucessembed)
const embed = new Discord.RichEmbed()
.setColor(0x00ffff)
.setTitle('⬅ Objeto Recibido')
.addField('👤 Entregado a:', `${user}`, true)
.addField('🔴 Objeto', `${razon}`, true)
.addField('➡ Entregado por:',  `${message.author.username}`, true)
.setTimestamp()
message.channel.send(embed)
}