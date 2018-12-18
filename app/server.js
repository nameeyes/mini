const http = require('http');
const express = require('express');
const app = express();


//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

//------------------
//CODE
//Aqui Inicia El CopyPaste XD -XDDDDD - Es facil de configurar esa madre nmms
//------------------

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

//var prefix = "m!"
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));
 
  let estados = ['m!help']
  let random = Math.floor((Math.random() * estados.length))
  let efinal = estados[random];


client.on("ready", () => {
  console.log(`Estoy listo!,y
           conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
 
  client.user.setPresence( {
        game: {
            name: `${efinal}`,
            type: "PLAYING"
        }
})
}, 1000
 )
       
   
  


//EL BOT ENTRA EN UN SERVIDOR

client.on("guildCreate", async guild => {

var embed = new Discord.RichEmbed()

.setColor('RANDOM') 
.setTitle('He sido añadido a un nuevo servidor!')

.setThumbnail(guild.iconURL)

.addField('Nombre:', `${guild.name}`)

.addField('ID:', `${guild.id}`) 

.addField('Dueño:', `${guild.owner.user.tag}`)

.addField('Usuarios:', `${guild.memberCount}`)

.addField('Invitación:', `${guild.invite.url}`)

client.channels.get("520884650462150667").send(embed)

});

//EL BOT SALE DE UN SERVIDOR

client.on("guildDelete", async guild => {

var embed = new Discord.RichEmbed()

.setColor('RANDOM') 
.setTitle('He sido kickeado en un servidor!')

.setThumbnail(guild.iconURL)

.addField('Nombre:', `${guild.name}`)

.addField('ID:', `${guild.id}`) 

.addField('Dueño:', `${guild.owner.user.tag}`)

.addField('Usuarios:', `${guild.memberCount}`)

.addField('Invitación:', `${guild.invite.url}`)
client.channels.get("519888538674921488").send(embed)

});



/*
  var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0 

}).then(invite =>
    message.channel.send(invite.url)
);

}
*/







client.on('message', async (message) => {
  if (!message.guild) return;
  let prefijo = db.fetch(`prefix_${message.guild.id}`)
  if (prefijo === null) prefijo = "m!";
  var prefix = prefijo;
  if (message.author.bot) return;
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(' ');
  let command = args.shift().toLowerCase();
  let sender = message.author;
  let mes = message.content.toUpperCase();
  let estados = [prefijo + 'help']
  let random = Math.floor((Math.random() * estados.length))
  let efinal = estados[random];
  
  

    if(sender.id === '509128110214742016'){
  return;
  }
  
  //Esto serpa mejorado por Agate, reverenda KAKA es esto, pondré para que en cada servidor configuren las palabras prohibidas
  if(mes.includes('Puto')){
  message.delete()
    message.author.send('La palabra **Puto** es inapropiada, por favor corrige tu lenguaje; Gracias')
  }
  
    if(mes.includes('Puta')){
  message.delete()
    message.author.send('La palabra **Puta** es inapropiada, por favor corrige tu lenguaje; Gracias')
  }
  
  
    if(mes.includes('Gilipollas')){
  message.delete()
    message.author.send('La palabra **Gilipollas** es inapropiada, por favor corrige tu lenguaje; Gracias')
  }
  
    if(mes.includes('raid')){
  message.delete()
    message.author.send('La palabra **raid** puede significar peligro, por favor corrige tu lenguaje; tu mensaje y servidor a sido enviado a nuestro equipo; Gracias')
  }
  
  
  
  

//Prefix Info of guild by Tomi
if (message.content === "prefix") return message.reply("Hola mi prefijo es: **" + prefijo + "** ")
  
  
if (message.content === "m") return message.reply("Security")
  
  if (message.content === "m") return message.reply("Security")
  
 
  
  
  
  
  
 //Command Handeler Aqui   By Tomi
  if(!message.content.startsWith(prefix)) return;
  try { 
  let commands = require(`./commands/${command}.js`);
  if (!commands) return;
  if (message.channel.id === "506011958428827648") return message.channel.send("No puedo enviar comandos aqui, porfavor ve a <#506012193893122058>")
  commands.run(client, message, args);
  } catch (e) {
  console.log(e.stack);
  } finally {
    let logger = client.channels.get("514175759716450317")
    const embed = new Discord.RichEmbed()
 .setTitle('Logger Commands')
 .setDescription(`**➱Comando usado:** | `+ prefijo + command + ` | **➱Usado en:** | ${message.guild.name} | **➱En el canal:** | <#${message.channel.id}> | **➱Comando usado por:** <@${message.author.id}> (${message.author.id})`)
 .setFooter('Command Log')
 .setTimestamp()
 logger.send({embed})
    
  }  
  

  
  

});


client.on("guildCreate", async guild => {
  const embed = new Discord.RichEmbed()
  .setColor(0x006666)
  .setTitle('Gracias por invitarme')
  .setDescription('Dejame contarte algunas de mis caracteristicas que ayudaran a tu servidor a tener muchas más seguridad')
  .addField('[Sistema de Reportes]', 'Si un usuario de tu server es reportado se te enviara un mensaje con la informacíon además de que tenemos contacto con **Discord Trust & Safety**')
  .addField('[Baneos/Kickeos]', 'En caso de que alguien sea baneado o kickeado de tu servidor se te mandara un mensaje tambien con la inofrmacion suficiente además de que esto puede ayudar a saber de las personas que sean un peligro')
  .addField('[Confianza con el staff]', 'Si piensas que el bot no es seguro, tranquilo, este bot ha sido diseñado para proteger tu servidor y su mision es hacer que la privacidad del usuario siempre sea de la mejor')
guild.owner.send(embed)
  })
client.login(process.env.TOKEN)