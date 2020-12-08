const Discord = require('discord.js');


exports.run = (client, message, args) => {

        if(!message.member.hasPermission("785617880049254411")) return message.channel.send('Bunu kullanamazsınız!')
        if(!message.guild.me.hasPermission("785617880049254411")) return message.channel.send('Doğru izinlere sahip değilim.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Lütfen bir kullanıcı belirtin');

        if(!member) return message.channel.send('Kullanıcı Bulunamadı');
        if(!member.bannable) return message.channel.send('Bu Kullanıcı Benden Üstte.');

        if(member.id === message.author.id) return message.channel.send('Kendini Yasaklamayı Mı Denedin Sen ?');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Belirtilmemiş';

        member.ban({reason:`${reason}`})
        .catch(err => {
            if(err) return message.channel.send('Bir şeyler yanlış gitti')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Üye Yasaklandı')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Kullanıcı Yasaklandı', member)
        .addField('Tarafından atıldı', message.author)
        .addField('Sebebi', reason)
        .setFooter('Kullanıcı Banlandı', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban'],
    permLevel: 0
};

exports.help = {
    name: 'ban',
    description: 'Ban ',
    usage: 'ban'
};