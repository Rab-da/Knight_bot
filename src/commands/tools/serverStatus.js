const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
       .setName('서버인원')
       .setDescription('서버의 인원정보')
       .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        async function sendMessage (message) {
        const embed = new EmbedBuilder()
           .setColor('#00a19c')
           .setDescription(message);
            
           await interaction.reply({ embeds: [embed], ephemeral: true});
    }
    
    async function calculate (status, m) {
        return Math.round((status.length / m.size) * 100) + `%`;
    }

        const { guild } = interaction;
        var members = await guild.members.fetch();

        var online = [];
        var idle = [];
        var dnd = [];
        var offline = [];

        await members.forEach(async member => {
            if(member.presence == null) return offline.push({ member: member.id});
            if(member.presence.status == 'online') online.push({member: member.id});
            if(member.presence.status == `idle`) idle.push({member: member.id});
            if(member.presence.status == 'dnd') dnd.push({member: member.id});
        });

        var onlineP, idleP, dndP, offlineP;
        onlineP = await calculate(online, members);
        idleP = await calculate(idle, members);
        dndP = await calculate(dnd, members);
        offlineP = await calculate(offline, members);

        await sendMessage(`🌏 **서버인원정보**\n\n**온라인중인 맴버:**\n> \`${onlineP} | ${online.length}\`\n\n**자리비움중인 맴버:**\n> \`${dndP} | ${dnd.length}\`\n\n**오프라인중인 맴버:**\n> \`${offlineP} | ${offline.length}\`\n\n서버에 참여중인 전체인원: \`${members.size}\``);
    }
};