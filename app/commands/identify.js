exports.run =  async (client, message, args) => {
  const Discord = require("discord.js")
if(message.author.id !== '473150593570045954' & message.author.id !=='444516092535242753') return message.channel.send('Necesitas `Developer` para usar este comando.')
    let texto = args.join(" ");
  if(!texto) return message.channel.send(`Escriba un contenido para decir.`);
  if (message.channel.id === '314925888653361153') return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
  let Anunce = client.channels.get("519250276167843880")
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('📢**Identificación nueva**')
.setDescription(texto)
.setFooter('SAA Anuncio Official')
message.channel.bulkDelete(1); 
Anunce.send(embed)
}
 