exports.run = async (client, message, args) => {
const Discord = require("discord.js");
     const db = require("quick.db");
  let nuevoprefijo = await db.fetch(`prefix_${message.guild.id}`)
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
 const args2 = message.content.slice(9).trim().split(/ +/g);
    return new Promise(async(resolve, reject) => {
        try { 
if (!message.member.hasPermission('BAN_MEMBERS') && message.author.id !=='439871698666389525' && message.author.id !=='298178450814926848')  return message.channel.send('**No tienes suficientes permisos para usar este comando.**');
            const guildEntry = client.guilds.get(message.guild.id);
            if (!args2) return resolve(await message.channel.send(```❌``〉  Dime una id`));
            args2.forEach(id => {
              let iduser = isNaN(id)
              if(iduser) return message.channel.send("``❌``〉  No es una id Valida")
            let userToBan = id
            if (!userToBan) return (message.channel.send(```❌``〉  Dime una id o varias ids`));
            if (userToBan === message.author.id) return ( message.channel.send(```❌``〉  No te puedes banear a ti mismo`));
            if (message.guild.members.get(userToBan)) return ( message.channel.send(```❌``〉  El usuario <@${userToBan}> esta en el servidor usa el comando ban`));
            const bannedUser =  message.guild.ban(userToBan).catch(err => false);
            if (bannedUser === false) return ( message.channel.send(`:x: No he podido banear a este usuario, probablemente la id no sea valida`));
            message.channel.send(`✅ Baneado exitosamente el usuario **<@${userToBan}>**`);
        })
       } catch (err) {
            reject(err);
        }
      })
    }  