const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **No tienes permisos para hacer esto .**");
  if(!args[0]) return message.channel.send(":x: **Di el numero de mensajes que hay que borrar .**");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`:pencil2: ${args[0]} mensajes borrados.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}