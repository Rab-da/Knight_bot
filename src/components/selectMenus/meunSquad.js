const { 
    SlashCommandBuilder, 
    EmbedBuilder, 
    Embed,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    StringSelectMenuOptionBuilder,  
} = require('discord.js');

module.exports = {
    data: {
        name: `squad`
    },
    async execute(interaction, client) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === "squad") {
                const value = interaction.values[0]
            switch (value) {
                case "이리":
                    {
                        const menu = new StringSelectMenuBuilder()
                        .setCustomId(`player`)
                        .setMinValues(1)
                        .setMaxValues(1)
                        .setOptions(
                            new StringSelectMenuOptionBuilder({
                                label: `Fancy`,
                                description: `이터널리턴 Fancy 선수정보`,
                                value: `Fancy`,
                                emoji: `<:re:1286612147010404393>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `GRAP`,
                                description: `이터널리턴 GRAP 선수정보`,
                                value: `GRAP`,
                                emoji: `<:re:1286612147010404393>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Unibell`,
                                description: `이터널리턴 Unibell 선수정보`,
                                value: `Unibell`,
                                emoji: `<:re:1286612147010404393>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Liguri`,
                                description: `이터널리턴 Liguri 선수정보`,
                                value: `Liguri`,
                                emoji: `<:re:1286612147010404393>`
                            })
                        )
                        const embed = new EmbedBuilder()
                        .setTitle(`| <:re:1286612147010404393> 이터널리턴 선수들을 소개합니다.`)
                        .setDescription(`:white_check_mark: 방송링크, sns주소까지 한번에 찾아볼 수 있습니다.`)
                        .setColor('#00a19c')
                        .setThumbnail(`https://cdn.discordapp.com/emojis/1270629325158355007.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                        .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                        .setFooter({text: client.user.tag})
                        .setTimestamp(Date.now())
                                    await interaction.reply({
                                        components: [new ActionRowBuilder().addComponents(menu)], embeds: [embed], ephemeral: true
                                    })
                    } 
                    break;
                case "발로1":
                    {
                        const menu = new StringSelectMenuBuilder()
                        .setCustomId(`player`)
                        .setMinValues(1)
                        .setMaxValues(1)
                        .setOptions(
                            new StringSelectMenuOptionBuilder({
                                label: `Raon`,
                                description: `발로란트 1군 Raon 선수정보`,
                                value: `Raon`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Ksen`,
                                description: `발로란트 1군 Ksen 선수정보`,
                                value: `Ksen`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Young`,
                                description: `발로란트 1군 Young 선수정보`,
                                value: `Young`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Sms`,
                                description: `발로란트 1군 Sms 선수정보`,
                                value: `SMS`,
                                emoji: `<:val:1286612108548771922>`
                            }),
                            new StringSelectMenuOptionBuilder({
                                label: `Mikhail`,
                                description: `발로란트 1군 Mikhail 선수정보`,
                                value: `Mikhail`,
                                emoji: `<:val:1286612108548771922>`
                            }),
                        )
                        const embed = new EmbedBuilder()
                        .setTitle(`| <:val:1286612108548771922> 발로란트 1군 선수들을 소개합니다.`)
                        .setDescription(`:white_check_mark: 방송링크, sns주소까지 한번에 찾아볼 수 있습니다.`)
                        .setColor('#00a19c')
                        .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                        .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                        .setTimestamp(Date.now())
                                    await interaction.reply({
                                        components: [new ActionRowBuilder().addComponents(menu)], embeds: [embed], ephemeral: true
                                    })
                    } 
                    break;
                case "발로2":
                    {
                        const menu = new StringSelectMenuBuilder()
                        .setCustomId(`player`)
                        .setMinValues(1)
                        .setMaxValues(1)
                        .setOptions(
                            new StringSelectMenuOptionBuilder({
                                label: `Soct`,
                                description: `발로란트 2군 Soct 선수정보`,
                                value: `Soct`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Nominando`,
                                description: `발로란트 2군 Nominando 선수정보`,
                                value: `Nominando`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Nostalgia`,
                                description: `발로란트 2군 Nostalgia 선수정보`,
                                value: `Nostalgia`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `half04`,
                                description: `발로란트 2군 half04 선수정보`,
                                value: `half04`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Suhaj`,
                                description: `발로란트 2군 Suhaj 선수정보`,
                                value: `Suhaj`,
                                emoji: `<:val:1286612108548771922>`
                            }), new StringSelectMenuOptionBuilder({
                                label: `Xlight`,
                                description: `발로란트 2군 Xlight 선수정보`,
                                value: `Xlight`,
                                emoji: `<:val:1286612108548771922>`
                            })
                        )
                        const embed = new EmbedBuilder()
                        .setTitle(`| <:val:1286612108548771922> 발로란트 2군 선수들을 소개합니다.`)
                        .setDescription(`:white_check_mark: 방송링크, sns주소까지 한번에 찾아볼 수 있습니다.`)
                        .setColor('#00a19c')
                        .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                        .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                        .setTimestamp(Date.now())
                                    await interaction.reply({
                                        components: [new ActionRowBuilder().addComponents(menu)], embeds: [embed], ephemeral: true
                                    })
                }
                    break;
                default:
                    break;                
                }
            }
        }
    }
}
