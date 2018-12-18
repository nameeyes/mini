exports.run = async (client, message, args) => {
const Discord = require('discord.js')
 if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed() 
.setTitle('Derechos')
.setDescription('Estos son los derechos que tienes como ciudadano')
.addField('Número 1',"Tiene derecho a guardar silencio todo lo que diga podra ser utilizado en su contra.")
.addField('Número 2',"Tiene derecho a comida y bebida.")
.addField('Número 3',"Tiene derecho a un abogado si no tiene uno se le asignara uno de oficio.") 
.addField('Número 4',"Tiene derecho a una llamada pero siempre delante de un oficial")
.setColor(0x00ffff)
message.channel.send(embed)
}