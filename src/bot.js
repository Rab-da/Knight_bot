require('dotenv').config();
const express = require('express');
const { Token, databaseToken } = process.env;
const { connect } = require('mongoose');
const { channel } = require('diagnostics_channel');
const { Client, Collection, Events, GatewayIntentBits, ActivityType, EmbedBuilder } = require('discord.js');
const fs = require('fs');


const client = new Client({
    intents: [
        32767,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const app = express();
const port = 3000;

// 웹 서버 설정
app.get('/', (req, res) => {
    res.send('Hello, this is a Discord bot server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

client.commands = new Collection();
client.commandArray = [];
client.buttons = new Collection();
client.selectMenus = new Collection();
client.modals = new Collection();

const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles) 
    require(`./functions/${folder}/${file}`)(client);
};

client.on('messageCreate', async (message) => {
    const targetChannelIds = [
        '1268751450763427971',
        '1268530035816529940',
        '1270624005149425685',
    ];
    // 봇 자신의 메시지나 시스템 메시지는 무시
    if (message.author.bot) return;

    // 특정 채널에서만 반응하게 하려면 조건 추가 (예: 채널 ID)
    if (!targetChannelIds.includes(message.channel.id)) return;


    // 메시지를 임베드로 변환
    const embed = new EmbedBuilder()
        .setDescription(message.content)
        .setTimestamp()
        .setColor('#00a19c')
        .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
        .setFooter({ text: `Message by: ${message.author.tag}` });

    // 임베드 메시지를 보낸 후 원본 메시지를 삭제 (원하지 않으면 삭제 부분 제거)
    await message.channel.send({ embeds: [embed] });
    await message.delete();
});


client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(Token);
(async () => {
    connect(databaseToken).catch(console.error);
})();
