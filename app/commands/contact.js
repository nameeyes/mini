exports.run = async (client, message, args) => {
const Discord = require("discord.js");
let cuser = message.mentions.users.first();
cuser.send('**¡Un miembro de nuestro equipo va a contactar contigo!**')

}