exports.run = async (client, message, args,) => {
const Discord = require("discord.js");
  let db = require("quick.db");
let prefijo = db.fetch(`prefix_${message.guild.id}`)
if (prefijo === null) prefijo = "m!";
var prefix = prefijo;
  
  
  let subcomando = args.slice(0).join(" ")
  
  let emoji = client.emojis.get("509830641223860244")
  
  if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
  
  
    
  
  
  
  
    if(subcomando === "others"){
    const otros = new Discord.RichEmbed()
     .setColor(0x006666)
    .setTitle('Comands Others')
    .addField('seenon', 'Busca los servers en los que está un usuario [Estado BETA]')
    .addField('say', 'Repite lo que le digas')

    message.channel.send(otros)
            message.delete(menu)
}
  
  
  
    if(subcomando === "admin"){
    const admin = new Discord.RichEmbed()
     .setColor(0x006666)
    .setTitle('Comands Admin')
    .addField('ban', 'Banea al usuario que menciones')
    .addField('kick', 'Kickea al usuario que menciones')
    .addField('hackban', 'Banea a un usuario sin que esté en el servidor [Estado BETA]')
    .addField('iaban', 'Banea a nuestra list ade usuarios  maliciosos')
    .addField('idban', 'Banea la ID que le digas')
    .addField('setprefix', 'Cambia el prefix al que le digas')
    .addField('sos', 'Envía una invitación a yodas la agencias conocidas en caso de que el servidor esté sufriendo un ataque')
    .addField('tempmute', 'Mutea temporalmente al usuario que menciones')
    .addField('unban', 'Desbanea el usuario que le digas')
message.channel.send(admin)
          message.delete(menu)
}
  
  
      if(subcomando === "help"){
    const ayuda = new Discord.RichEmbed()
     .setColor(0x006666)
    .setTitle('Comands Help')
    .addField('help', 'Muestra la ayuda del bot')
    .addField('bugreport', 'Reporta un bug, si es un fallo de seguridad, podrás recibir alguna recompensa')
    .addField('invite', 'Muestra la invitación del bot')
    .addField('report', 'Reporta al usuario que menciones')
    .addField('sugerency', 'Ayuda al equipo de Desarrolladores  con tus sugerencias')
message.channel.send(ayuda)
            message.delete(menu)
      }
      if(subcomando === "roleplay"){
        const roleplay = new Discord.RichEmbed()
          .setColor()
        .setTitle('Comands roleplay')
        .addField()
        .addField()
        message.channel.send(roleplay)
        message.delete(menu)
      }
        if(subcomando === "EMS"){
          const EMS = new Discord.RichEmbed()
            .setColor()
          .setTitle ('(Comandos Ems')
          .addField()
          .addField()
          message.channel.send(roleplay)
          message.delete(menu)
      }
     const menu = new Discord.RichEmbed()
   .setColor(0x006666)
   .setTitle(`${emoji} Comandos:`)
   .setDescription('Usa el ejemplo de como acceder a los comandos indicados haciendo lo que dice debajo de cada categoria')
   .addField('🔧 **Server Prefix**', prefijo)
   .addField('🔰 **Administratión**', prefijo+'comands admin')
   .addField('🗃 **Others**', prefijo+'comands others')
   .addField('⚡ **Help**', prefijo+'comands help')
   .addField('💼 **Roleplay**', prefijo+'comands roleplay')
   message.channel.send(menu)
  
}
