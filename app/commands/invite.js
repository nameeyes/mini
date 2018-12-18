exports.run = async (client, message, args) => {
const Discord = require('discord.js')
 if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed() 
.setDescription('\n[Invítame pulsando aquí](https://discordapp.com/api/oauth2/authorize?client_id=518945623542595589&permissions=8&scope=bot)\n') 
.setColor(0x00ffff)
message.channel.send(embed)
}