  exports.run =  async (client, message, args) => { 
     const Discord = require("discord.js");
     const Jimp = require("jimp");
     if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
 
Jimp.read("https://cdn.glitch.com/097391af-d97d-4b70-9d63-c50b2daaa70f%2FIcono-publico.png?1542913379555", function (err, imgprecesada) {
imgprecesada.resize(500, 500); 
  imgprecesada.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
message.channel.send(``,new Discord.Attachment(buffer ,`ia.png`))    
 
      });
  });
  }