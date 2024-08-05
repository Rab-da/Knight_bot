const { 
    SlashCommandBuilder, 
    EmbedBuilder, 
    Embed,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    StringSelectMenuOptionBuilder,  
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("스트리머")
        .setDescription("Chivalry채널 스트리머 방송이 보고싶다면?"),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
        .setCustomId(`streamers`)
        .setMinValues(1)
        .setMaxValues(1)
        .setOptions(
new StringSelectMenuOptionBuilder({
            label: `와이번P`,
            description: `와이번P 방송이 궁금하다면?`,
            value: `와이번`,
            emoji: `<:p_:1269629330133225565>`
        }), new StringSelectMenuOptionBuilder({
            label: `안녕나는조랭이`,
            description: `안녕나는조랭이 방송이 궁금하다면?`,
            value: `조랭이`,
            emoji: `<:zorang:1269629340555939960>`

        })
        );

        const embed = new EmbedBuilder()
            .setTitle(`스트리머 목록보기`)
            .setDescription(`:arrow_down: 아래에서 원하는 스트리머 방송 채널 바로가기`)
            .setColor('#00a19c')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&`)
            .setAuthor({name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&`})
            .setFooter({text: client.user.tag})
            .setTimestamp(Date.now())
    await interaction.reply({
        components: [new ActionRowBuilder().addComponents(menu)], embeds: [embed], ephemeral: true
    })
    }
};