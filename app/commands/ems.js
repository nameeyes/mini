exports.run = async (client, message, args) => {
const Discord = require("discord.js");
  let razon = args.slice(1).join(' ');
let dueno = message.guild.owner
if(!razon) return message.channel.send("Escribe una razón")
const sucessembed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('Los sanitarios van de camino')
message.channel.send(sucessembed)
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('NUEVA LLAMADA')
.addField('👤 Razon:', `${razon}`, true)
.addField('☎ Hecha por:',  `${message.author.username}`, true)
.addField('📯ping📯',"<@&524006130041749509>")
.setFooter('⌚ Hora:')
.setTimestamp()
client.channels.get('524327484229943306').send(embed);
  client.channels.get('524327484229943306').send("<@&485203213084131329>")
}
 