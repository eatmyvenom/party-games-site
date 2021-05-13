const { WebhookClient } = require("discord.js");
const BotUtils = require("./BotUtils");
const CommandParser = require("./interactions/CommandParser");

async function interactionHandler(interaction) {
    let responseObj = await CommandParser(interaction);

    if(!interaction.deferred && !interaction.replied) {
        await interaction.reply({ content: responseObj.res,
            embeds: [responseObj.embed]});
    } else {
        await interaction.webhook.send(responseObj.res, { embeds: [responseObj.embed] });
    }

    await BotUtils.logHook.send(
        `${interaction.member.user.username}#${
            interaction.member.user.discriminator
        } invoked interaction \`${
            interaction.commandName
        }\` with options \`${JSON.stringify(interaction.options)}\``
    );
}

module.exports = async (client) => {
    client.on('interaction', interactionHandler);
};
