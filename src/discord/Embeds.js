const { MessageEmbed, Message } = require("discord.js");

const cfg = require("../Config").fromJSON();
const yellow = 0xdcde19;
const primary = 0x44a3e7;
const red = 0xc60532;
const success = 0x00cc66;

exports.WARN_WAITING = new MessageEmbed()
    .setTitle("Waiting...")
    .setDescription(
        "Since the the database does not contain the account(s) it will take some time to gather the stats. Please wait!"
    )
    .setThumbnail("https://i.imgur.com/GLdqYB2.gif")
    .setColor(yellow)
    .setFooter(
        "Please avoid using this unless they should actually be in the database, too many people slows down the overall system."
    );

exports.INFO_ACCOUNTS_ADDED = function (res) {
    return new MessageEmbed()
        .setTitle("Accounts added")
        .setDescription(res)
        .setFooter(
            "It will take a little while for these accounts to be fully added to the database, please be patient."
        )
        .setTimestamp(Date.now())
        .setColor(primary);
};

exports.ERROR_INPUT_IGN = new MessageEmbed()
    .setTitle("ERROR")
    .setDescription(
        `Input a name or uuid to link your discord to! Use ${cfg.commandCharacter}help for more info on how to use the verify command.`
    )
    .setColor(red);

exports.ERROR_IGN_UNDEFINED = new MessageEmbed()
    .setTitle("ERROR")
    .setDescription(`The ign you specified does not exist or has been changed.`)
    .setColor(red);

exports.ERROR_PLAYER_PREVIOUSLY_LINKED = new MessageEmbed()
    .setTitle("ERROR")
    .setDescription("This player has already been linked!")
    .setColor(red);

exports.ERROR_ACCOUNT_PREVIOUSLY_LINKED = new MessageEmbed()
    .setTitle("ERROR")
    .setDescription("This user has already been linked!")
    .setColor(red);

/**
 * Account link was successful
 */
exports.INFO_LINK_SUCCESS = new MessageEmbed()
    .setTitle("Success")
    .setDescription(`Account linked successfully!`)
    .setColor(success);

/**
 * For when someone has not put their discord tag into hypixel correctly
 */
exports.ERROR_LINK_HYPIXEL_MISMATCH = new MessageEmbed()
    .setTitle("ERROR")
    .setDescription(
        "Your discord tag does not match your hypixel set discord account. In order to link you must set your discord in hypixel to be your exact tag. Try `/arcadehelp Verify` if you are still confused"
    )
    .setColor(red);

/**
 * 
 * @param {String} name 
 * @param {String[]} args 
 * @param {Message} message 
 * @returns 
 */
exports.LOG_COMMAND_EXECUTION = function (name, args, message) {
    if (args == "") args = "none";
    return new MessageEmbed()
        .setTitle("Command execution")
        .setColor(0x2eb8a3)
        .addField("Name", name, true)
        .addField("Args", `\`${args}\``, true)
        .addField("User", `${message.author.tag} - <@${message.author.id}>`, true)
        .addField("Location", `${message.guild.name}#${message.channel.name}`, true)
        .addField("Link", `[Message Link](${message.url})`, true);
};

exports.ERROR_DATABASE_ERROR = new MessageEmbed()
    .setTitle("Command will not process")
    .setColor(red)
    .setDescription("Due to a database error this command will not be processed!");

exports.ERROR_USE_SLASH_COMMAND = function (cmd, slashver) {
    return new MessageEmbed()
        .setTitle(`The command ${cmd} is only available as "/${slashver}"!`)
        .setColor(red)
        .setDescription(
            "This command has been retired and will no longer function using the usual method. Please use the slash command variation instead."
        );
};

exports.ERROR_ARGS_LENGTH = function (len) {
    return new MessageEmbed().setTitle("ERROR").setColor(red).setDescription(`This command requires ${len} arguments`);
};

exports.LOG_SLASH_COMMAND_USAGE = function (userid, usertag, command, server, channel, options) {
    return new MessageEmbed()
        .setTitle(`Command run by ${usertag}`)
        .setColor(0xff3399)
        .addField("Command", "" + command, false)
        .addField("User", `<@${userid}>`, true)
        .addField("Server", "" + server, true)
        .addField("Channel", `<#${channel}>`, true)
        .addField("Options", JSON.stringify(options), false);
};

exports.INFO_WHOIS = function (acc) {
    return new MessageEmbed()
        .setTitle(`${acc.name} discord`)
        .setDescription(`Discord ID: ${acc.discord}\n<@${acc.discord}>`)
        .setColor(primary);
};

exports.ERROR_API_DOWN = new MessageEmbed()
    .setTitle("ERROR")
    .setColor(red)
    .setDescription("Due to a hypixel api outage all commands are disabled to prevent errors.");

exports.FULL_HELP = new MessageEmbed()
    .setTitle("Arcade bot help")
    .setColor(0x0066cc)
    .addField("/getdataraw", "Get some raw data from a player")
    .addField("/info", "Get info about the bot")
    .addField("/leaderboard", "Get an arcade leaderboard (Not availiable on micro)")
    .addField("/namehistory", "Get the list of previous names from a player")
    .addField("/stats", "Get the stats of a specified player")
    .addField("/verify", "Verify yourself with the arcade bot (Not availiable on micro)")
    .addField("/whois", "Get the linked discord account of a player (Not availiable on micro)")
    .addField("/help", "Get a list of commands of help on a specific topic")
    .addField(
        "Other help topics",
        "games - the names of all the available games\nsearching - how the bot searches for an account\nrole handling - an explantion on how role handling happens"
    );

exports.ERROR_NEED_PLAYER = new MessageEmbed()
    .setTitle("ERROR")
    .setColor(red)
    .setDescription("The player you specified does not seem to exist!");

exports.ERROR_UNKNOWN = new MessageEmbed()
        .setTitle("ERROR")
        .setColor(red)
        .setDescription("The command you tried to run caused an unknown error!")