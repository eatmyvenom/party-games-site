const Webhook = require("../webhook");
const config = require("../../config.json");
const { MessageEmbed } = require("discord.js");

class AccountEvent {
    name = "";
    type = "";
    oldAmnt = 0;
    newAmnt = 0;
    modifier = "";
    uuid = "";

    constructor(name, type, old, neww, modifier, uuid) {
        this.name = name;
        this.type = type;
        this.oldAmnt = old;
        this.newAmnt = neww;
        this.modifier = modifier;
        this.uuid = uuid;
    }

    toString() {
        if (this.type == "PG") {
            return `${this.name} just hit ${this.newAmnt} Party games wins!`;
        } else if (this.type == "HITWPB") {
            return `${this.name} just got a ${this.modifier} personal best of${this.newAmnt}! Was ${this.oldAmnt}.`;
        } else if (this.type == "HYSAYS") {
            return `${this.name} just hit ${this.newAmnt} Hypixel says wins!`;
        } else if (this.type == "ARC") {
            return `${this.name} just hit ${this.newAmnt} arcade wins!`;
        } else if (this.type == "FH") {
            return `${this.name} just hit ${this.newAmnt} farm hunt wins!`;
        } else if (this.type == "HITW") {
            return `${this.name} just hit ${this.newAmnt} hole in the wall wins!`;
        } else if (this.type == "LBPOS") {
            return `${this.name} just got to rank ${this.newAmnt} on ${this.modifier} leaderboard!`;
        }
    }

    async getHitWEmbed() {
        let avatar =
            "https://crafatar.com/renders/body/" +
            this.uuid +
            ".png?size=512&default=MHF_Steve&scale=10&overlay";
        let embed = new MessageEmbed()
            .setAuthor(this.name, avatar)
            .setThumbnail(avatar)
            .setFooter("UUID: " + this.uuid)
            .setColor(0x0066cc)
            .setTitle(
                `${this.name} Improved their **${this.modifier}** Personal Best!`
            )
            .addField("Old PB", `**${this.oldAmnt}**`, true)
            .addField("New PB", `**${this.newAmnt}**`, true)
            .addField("Increase", `**${this.newAmnt - this.oldAmnt}**`, true);

        return embed;
    }

    async toDiscord() {
        if (this.type == "PG") {
            await Webhook.sendBasic(this.toString(), config.events.PG.webhook);
        } else if ((this.type == "HITWPB")) {
            let embed = await this.getHitWEmbed();
            await Webhook.sendBasicEmbed(
                "",
                [embed],
                config.events.HITW.webhook
            );
        } else if ((this.type == "HITW")) {
            await Webhook.sendBasic(
                this.toString(),
                config.events.HITW.webhook
            );
        } else if ((this.type == "HYSAYS")) {
            await Webhook.sendBasic(this.toString(), config.events.PGT.webhook);
        } else if ((this.type == "ARC")) {
            await Webhook.sendBasic(this.toString(), config.events.PGT.webhook);
        } else if ((this.type == "FH")) {
            await Webhook.sendBasic(this.toString(), config.events.PGT.webhook);
        } else if ((this.type == "LBPOS")) {
            await Webhook.sendBasic(this.toString(), config.events.PGT.webhook);
        }
    }
}

module.exports = AccountEvent;
