const MakeLeaderboardAdv = require("./MakeLeaderboardAdv");
const config = require("../../Config").fromJSON();

function numberify(str) {
    return Number(("" + str).replace(/undefined/g, 0).replace(/null/g, 0));
}

function formatNum(number) {
    return Intl.NumberFormat("en").format(number);
}

module.exports = async function stringLBDiffAdv(comparitor, parser, maxamnt, timetype, callback, listTransformer) {
    let list = await MakeLeaderboardAdv("accounts", timetype, 9999, callback);
    list = await listTransformer(list);
    list = list.sort(comparitor);

    let str = "";
    list = list.slice(0, maxamnt);
    for (let i = 0; i < list.length; i++) {
        let propVal = parser(list[i]);
        if (numberify(propVal) < 1 && !config.printAllWins) continue;

        let name = list[i].name;
        str += `${i + 1}) **${name}** (${formatNum(propVal)})\n`;
    }
    return str.replace(/_/g, "\\_");
};
