const { Schema, model } = require("mongoose");
const guildSchema = new Schema({
    _id: Schema.Types.ObjectId,
    guildId: String,
    guildName: String,
    gildIcon: { type: String, required: false },
});

module.exports = model("Guild", guildSchema, "guild");