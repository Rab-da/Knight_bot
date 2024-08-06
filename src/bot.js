require('dotenv').config();
const { Token } = process.env;
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const fs = require('fs');
const port = process.env.PORT || 3000;


const client = new Client({ intents: 32767 });
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(Token);
// (async () => {
//     connect(databaseToken).catch(console.error);
// })();
