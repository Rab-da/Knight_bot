const Guild = require('../../schemas/guild');
const { SlashCommandBuilder } = require("discord.js");
const mongoose = require('mongoose');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("서버관리")
        .setDescription("서버 관리"),
    async execute(interaction, client) {
        try {
            let guildProfile = await Guild.findOne({ guildId: interaction.guild.id });

            // If no guild profile exists, create one
            if (!guildProfile) {
                guildProfile = new Guild({
                    _id: new mongoose.Types.ObjectId(),
                    guildId: interaction.guild.id,
                    guildName: interaction.guild.name,
                    guildIcon: interaction.guild.iconURL() || "None",
                });

                await guildProfile.save();
            }

            await interaction.reply({
                content: `Server Name: ${guildProfile.guildName}`,
                ephemeral: true, // Consider making the reply ephemeral so only the command user sees it
            });

            console.log(guildProfile);

        } catch (error) {
            console.error("Error interacting with guild profile:", error);
            await interaction.reply({
                content: 'There was an error processing your request. Please try again later.',
                ephemeral: true,
            });
        }
    }
}