const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("디스코드규칙")
        .setDescription("서버 전체 규칙")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`디스코드 규칙 🏁`)
            .setDescription(`서버 가입과 함께, 본 페이지에 안내된 모든 규칙에 동의한 것으로 간주됩니다. `)
            .setColor('#00a19c')
            .setTimestamp(Date.now())
            .setAuthor({name: `공지 숙지는 필수 사항입니다.`})
            .setFooter({text: `Command Requested by: ${interaction.user.tag}`})
            .addFields([
                {
                    name: `1) 디스코드 가이드라인 준수`, 
                    value: "| 디스코드 서비스 이용약관\n-> https://discord.com/archive",
                    inline: false
                },
                {
                    name: ` `, 
                    value: "| 디스코드 커뮤니티 가이드\n-> https://discord.com/guidelines",
                    inline: false
                },
                {
                    name: `2) 위반행위`, 
                    value: "1. 채널 목적과 무관한 메시지를 작성하는 행위\n2.욕설, 비방, 음란, 혐오, 등 상대방에게 불쾌감을 줄 수 있는 표현/행위\n3. 특정 국가/지역/종교/인종/성별 등 비하하는 행위", 
                    inline: false
                },
                {
                    name: ` `, 
                    value: "4. 허위 사실 유포성 메시지를 작성하는 행위\n5. 타 유저의 동의 없이 개인정보, 또는 개인 전적/닉네임 등을 유출성 메시지로 작성하는 행위\n6. 광고, 도배 및 유사 행위", 
                    inline: false
                },
                {
                    name: ` `, 
                    value: "7. 스텝 및 관리자 비방, 허위 사실 유포 등의 방해 행위\n8. 위화감, 소외감을 줄 수 있는 조직적인 친목 활동등의 행위\n9. 부적절한 이미지를 사용하는 유저(음란물은 즉시 서버 차단 적용)", 
                    inline: false
                },
                {
                    name: ` `, 
                    value: "10. 부적절한 닉넴임을 사용하는 유저\n11. 스텝 및 관리자를 사칭하여 혼란을 주거나 개인정보 등을 요구하는 행위\n12. 서버 내에서 핵, 불법 프로그램 판매 및 방송", 
                    inline: false
                },
                {
                    name: ` `, 
                    value: "13. 게임 시스템/버그를 유포 또는 악용하는 행위\n14. 상대방의 개인정보(이름,주소,전화번호,이메일등)을 수집하거나 배포하는 행위\n15. ID,게임 재화등을 현금거래 또는 상업적 목적의 표현이나 판매 행위", 
                    inline: false
                },
                {
                    name: ` `, 
                    value: "16. 성적인 내용 암시 또는 직접적인 언급으로 성적 수치심을 느끼게하는 행위\n17. 스팸/광고성 채팅\n18. 13세 미만임을 인정하는 유저(디스코드 이용약관 위반)", 
                    inline: false
                },
                {
                    name: `※ 위 활동 규칙은 커뮤니티 내 모든 콘텐츠`, 
                    value: "(예: 텍스트, 이미지, 영상 등), 게시글, 댓글, 유저 프로필, 다른 유저와의 메시지에도 적용됩니다.", 
                    inline: false
                },
                {
                    name: `※ 위 규칙은 필요에 따라 갱신 및 수정될 수 있으며,`, 
                    value: "이를 위반하거나 위 항목에 구체적으로 해당되지 않는 사항이라도 커뮤니티 운영에 방해가 되는 행위로 판단될 경우, 게시글 및 댓글 삭제, 권한 회수, 음소거, 추방, 서버 차단 제재가 적용될 수 있습니다.", 
                    inline: false
                },
        ])
        await interaction.reply({
            embeds: [embed], ephemeral: false,
        });
    },
};
