const fs = require('fs');
const Discord = require('discord.js');
const {TOKEN, PREFIX} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();


client.login('ODg0MjcxMDM5NjAzOTY2MDAz.YTWDlA.sqB1mD6Q2KgA4erEGorwdGuRXsc');
client.commands = new Collection();
client.prefix = PREFIX;













const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js') );
//YeseungBot-Command 폴더의 .js 파일들을 모두 읽는다.

for(const file of commandFiles) {
    const command = require(`./conmmands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg =>{
    
});