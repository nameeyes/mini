exports.run = async (client, message, args) => {
const Discord = require('discord.js')
 if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed() 
.setDescription('Has llamado al 911 (servicio de emergencias) para solicitar un servicio ponga uno de los comandos que se le muestran') 
.addField('Policia',"(m!policia llam) para pedir este servicio")
.addField('EMS',"(m!ems) para pedir este servicio")
.setColor(0xff5050)
message.channel.send(embed)
}