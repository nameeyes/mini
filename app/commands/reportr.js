exports.run = async (client, message, args) => {
const Discord = require("discord.js");
   if (message.channel.id === "51948756621551206") return message.channel.send("No puedes usar comandos en este canal, ve a <# 51948756621551206>" )
                let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');
let dueno = message.guild.owner
if(!user) return message.channel.send("Necesitas mencionar a alguien")
if(!razon) return message.channel.send("Escribe una razón")
const sucessembed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('📫 Reporte Enviado!')
message.channel.send(sucessembed)
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('🛑 Usuario Reportado')
.addField('👤 Usuario:', `${user}`, true)
.addField('🆔 ID:', `${user.id}`, true)
.addField('💳Tag', `${user.discriminator}`, true)
.addField('🔰 Servidor:', `${message.guild.name}`, true)
.addField('💬 Razón', `${razon}`, true)
.addField('🕵️‍ Reportado por:',  `${message.author.username}`, true)
.setFooter('✍ Reportado:')
.setTimestamp()
//-------
const pembed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('🛑 Su reporte a sido enviado correctamente')
.addField('👤 Usuario:', `${user}`, true)
.addField('🆔 ID:', `${user.id}`, true)
.addField('💳Tag', `${user.discriminator}`, true)
.addField('🔰 Servidor:', `${message.guild.name}`, true)
.addField('💬 Razón', `${razon}`, true)
.addField('🕵️‍ ID del reporte', message.author.id)
dueno.send({embed})
  message.author.send(pembed)
client.channels.get('510942267339702292').send(embed);
  
  
  //evitemos usar ñ dentro de variables ¿O.k.?
}