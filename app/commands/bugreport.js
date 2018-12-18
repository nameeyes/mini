exports.run = async (client, message, args) => {
const Discord = require("discord.js");
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
let error = args.join(" ")
if(!error) return message.channel.send('Escribe el error encontrado.')
const embed  = new Discord.RichEmbed()
.setTitle('¡Nuevo Bug!')
.addField("**Error:**", error)
.addField("**Usuario que lo reporta:**", message.author.username)
.addField("**ID**", message.author.id)
.setColor("RANDOM")
.setFooter("¡Gracias por ayudarnos a encontrar errores!")
//----------------
const bugembed  = new Discord.RichEmbed()
.setTitle('BUG')
.setDescription('Su bug ha sido enviado correctamente')
.addField('**Error que acaba de reportar:**', error,)
.addField('**Número de Bugd:**', message.author.id)
.addField('**Estado de su entrega:**', 'Enviado')
.addField('Puede consultar el estado __actualizado__ en el servidor oficial;', 'Canal: `bugreport` - - Servidor: https://discord.gg/JkPtnYB ')
.setColor("RANDOM")
.setFooter('¡Gracias por ayudarnos a encontrar errores!')
client.channels.get('520673020386344960').send(embed);
  message.author.send(bugembed)

}
