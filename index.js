#!/bin/node

const fs = require('fs');
const gameAmount = require("./src/gameAmount")
const Webhook = require('./src/webhook');
const { getAccountWins } = require('./src/hypixelApi');
const utils = require('./src/utils');
const dataGen = require('./src/dataGeneration');
const { getUUID } = require('./src/mojangRequest');
const { listNormal, listDiff, stringNormal, stringDaily } = require('./src/listUtils'); 
const args = process.argv;
const sleep = utils.sleep;
const logger = utils.logger;
const winsSorter = utils.winsSorter;

// So you may be wondering, "why use such a horrible config 
// format venom?" Well you see this is a nodejs project, this
// means that if I start adding all kinds of modules, this 
// will become an issue really fast. So this is my way of not
// bloating this project with node modules and shit. 
const config = require('./config.json');

let { accounts } = require("./src/acclist");

// these modules need to use identical accounts lists so that 
// the data does not need to be updated multiple times
let players = require("./src/playerlist")(accounts);
let guilds = require("./src/guildlist")(accounts);

async function updateAllAccounts(){
    accounts = await dataGen.updateAllAccounts(accounts);
}

async function updateAllPlayers() {
    for(let i=0;i<players.length;i++){
        await players[i].updateWins();
    }

    sortPlayers();
}

async function updateAllGuilds() {
    for(let i=0;i<guilds.length;i++){
        await guilds[i].updateWins();
    }

    sortGuilds();
}

// just some wrappers because this was abstracted

function sortPlayers() {
    players.sort(winsSorter);
}

function sortGuilds() {
    guilds.sort(winsSorter);
}

function sortAccounts() {
    accounts.sort(winsSorter);
}

async function updateAll() {
    await updateAllAccounts();
    await updateAllPlayers();
    await updateAllGuilds();
}

async function save() {
    // get up to date info
    await updateAll();
    // write new data to json files to be used later
    fs.writeFileSync("accounts.json",JSON.stringify(accounts,null,4));
    fs.writeFileSync("players.json",JSON.stringify(players,null,4));
    fs.writeFileSync("guild.json",JSON.stringify(guilds,null,4));
}

async function logNormal(name) {
    logger.out(await stringNormal(name));
}

// wrappers because I abstracted this
async function logG() {
    await logNormal("guild");
}

async function logP() {
    await logNormal("players");
}

async function logA() {
    await logNormal("accounts");
}

async function webhookLog(type = 'players', maxamnt) {
    // send webhook messages, this is only currently 
    // in a small server and only does the unofficial 
    // leaderboard, this can be easily changed and if
    // someone else would like I can add this to 
    // another server

    await Webhook.send(await stringNormal(type, maxamnt));
    await Webhook.send(await stringDaily(type, maxamnt));
}

async function webhookEmbed(type = 'players', maxamnt) {
    // send webhook messages, this is only currently 
    // in a small server and only does the unofficial 
    // leaderboard, this can be easily changed and if
    // someone else would like I can add this to 
    // another server

    let normal = await listNormal(type,maxamnt);
    let day = await listDiff(type,'day',maxamnt);

    await Webhook.sendEmbed("WINS", normal);
    await Webhook.sendEmbed("DAILY", day);
}

/**
 * This is here because i abstracted this to archive
 * @param {String} timeType - the inbetween of the file
 */
async function snap(timeType = 'day') {
    // move all the current stats files to be the daily files
    await archive('./',timeType);
}

async function logDaily(name) {
    logger.out(await stringDaily(name));
}

//more abstracted methods

async function logGD() {
    await logDaily("guild");
}

async function logPD() {
    await logDaily("players");
}

async function logAD() {
    await logDaily("accounts");
}

async function genStatus() {
    return await dataGen.genStatus();
}

/**
 * @function - Generate uuids for all the accounts in the accounts list
 * @see acclist
 */
async function genUUID() {
    let uuids = {};
    for(let i = 0; i<accounts.length; i++) {
        logger.out(accounts[i].name)
        uuids[accounts[i].name] = await getUUID(accounts[i].name);
        // make sure no more than 600 requests are sent per 10 minutes
        // this is the mojang api limitation
        await sleep(config.mojang.sleep);
    }
    fs.writeFileSync("uuids.json", JSON.stringify(uuids,null,4));
}

/**
 * @function gameAmnt - reflects the amount of players in various hypixel games
 */
async function gameAmnt() {
    // write to file so that there isnt blank files in website at any point
    fs.writeFileSync('games.txt',await gameAmount.formatCounts())
}

async function newAcc() {
    let name = args[3]
    let uuid = await getUUID(name);
    let wins = await getAccountWins(uuid);
    let formattedname = ('"'+name+'",                         ').slice(0,20)
    let formattedWins = (wins+',   ').slice(0,4);
    logger.out(`new Account(${formattedname}${formattedWins}"${uuid}"),`);
}

async function archive(path = './archive/', timetype = utils.day()) {
    await utils.archiveJson('guild',path,timetype);
    await utils.archiveJson('players',path,timetype);
    await utils.archiveJson('accounts',path,timetype);
}

async function writeFile(args) {
    let logName = args[3];
    let location = args[4];
    let str = await stringNormal(logName) 

    fs.writeFileSync(location,str);
}

async function writeFileD(args) {
    let logName = args[3];
    let location = args[4];
    let str = await stringDaily(logName);

    fs.writeFileSync(location,str);
}

// wrap main code in async function for nodejs backwards compatability

async function main(){
    // use different functions for different args
    // switch has one x86 instruction vs multiple for if statements
    switch (args[2]) {
        case 'logG':        await logG();                               break;
        case 'logA':        await logA();                               break;
        case 'logP':        await logP();                               break;
        case 'logGD':       await logGD();                              break;
        case 'logPD':       await logPD();                              break;
        case 'logAD':       await logAD();                              break;

        case 'write':       await writeFile(args);                      break;
        case 'writeD':      await writeFileD(args);                     break;

        case 'save':        await save();                               break;
        case 'snap':        await snap(args[3]);                        break;
        case 'status':      await genStatus();                          break;
        case 'discord':     await webhookLog(args[3], args[4]);         break;
        case 'discordE':    await webhookEmbed(args[3], args[4]);       break;
        case 'genUUID':     await genUUID();                            break;
        case 'games':       await gameAmnt();                           break;
        case 'newAcc':      await newAcc();                             break;
        case 'archive':     await archive();                            break;
    }
}

main();
