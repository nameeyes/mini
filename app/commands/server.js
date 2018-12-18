const Discord = require("discord.js");
const bot = new Discord.Client();

exports.run = (client, message, guild, bot, ops) => {
  if(message.author.id !== '473150593570045954' && message.author.id !=='447423667186565130' && message.author.id !=='490915547085799424' && message.author.id !=='439414657178927105' && message.author.id !=='490915547085799424')  return message.channel.send("``❌``〉 No tienes permiso para usar este comando. Solo los __Desarrolladores__ de `D-SAA`, pueden utilizarlo.")
  let string = '';

    client.guilds.forEach(guild => {
        string += '***Server Name:*** ' + guild.name + '\n' + '***Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`El bot esta en:  ${string}`)
        .setTimestamp()
        .setFooter("Comando usado por: " + message.author.username, message.author.avatarURL);
    message.author.send(botembed);
    message.channel.send('Los servidores han sido enviados correctamente a tu MD');
};