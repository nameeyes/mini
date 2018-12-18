exports.run = async (client, message, args) => {
const Discord = require("discord.js");
if (!message.member.hasPermission('BAN_MEMBERS') && message.author.id !=='298178450814926848' && message.author.id !=='439871698666389525')  return message.channel.send('**No tienes suficientes permisos para usar este comando.**');
var user = message.mentions.users.first()
if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
var razon = args.slice(1).join(' ')
if(!razon) return message.channel.send('Escribe un razon| saa!ban @Usuario razón')
if(!message.guild.member(user).bannable) return  message.reply('No puedo banear al usuario')
message.guild.member(user).ban(razon);
message.channel.send(`**${user}**, fue baneado del servidor, razón: ${razon}.`);
const BanEmbed = new Discord.RichEmbed()
.setTitle(`${user} ha sido baneado, razón: ${razon}`)
.setDescription('Baneado con exito!')
message.channel.send({BanEmbed})
let dueno = message.guild.owner
const OwnerEmbed = new Discord.RichEmbed()
.setColor(0xff5050)
.setTitle('🛑 Usuario Baneado')
.addField('👤 Usuario:', `${user}`, true)
.addField('🆔 ID:', `${user.id}`, true)
.addField('💳Tag', `${user.discriminator}`, true)
.addField('💬 Razón', `${razon}`, true)
.addField('🔰 Servidor:', `${message.guild.name}`, true)
.addField('🕵️‍ Baneado por:',  `${message.author.username}`, true)
.setFooter('✍ Baneado:')
.setTimestamp
dueno.send({OwnerEmbed})
message.channel.send(BanEmbed)
  
  
  //evitemos usar ñ dentro de variables
}