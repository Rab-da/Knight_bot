const {
    Client,
    SlashCommandBuilder, 
    EmbedBuilder, 
    Embed, 
    PermissionFlagsBits, 
    PermissionsBitField,
    GatewayIntentBits,
} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("공지")
        .setDescription("메세지 변환")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option =>
            option.setName('message')
                .setDescription('변환할 메시지')
                .setRequired(true)
        ),
        async execute(interaction) {
            const messageContent = interaction.options.getString('message');
        
                const embed = new EmbedBuilder()
                    .setDescription(messageContent)
                    .setTimestamp()
                    .setColor('#00a19c')
                    .setTimestamp(Date.now())
                    .setAuthor({name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b3b995&is=66b26815&hm=1bc6af7333d7c9f00124b06f2b03ed54386423b77d68555ab7e6287c26cfb9e9&`})                        
                    .setFooter({text: `Command Requested by: ${interaction.user.tag}`})
        
                await interaction.reply({
                    embeds: [embed], ephemeral: false
                });
    },
};
