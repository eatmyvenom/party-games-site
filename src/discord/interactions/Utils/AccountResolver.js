const { Interaction } = require("discord.js");
const Account = require("../../../classes/account");
const mojangRequest = require("../../../request/mojangRequest");
const logger = require("../../../utils/Logger");
const BotUtils = require("../../BotUtils");

function stringify(str) {
    return "" + str;
}

async function getFromHypixel(string, interaction) {
    await interaction.defer();
    logger.info("Unable to resolve, getting by ign from hypixel.");

    let plr = string;
    let uuid;
    if (plr.length > 17) {
        uuid = plr;
    } else {
        uuid = await mojangRequest.getUUID(plr);
    }

    let acc = new Account("", 0, "" + uuid);
    await acc.updateData();
    return acc;
}

/**
 *
 * @param {Interaction} interaction
 * @param {String} namearg
 * @param {Account[]} acclist
 * @returns {Account}
 */
module.exports = async function resolveAccount(interaction, namearg, acclist) {
    let acc;
    if(BotUtils.botMode != "mini") {
        logger.info("Attempting to resolve account from " + JSON.stringify(interaction.options));
        let string = "undefinednullnonothingno";
        if (interaction.options.get(namearg) != undefined) {
            string = interaction.options.get(namearg).value;
        }
        let canbeSelf = string == "" || string == "undefinednullnonothingno";
        string = stringify(string).toLowerCase();

        if (string.length == 18) {
            acc = acclist.find((a) => a?.discord == string);
        }

        if (acc == undefined && string.length > 16) {
            acc = acclist.find((a) => a.uuid == string);
        } else if (acc == undefined && string.length <= 16) {
            acc = acclist.find((a) => a.name?.toLowerCase() == string);
        }

        if (acc == undefined && string.length <= 16) {
            acc = acclist.find((a) => stringify(a.name).toLowerCase().startsWith(string));
        }

        if (acc == undefined && string.length == "22") {
            acc = acclist.find((a) => a?.discord == string.slice(3, -1));
        }

        if (acc == undefined && string.length == "21") {
            acc = acclist.find((a) => a.discord == string.slice(2, -1));
        }

        if (acc == undefined) {
            acc = acclist.find((a) => {
                if (a.nameHist && a.nameHist.length > 0) {
                    for (let name of a.nameHist) {
                        if (name.toLowerCase().startsWith(string)) {
                            return true;
                        }
                    }
                }
                return false;
            });
        }

        if (acc == undefined && canbeSelf) {
            let discid = interaction.member.user.id;
            acc = acclist.find((a) => a?.discord == discid);
        }

        if (acc) {
            logger.info("resolved as " + acc.name);
        } else {
            acc = await getFromHypixel(string, interaction);
        }
    } else {
        let string = "undefinednullnonothingno";
        if (interaction.options.get(namearg) != undefined) {
            string = interaction.options.get(namearg).value;
        }
        string = stringify(string).toLowerCase();
        acc = await getFromHypixel(string, interaction);
    }

    return acc;
};
