const { EmbedBuilder } = require("discord.js");

module.exports = {
    data: {
        name: `streamers`
    },
    async execute(interaction, client) {
        if (interaction.isSelectMenu()) {
            if (interaction.customId === "streamers") {
                const value = interaction.values[0]
            switch (value) {
                case "와이번":
                    {
                        const embed1 = new EmbedBuilder()
                        .setColor('#00a19c')
                        .setTitle('**와이번P**')
                        .setDescription("카트라이더, 리듬게임을 하는 작곡 스트리머")
                        .setTimestamp(Date.now())
                        .setThumbnail(`https://yt3.googleusercontent.com/-786ashJ2yIgcag0-3PByvNtI-1sy1xiZqi3AY2PIqs5rSwKcm6nqexAAKH97IjPD70vOAmyIg=s160-c-k-c0x00ffffff-no-rj`)
                        .setAuthor({name: `Chivalry`, iconURL: `https://yt3.googleusercontent.com/-786ashJ2yIgcag0-3PByvNtI-1sy1xiZqi3AY2PIqs5rSwKcm6nqexAAKH97IjPD70vOAmyIg=s160-c-k-c0x00ffffff-no-rj`})                        
                        .setFooter({text: client.user.tag})
                        .addFields([
                            {
                                name: ` `, value: ':small_red_triangle_down: **와이번P의 방송채널** :small_red_triangle_down:'
                            },
                            {
                            name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/c6e52fb4356f17d71b7afd4464f64ae1", inline: false, 
                            },
                            {
                                name: `| <:youtube:1269627309455970394> 유튜브`, value: "🔗https://youtube.com/channel/UCY8T2BFIwfY-FC8gtbL1Bmg?si=dzFZWAXsgRnL9t-s", inline: false, 
                            },
                    ])
                        await interaction.reply({embeds: [embed1], ephemeral: true});
                    } 
                    break;
                case "조랭이":
                    {
                        const embed2 = new EmbedBuilder()
                        .setColor('#00a19c')
                        .setTitle('**안녕나는조랭이**')
                        .setDescription("여러가지 게임 방송을 하고있는 종합게임 버츄얼 스트리머")
                        .setThumbnail(`https://cdn.discordapp.com/attachments/1062729530151813191/1269607609057415279/KakaoTalk_20240804_172322464.png?ex=66b0adba&is=66af5c3a&hm=0752a009280a8edbf58de735e33c560ce01d530317d000563cf3a1af67d764ec&`)                        .setTimestamp(Date.now())
                        .setAuthor({name: `Chivalry`, iconURL: `https://yt3.googleusercontent.com/mhsP_HDOv-cWUIfSBUgVtYojRwoC1o9SB_vGWtbXHfxTqvFNcvH05m24jRYfP_mN5KuYbomb=s160-c-k-c0x00ffffff-no-rj`})
                        .setFooter({text: client.user.tag})
                        .addFields([
                            {
                                name: ` `, value: '**:small_red_triangle_down: 안녕나는조랭이 방송채널 :small_red_triangle_down:**' , inline: false, 
                            },
                            {
                                name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/c27850274cb4bb391d6d753d305cd568", inline: false
                            },
                            {
                                name: `| <:youtube:1269627309455970394> 유튜브`, value: "🔗https://www.youtube.com/@joreangyeettok", inline: false
                            },
                            
                    ])
                        await interaction.reply({embeds: [embed2], ephemeral: true});
                    }
                    break;
                case "유화령":
                        {
                            const embed1 = new EmbedBuilder()
                            .setColor('#00a19c')
                            .setTitle('**유화령(hwaryeong)**')
                            .setDescription("Valorant, TFT, Eteranl Retrun 21살 버츄얼 스트리머")
                            .setTimestamp(Date.now())
                            .setThumbnail(`https://yt3.googleusercontent.com/PXtZhS4nsKYlmYL3k6tuhhFxD5MtZej8ZPjWjEdaUciOwZP8dEpFUH1yd7n78iuTlnEPqRBajA=s160-c-k-c0x00ffffff-no-rj`)
                            .setAuthor({name: `Chivalry`, iconURL: `https://yt3.googleusercontent.com/PXtZhS4nsKYlmYL3k6tuhhFxD5MtZej8ZPjWjEdaUciOwZP8dEpFUH1yd7n78iuTlnEPqRBajA=s160-c-k-c0x00ffffff-no-rj`})                        
                            .setFooter({text: client.user.tag})
                            .addFields([
                                {
                                    name: ` `, value: ':small_red_triangle_down: **유화령의 방송채널** :small_red_triangle_down:'
                                },
                                {
                                name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/c27850274cb4bb391d6d753d305cd568", inline: false, 
                                },
                                {
                                    name: `| <:youtube:1269627309455970394> 유튜브`, value: "🔗https://www.youtube.com/channel/UCMNIzTh5gL5aaIUDNvEbCTw ", inline: false, 
                                },

                        ])
                            await interaction.reply({embeds: [embed1], ephemeral: true});
                        } 
                        break;
                    case "주노씌":
                        {
                            const embed1 = new EmbedBuilder()
                            .setColor('#00a19c')
                            .setTitle('**주노씌**')
                            .setDescription("카트라이더: 드리프트, PUBG, 롤(칼바람), DJ MAX 등 다양하게 하는(걸 원하는) 스트리머")
                            .setTimestamp(Date.now())
                            .setThumbnail(`https://yt3.googleusercontent.com/oIg6zKJKF3IJgInlBHO_38qCHtbkMNFKf4y3DWrjbHndADPwwJ-cFzxfL21nxGSAL5HVwTYF=s160-c-k-c0x00ffffff-no-rj`)
                            .setAuthor({name: `Chivalry`, iconURL: `https://yt3.googleusercontent.com/oIg6zKJKF3IJgInlBHO_38qCHtbkMNFKf4y3DWrjbHndADPwwJ-cFzxfL21nxGSAL5HVwTYF=s160-c-k-c0x00ffffff-no-rj`})                        
                            .setFooter({text: client.user.tag})
                            .addFields([
                                {
                                    name: ` `, value: ':small_red_triangle_down: **주노씌의 방송채널** :small_red_triangle_down:'
                                },
                                {
                                name: `| <:chzzk:1269624509778890904> 치지직`, value: "🔗https://chzzk.naver.com/2534afcf13f068f1107a2ebafed99e55", inline: false, 
                                },
                                {
                                    name: `| <:youtube:1269627309455970394> 유튜브`, value: "🔗https://www.youtube.com/@주노씌_UMaRu", inline: false, 
                                },
                                {
                                    name: `| <:afreeca:1269627298282209371> 아프리카`, value: "🔗https://bj.afreecatv.com/6563hong", inline: false, 
                                },

                        ])
                            await interaction.reply({embeds: [embed1], ephemeral: true});
                        } 
                        break;
                default:
                    break;                
                }
            }
        }
    }
}
