exports.run = async (client, message, args) => {
const Discord = require("discord.js");
  let razon = args.slice(1).join(' ');
let dueno = message.guild.owner
if(!razon) return message.channel.send("Escribe una razón")
const sucessembed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('Los policias van de camino')
message.channel.send(sucessembed)
const embed = new Discord.RichEmbed()
.setColor(0x00ffff)
.setTitle('NUEVA LLAMADA')
.addField('👤 Razon:', `${razon}`, true)
.addField('☎ Hecha por:',  `${message.author.username}`, true)
.addField('📯ping📯',"<@&485785101636993035>")
.setFooter('⌚ Hora:')
.setTimestamp()
client.channels.get('524324025988546572').send(embed);
("Rapido <@&524006130041749509>")
client.channels.get('524324025988546572').send("<@&485785101636993035>")
}