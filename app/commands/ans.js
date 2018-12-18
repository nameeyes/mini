exports.run =  async (client, message, args) => {
  const Discord = require("discord.js")
if(message.author.id !== '473150593570045954' && message.author.id !=='444516092535242753') return message.channel.send('Necesitas `Developer` para usar este comando.')
    let texto = args.join(" ");
  if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
  let Anunce = client.channels.get("520897955461332992")
  if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('📢**SAA Anjncios Servers**')
.setDescription(texto)
.setFooter('SAA Anuncio Official')
message.channel.bulkDelete(1); 
Anunce.send(embed)
}
 
