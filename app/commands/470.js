exports.run = async (client, message, args) => {
const Discord = require('discord.js')
 if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed() 
.setDescription('Has llamado al 911 (servicio de emergencias) para solicitar un servicio ponga uno de los comandos que se le muestran') 
.addField('Cita',"(m!cita) para pedir una cita con un juez")
.addField('Juicio',"(m!juicio) para pedir un juicio")
.addField('Firma',"(m!firma) para pedir una hora para firmar")
.setColor(0xff5050)
message.channel.send(embed)
}