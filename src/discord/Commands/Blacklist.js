const Command = require("../../classes/Command");
const BotUtils = require("../BotUtils");
const { ERROR_ARGS_LENGTH } = require("../Embeds");

module.exports = new Command("blacklist", ["%trusted%"], async (args) => {
    /**
     * @type {String[]}
     */
    let blacklist = await BotUtils.getFromDB("blacklist");

    let operation = args[0];

    if(operation == undefined) {
        return { res: "", embed : ERROR_ARGS_LENGTH(1)};
    }

    let res;
    let hasChange = false;

    switch(operation) {
        case "+":
        case "add":
        case "plus": {
            blacklist.push(args[1]);
            res = { res : "Discord ID added!"};
            hasChange = true;
            break;
        }

        case "-":
        case "rm":
        case "remove": {
            blacklist = blacklist.filter(h => h != args[1]);
            res = { res : "Discord ID removed!" };
            hasChange = true;
            break;
        }

        case "-l":
        case "ls":
        case "list":
        case "show": {
            res = { res :"```\n" + blacklist.join("\n") + "```"}
            break;
        }
    }

    if(hasChange) {
        await BotUtils.writeToDB("blaclist", blacklist);
    }

    return res;
});
