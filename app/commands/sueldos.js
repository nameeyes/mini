exports.run = async (client, message, args) => {
const Discord = require("discord.js");
let dueno = message.guild.owner
const embed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('Sueldos pagados ✅')
message.channel.send(embed)
  message.channel.send ("!pay <@490915547085799424> 2,500")
}