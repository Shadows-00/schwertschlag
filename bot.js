const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `Az Önce Bot Ping yedi, Sorun önemli değil merak etme. Hatayı düzelttik.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const db = require('quick.db')
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");
moment.locale("tr")
const chalk = require("chalk");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
////////////OtoCevap


/////////////////Sa-As
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sa") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave:  ** "
    );
  }
});

////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Sea") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});
////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selam") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
///////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});

////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamlar") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin  :wave: ** "
    );
  }
});
//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "selamunaleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
/////////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "SelamunAleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});

//////////////
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "Selamun Aleyküm") {
    msg.reply(
      "**Aleyküm Selam Hoşgeldin :wave: ** "
    );
  }
});
//////////https://discord.gg/NP7Ar2j
client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "link") {
    msg.reply(
      "**https://discord.gg/rjGG7S7Pqv ** "
    );
  }
});

client.on("message", async (msg, member, guild) => {
  if (msg.content.toLowerCase() === "!link") {
    msg.reply(
      "**https://discord.gg/rjGG7S7Pqv ** "
    );
  }
});


//--------------------------------KOMUTLAR-------------------------------\\
//TAG ALANA ROL



//HG MESAJI
client.on('guildMemberAdd', (member, msg) => {
  const moment = require('moment')
	let günler = {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
	}
	  let aylar = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
  let endAt = member.user.createdAt
      let gün = moment(new Date(endAt).toISOString()).format('DD')
      let ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
     let yıl =  moment(new Date(endAt).toISOString()).format('YYYY')
     let saat = moment(new Date(endAt).toISOString()).format('HH:mm')
let kuruluş = `${gün} ${ay} ${yıl} ${saat}`
   // let kuruluş = moment(user.author.createdAt).format('YYYY-MM-DD HH:mm:ss')
	//let kuruluş = user.createdAt.toDateString().replace("Sun","Pazar").replace("Mon","Pazartesi").replace("Tue","Salı").replace("Wed","Çarşamba").replace("Thu","Perşembe").replace("Fri","Cuma").replace("Sat","Cumartesi").replace("Jan","Ocak").replace("Feb","Şubat").replace("Mar","Mart").replace("Apr","Nisan").replace("May","Mayıs").replace("June","Haziran").replace("July","Temmuz").replace("Aug","Ağustos").replace("Sep","Eylül").replace("Oct","Ekim").replace("Nov","Kasım").replace("Dec","Aralık")   
	let oskobs = new Discord.MessageEmbed()
})






//ŞÜpheli Güvenli Hesap Belirleme
client.on("guildMemberAdd", async member => {
      let gkisi = client.users.cache.get(member.id);
      const ktarih = new Date().getTime() - gkisi.createdAt.getTime();   

    if (ktarih < 2592000001) {
    member.roles.add("785619212919504896")//Şüpheli Hesap
    
    }else{
    
    member.roles.add("785617425567055935")//Güvenilir Hesağ
    
      }
});
  