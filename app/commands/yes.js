exports.run =  async (client, message, args) => {
  const Discord = require("discord.js")

if(message.author.id !== '439871698666389525' && message.author.id !=='298178450814926848' && message.author.id !== '473150593570045954') return message.channel.send('Necesitas `Report Asisstant` para usar este comando.')
    let aceptado = args.join(" ");
  if(!aceptado) return message.channel.send(`Escriba el reporte que quiera aceptar.`);
  let si = client.channels.get("524035707262730243")
  if (message.channel.id === "473150593570045954") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('¡Reporte Aceptado!')
.addField('**Reporte aceptado**', aceptado)
.addField('**Aceptado por:**', message.author.username)
.setFooter('Ha sido aceptado por nuestro equipo de Report Asisstants')
si.send(embed)
}