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
        .setName("선수")
        .setDescription("Chivalry소속 선수들을 소개합니다~"),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
        .setCustomId(`squad`)
        .setMinValues(1)
        .setMaxValues(1)
        .setOptions(
new StringSelectMenuOptionBuilder({
            label: `이터널리턴`,
            description: `Chivalry소속 이터널리턴 선수단`,
            value: `이리`,
            emoji: `<:re:1286612147010404393>`
        }), new StringSelectMenuOptionBuilder({
            label: `발로란트 1군`,
            description: `Chivalry소속 발로란트 1군 선수단`,
            value: `발로1`,
            emoji: `<:val:1286612108548771922>`
        }), new StringSelectMenuOptionBuilder({
            label: `발로란트 2군`,
            description: `Chivalry소속 발로란트 2군선수단`,
            value: `발로2`,
            emoji: `<:val:1286612108548771922>`
        })
        );

        const embed = new EmbedBuilder()
            .setTitle(`Chivalry 선수단`)
            .setDescription(`Chivalry소속 선수단은 현재\n| <:re:1286612147010404393>이터널리턴, <:val:1286612108548771922>발로란트 1군과 2군이 있습니다.\n자세한 정보는 아래에서 찾을 수 있습니다.`)
            .setColor('#00a19c')
            .setThumbnail(`https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&`)
            .setFooter({text: client.user.tag})
            .setTimestamp(Date.now())
            .setImage(`https://cdn.discordapp.com/attachments/1062729530151813191/1284786179526623273/CHIVALRY-CMYK.png?ex=66e7e5df&is=66e6945f&hm=db7fd973e7b2afa118d3dcee4a6601daef28e8ba8cddd06deb910fdca96c6321&`)
    await interaction.reply({
        components: [new ActionRowBuilder().addComponents(menu)], embeds: [embed], ephemeral: true
    })
    }
};