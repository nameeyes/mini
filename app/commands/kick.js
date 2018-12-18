exports.run = async (client, message, args) => {
  const Discord = require("discord.js")
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
if (!message.member.hasPermission('KICK_MEMBERS') && message.author.id !=='298178450814926848' && message.author.id !=='439871698666389525')  return message.channel.send('**No tienes suficientes permisos para usar este comando.**');

    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');
    
    if (message.mentions.users.size < 1) return message.reply('Debes mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `saa!kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo kickear al usuario mencionado.');
     
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue kickeado del servidor, razÃ³n: ${razon}.`);
              const BanEmbed = new Discord.RichEmbed()
          .setTitle(`${user} ha sido baneado, razÃ³n: ${razon}`)
          .setDescription('Baneado con exito!')
          message.channel.send({BanEmbed})
          let dueno = message.guild.owner
          const OwnerEmbed = new Discord.RichEmbed()
          .setColor(0xff5050)
          .setTitle('Usuario Expulsado')
          .addField('Usuario:', `${user}`, true)
          .addField('ID:', `${user.id}`, true)
          .addField('Tag', `${user.discriminator}`, true)
          .addField('Razon', `${razon}`, true)
          .addField('Servidor:', `${message.guild.name}`, true)
          .addField('Expulsado por:',  `${message.author.username}`, true)
          .setFooter('Expulsado:')
          .setTimestamp
          dueno.send({OwnerEmbed})
              message.channel.send(BanEmbed)
    //evitemos usar ñ dentro de variables
}