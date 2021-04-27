const BotUtils = require("../discord/BotUtils");
const { logger } = require("../utils");
const utils = require("../utils");

module.exports = class RoleUpdater {
    roles = [];
    guild = {};
    prop = "";

    constructor(guild, roles, prop) {
        this.guild = guild;
        this.roles = roles;
        this.prop = prop;
    }

    getRole(wins) {
        for (let role of this.roles) {
            if (wins >= role.minimumWins) {
                return role;
            }
        }
        return undefined;
    }

    async updateAll() {
        let acclist = await utils.readJSON("accounts.json");
        let mbrList = await this.guild.members.fetch();
        for (let acc of acclist) {
            if (mbrList.has(acc.discord)) {
                await this.updatePlayer(acc, mbrList.get(acc.discord));
            }
        }
    }

    async updatePlayer(acc, discMember) {
        logger.out(`Updating ${discMember.user.tag}`);
        let newRole = this.getRole(acc[this.prop]);
        if (newRole == undefined) return;
        if (discMember.roles == undefined) return;

        await this.removeOtherRoles(discMember, newRole.roleID);

        if (discMember.roles.cache != undefined) {
            if (!discMember.roles.cache.has(newRole.roleID)) {
                await BotUtils.logHook.send(
                    `${discMember.user.tag} is reciving the "${newRole.minimumWins}+ wins" role in ${this.guild.name}`
                );
                await discMember.roles.add(newRole.roleID);
            }
        } else {
            await BotUtils.logHook.send(
                `${discMember.user.tag} is reciving the "${newRole.minimumWins}+ wins" role in ${this.guild.name}`
            );
            await discMember.roles.add(newRole.roleID);
        }
    }

    async removeOtherRoles(discMember, ignoreID) {
        for (let role of this.roles) {
            if (role.roleID == ignoreID) continue;
            if (discMember.roles.cache.has(role.roleID)) {
                await BotUtils.logHook.send(
                    `${discMember.user.tag} is having "${role.minimumWins}+ wins" role removed in ${this.guild.name}`
                );
                await discMember.roles.remove(role.roleID);
            }
        }
    }
};
