const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client)   {

        client.user.setActivity({
            type: ActivityType.Custom,
            name: '서버 공지',
            state: '✅서버에서 공지'
            
        })
        console.log('온라인!');
    } 
}