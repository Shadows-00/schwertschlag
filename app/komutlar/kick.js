const Discord = require('discord.js');

exports.run = (client, message, args) => {


        if(!message.member.hasPermission("785617880049254411")) return message.channel.send('Bunu kullanamazsınız!')
        if(!message.guild.me.hasPermission("785617880049254411")) return message.channel.send('Doğru izinlere sahip değilim.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Lütfen bir kullanıcı belirtin');

        if(!member) return message.channel.send('Kullanıcı Bulunamadı');
        if(!member.kickable) return message.channel.send('Bu Kullanıcı Benden Üstte.');

        if(member.id === message.author.id) return message.channel.send('Kendini Kickleyemezsin !');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Belirtilmemiş';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler yanlış gitti')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Üye Atıldı')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı Atıldı', member)
        .addField('Tarafından Atıldı', message.author)
        .addField('Sebebi', reason)
        .setFooter('Kullanıcı Atıldı', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(kickembed);


    }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kick'],
    permLevel: 0
};

exports.help = {
    name: 'kick',
    description: 'kick ',
    usage: 'kick'
};