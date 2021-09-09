module.exports = {
    name: "play",
    cooldown: 3,
    aliases: ["p"],
    description: "play.description",

    async execute(message, args) {
        const { channel } = message.member.voice;
    }
}