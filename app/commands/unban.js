exports.run = (client, message, args) => {
   if (message.channel.id === "506011958428827648") return message.channel.send("No puedes usar comandos en este canal, ve a <# 506012193893122058>" )
  if (!message.member.hasPermission('BAN_MEMBERS') && message.author.id !=='470027457488224256' && message.author.id !=='444516092535242753')  return message.channel.send('**No tienes suficientes permisos para usar este comando.**');
  let user = args.join(" ")
if (!user) return message.channel.send("Introduzca la id de un usuario baneado!")
  message.guild.unban(user)
  message.channel.send("~~Desbaneado exitosamente el usuario:~~ <@" + user + ">")
}