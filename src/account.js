const { getAccountData } = require("./hypixelApi");
const optifineRequest = require("./optifineRequest");
const labyRequest = require("./labyRequest");

class Account {
    name = "";
    uuid = "";
    uuidPosix = "";
    internalId = "";
    rank = "";
    version = "";
    firstLogin = 0;
    isLoggedIn = false;
    mostRecentGameType = "";
    achievementPoints = 0;
    xp = 0;
    karma = 0;
    ranksGifted = 0;
    wins = 0;
    hitwQual = 0;
    hitwFinal = 0;
    hitwWins = 0;
    hitwRounds = 0;
    farmhuntWins = 0;
    hypixelSaysWins = 0;
    arcadeWins = 0;
    anyWins = 0;
    hasOFCape = false;
    hasLabyCape = false;
    cloak = "";
    clickEffect = "";
    plusColor = "";
    hat = "";
    discord = "";

    /**
     * Creates an instance of Account.
     * @param {String} name
     * @param {Number} wins
     * @param {String} uuid
     * @memberof account
     */
    constructor(name, wins, uuid) {
        this.name = name;
        this.wins = wins;
        this.uuid = uuid;
        let timeLow = uuid.slice(0, 8);
        let timeMid = uuid.slice(8, 12);
        let version = uuid.slice(12, 16);
        let varient = uuid.slice(16, 20);
        let node = uuid.slice(-12);
        this.uuidPosix = `${timeLow}-${timeMid}-${version}-${varient}-${node}`;
    }

    /**
     * Update and populate all the data for this account
     * @memberof account
     */
    async updateData() {
        await Promise.all([
            this.updateHypixel(),
            this.updateOptifine(),
            this.updateLaby(),
        ]);
    }

    /**
     * Update and populate the optifine data
     * @memberof account
     */
    async updateOptifine() {
        let req = new optifineRequest(this.name);
        await req.makeRequest();
        this.hasOFCape = req.hasCape();
    }

    /**
     * Update and populate the labymod data
     * @memberof account
     */
    async updateLaby() {
        let req = new labyRequest(this.uuidPosix);
        await req.makeRequest();
        this.hasLabyCape = req.hasCape();
    }

    /**
     * Update and populate the hypixel data
     * @memberof account
     */
    async updateHypixel() {
        let json = await getAccountData(this.uuid);
        // make sure player has stats to be checked
        if (json.player && json.player.stats && json.player.stats.Arcade) {
            let arcade = json.player.stats.Arcade;

            let wins = 0;
            if (arcade.wins_party) wins += arcade.wins_party;
            if (arcade.wins_party_2) wins += arcade.wins_party_2;
            if (arcade.wins_party_3) wins += arcade.wins_party_3;
            this.wins = wins;

            this.ranksGifted =
                json.player.giftingMeta != undefined
                    ? json.player.giftingMeta.ranksGiven
                    : 0;

            this.rank =
                json.player.newPackageRank != undefined
                    ? json.player.newPackageRank
                    : json.player.packageRank;

            if (json.player.monthlyPackageRank == "SUPERSTAR")
                this.rank = "MVP_PLUS_PLUS";
            if (json.player.rank) this.rank = json.player.rank;

            if (
                json.player.socialMedia &&
                json.player.socialMedia.links &&
                json.player.socialMedia.links.DISCORD
            ) {
                this.discord = json.player.socialMedia.links.DISCORD;
            }

            this.name = json.player.displayname;
            this.internalId = json.player._id;
            this.isLoggedIn = json.player.lastLogin > json.player.lastLogout;
            this.version = json.player.mcVersionRp;
            this.mostRecentGameType = json.player.mostRecentGameType;
            this.xp = json.player.networkExp;
            this.karma = json.player.karma;
            this.hypixelSaysWins = arcade.wins_simon_says;
            this.achievementPoints = json.player.achievementPoints;
            this.plusColor = json.player.rankPlusColor;
            this.cloak = json.player.currentCloak;
            this.hat = json.player.currentHat;
            this.clickEffect = json.player.currentClickEffect;
            this.hitwFinal = arcade.hitw_record_f;
            this.hitwQual = arcade.hitw_record_q;
            this.hitwWins = arcade.wins_hole_in_the_wall;
            this.hitwRounds = arcade.rounds_hole_in_the_wall;
            this.farmhuntWins = arcade.wins_farm_hunt;
            this.firstLogin = json.player.firstLogin;
            this.arcadeWins = json.player.achievements.arcade_arcade_winner;
            this.anyWins = json.player.achievements.general_wins;
        }
    }
}

module.exports = Account;
