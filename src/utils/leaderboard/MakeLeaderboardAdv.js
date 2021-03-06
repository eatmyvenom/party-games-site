const utils = require("../../utils");
const { getList } = require("./ListUtils");

/**
 *
 * @param {String} name
 * @param {String} timetype
 * @param {Number} maxamnt Max amount of players in
 * @param {Function} callback Callback used to get the stats out of each account
 * @returns
 */
module.exports = async function mklistAdv(name, timetype, maxamnt, callback) {
    let newlist, oldlist;
    if (name == "accounts") {
        newlist = await getList();
        oldlist = await getList(timetype);
    } else {
        newlist = await utils.readJSON(`${name}.json`);
        oldlist = await utils.readJSON(`${name}.${timetype}.json`);
    }

    // sort the list before hand
    oldlist = oldlist.sort(utils.winsSorter);

    for (let i = 0; i < oldlist.length; i++) {
        let oldacc = oldlist[i];
        let newacc;
        newacc = newlist.find((g) => ("" + g.uuid).toLowerCase() == ("" + oldacc.uuid).toLowerCase());

        // make sure acc isnt null/undefined
        if (newacc) {
            oldlist[i] = callback(newacc, oldacc);
        }
    }

    // use old list to ensure that players added today
    // don't show up with a crazy amount of daily wins
    return oldlist.slice(0, maxamnt);
};
