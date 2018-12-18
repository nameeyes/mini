const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
let prefijo = db.fetch(`prefix_${message.guild.id}`)
if (prefijo === null) prefijo = "m!";
var prefix = prefijo;
if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
const embed = new Discord.RichEmbed()

.setAuthor('Pedido por: '+message.author.username)
.setColor(0x00ffff)
.setTitle('Ayuda Y Presentacion')
.setDescription('Hola, mi nombre es `minimuh|bot`, soy el bot oficial de mini mi creador se llama ㄗ工口ちㄗ丹 ;ↁ#1247 espero que lo pasemos genial `' + prefijo + 'comands`')
.addField('Invítame', 'Usa: ' + '```' + prefijo + 'invite'  + '```')
.addField('**ATENCIÓN**', '``Prefix del Servidor:``'+ prefijo)
message.channel.send(embed) 
  
}
