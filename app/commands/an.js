exports.run =  async (client, message, args) => {
  const Discord = require("discord.js")
if(message.author.id !== '439871698666389525' & message.author.id !=='298178450814926848') return message.channel.send('Necesitas `Developer` para usar este comando.')
    let texto = args.join(" ");
  if(!texto) return message.channel.send(`Escriba un contenido para decir.`);
  if (message.channel.id === '314925888653361153') return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
  let Anunce = client.channels.get("486186301436198937")
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('📢**Anuncio**')
.setDescription(texto)
.setFooter('Nuevo Anuncio')
message.channel.bulkDelete(1); 
Anunce.send(embed)
}
 