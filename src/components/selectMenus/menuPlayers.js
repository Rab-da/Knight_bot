const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: `player`
    },
    async execute(interaction, client) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === "player") {
                const value = interaction.values[0]
                switch (value) {
                    case "Fancy":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Fancy**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629325158355007.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **Fancy선수 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/2a533585f2f21a35e0b3bfa3d977a335", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/Fancy_Light60", inline: false,
                                    },
                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "GRAP":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**GRAP**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629325158355007.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: GRAP선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/f8afb972ffada02b4e0e87d00091ba7a", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/pungdae?s=21", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Unibell":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Unibell**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629325158355007.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Unibell선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/810468c0e14ee87d3ad24b7ecf3258a0", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗 - ", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Liguri":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Liguri**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629325158355007.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Liguri선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://m.chzzk.naver.com/6f64cd61a7c3caf813ab17dc29127ae3", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/guri_0706?t=cGp_sy1X4Y2_gBfEX5CsEA&s=09", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Raon":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Raon**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **Raon선수 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `| <:twitch:1269624480662028288> 트위치`, value: "🔗https://www.twitch.tv/lightvlrt", inline: false,
                                    },
                                    {
                                        name: `| <:afreeca:1269627298282209371> 아프리카`, value: "🔗https://bj.afreecatv.com/lhbd1102", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/Lightvalrt", inline: false,
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Ksen":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Ksen**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **Ksen선수 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/4711c680988d75eeeb5c1f661e97643c", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/Ksen_vlrt", inline: false,
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Young":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Young**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **Young선수의 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `|  - `, value: "🔗 - ", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗트위터 - @youngvlr", inline: false,
                                    },
                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "SMS":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**SMS**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **SMS선수 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `| <:twitch:1269624480662028288> 트위치`, value: "🔗https://www.twitch.tv/sms_33", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗@SeoLeon33", inline: false,
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Mikhail":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Mikhail**')
                                .setTimestamp(Date.now())
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`)
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: ':small_red_triangle_down: **Mikhail선수 방송링크 및 Sns주소** :small_red_triangle_down:'
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/12c168ead1b523144bfb9d35de7a6eaf", inline: false,
                                    },
                                    {
                                        name: `| Sns`, value: "🔗@mikhail_vlrt", inline: false,
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Soct":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Soct**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Soct선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:afreeca:1269627298282209371> 아프리카`, value: "🔗https://bj.afreecatv.com/lhbd1102", inline: false
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/8399fbbe62e4e13fb4895d8bd3fd170e", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/Soct_fps", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Nominando":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Nominando**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Nominando선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| - `, value: "🔗 - ", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗인스타 - vlrt_nando", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Nostalgia":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Nostalgia**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Nostalgia선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/aaea4b85067a22d8fa9294d9901b6ac6", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗https://x.com/halfwoo_", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "half04":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**half04**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: half04선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/44298646eb617a9a1f77bf74745115a8/videos?videoType=&sortType=LATEST&page=1", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗 - ", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Suhaj":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Suhaj**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Suhaj선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:afreeca:1269627298282209371> 아프리카`, value: "🔗https://bj.afreecatv.com/suhajunhyun", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗인스타 - @js1022_ ", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    case "Xlight":
                        {
                            const embed1 = new EmbedBuilder()
                                .setColor('#00a19c')
                                .setTitle('**Xlight**')
                                .setThumbnail(`https://cdn.discordapp.com/emojis/1270629380326035516.webp?size=160&quality=lossless`).setTimestamp(Date.now())
                                .setAuthor({ name: `Chivalry`, iconURL: `https://cdn.discordapp.com/attachments/1062729530151813191/1269176614877401179/KakaoTalk_20240802_181204533.png?ex=66b06dd5&is=66af1c55&hm=302620fb3fd2786fa5a1f3fe426016511750c42b68a0bb5ffea9793d7f57950e&` }).setFooter({ text: client.user.tag })
                                .setFooter({ text: client.user.tag })
                                .addFields([
                                    {
                                        name: ` `, value: '**:small_red_triangle_down: Xlight선수의 방송 및 sns링크 :small_red_triangle_down:**', inline: false,
                                    },
                                    {
                                        name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/90d134e903ab86c2523fb31bc743d07c", inline: false
                                    },
                                    {
                                        name: `| Sns`, value: "🔗 - ", inline: false
                                    },

                                ])
                            await interaction.reply({ embeds: [embed1], ephemeral: true });
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
