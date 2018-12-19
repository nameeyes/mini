exports.run = async (client, message, args) => {
const Discord = require("discord.js");
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <#519883032837095434>" )
                let user = message.mentions.users.first();
        let razon = args.slice(0).join(' ');
let dueno = message.guild.owner
if(!razon) return message.channel.send("Escribe la prenda")
const sucessembed = new Discord.RichEmbed()
.setColor(0x00ffff)
.setTitle('👤 Objeto puesto')
.addField('🔴 Objeto:', `${razon}`, true)
message.channel.send(sucessembed)
}