const Account = require("./account");

let accounts = [
    new Account("als_31",           0,  "48be221987b04028adedcc018573d748"),
    new Account("MonkeyCity17",     0,  "59a3498a2a9242ef9fe3fb103e28ac23"),
    new Account("jinglesmells1337", 0,  "f0271520a6c749dba98c15e49f920dd0"),
    new Account("uuujtagr_81",      0,  "3bd62e7edecd4baaa402ac84712e32cb"),
    new Account("paethetic",        0,  "d832af69690640089ae72e09647110c0"),
    new Account("h6es",             0,  "52d71f22bad74bcc946e553c2301c6c6"),
    new Account("yiffings",         0,  "276682c596d144c1937da8cc86746edb"),
    new Account("c_ck",             0,  "83aed29868654893a678d6a841f21fe0"),
    new Account("cupoflizard",      0,  "ab01b82689d443fc87d2b2e4bb27ed70"),
    new Account("mcpoptart",        0,  "ee037e2495b54c0c997ed926005d6d2b"),
    new Account("shingblad",        0,  "3c1737382f624be3aa68bb0c915d7f03"),
    new Account("KhanInTheWall",    0,  "e19a51763749493f98071e31deecdd4f"),
    new Account("norriie",          0,  "855ac9874f3446c0b1440b344a1842f2"),
    new Account("minecraftoogle",   0,  "be98dde645094bd2b0adf14af97c8b02"),
    new Account("cute_god",         0,  "32e3b9cb1a354242bc635f92a09f6dcb"),
    new Account("kas61",            0,  "7d751b28b8204a99bbd22f965ea73bae"),
    new Account("yubg",             0,  "b673f17823f64636a6990ec94a7d0e92"),
    new Account("itamar080607",     0,  "b292d9ff50e9490389fdcd87e7953dc9"),
    new Account("ilovethe77",       0,  "a8c8a9c9f8af43eb918c4fc516ad3206"),
    new Account("jqkeup",           0,  "0a789d918bf64e4ea48f3c12975d4cd5"),
    new Account("markynoodle",      0,  "5e869e0c0cff4e6ba76f2b411c62853b"),
    new Account("blatser",          0,  "7af1c95ca8c8489781881afd4329a137"),
    new Account("matchatw",         0,  "26c5150d63fb425fbc4e59f05252a5d1"),
    new Account("YummosChihuahua",  0,  "416785fe99894f1abf1ace5a9931603e"),
    new Account("botcheetah",       0,  "92c97765e7474dc1896ad91f1206f2ae"),
    new Account("cakeeplayz",       0,  "32ecef84eecd4ddca86e7ee9b61ffc12"),
    new Account("heylevy",          0,  "a1ed55ecfd384138ada175a060fdeca6"),
    new Account("faebled",          0,  "96e8900831544035ad0db408f1167720"),
    new Account("ilomiswir",        0,  "9ac4f965e1c7423dafe60be383cdbf30"),
    new Account("oojetager",        0,  "0ce6eb40ae8f4e1ca402655da9fa3ce1"),
    new Account("ghostlyboomerang", 0,  "61af970f407a47cd94aa9d5ccb71dea2"),
    new Account("jaywolvian",       0,  "37b526399f194cc88a6e5f5b52573f4c"),
    new Account("kokosuke",         0,  "31410a289cab435c9185b859e08abe97"),
    new Account("jambal",           0,  "d6f3ade2777849b9a3bbc10c624127b8"),
    new Account("codymacke",        0,  "078bfc90a24d4546847dadec18dfa9cc"),
    new Account("bignick1",         0,  "03da5a3a08d94094ac6d771ee1ed65b5"),
    new Account("tigernew",         0,  "3b2455595d084f1a809a4c2b97867a89"),
    new Account("bigc1109",         0,  "f0133668f8da4ab7ad3e62ca1b5574da"),
    new Account("sprinngowo",       0,  "929c575ffe754c678feea3763a6738f9"),
    new Account("verylonelytree",   0,  "e22ba3fedfff4688a24b7ab70de235d7"),
    new Account("pasha300",         0,  "b73f575a0f7c485ead046122ccaa888d"),
    new Account("rxob",             0,  "2bb0a2bc41f246db81496a78ce45c909"),
    new Account("v3n0m__",          0,  "92a5199614ac4bd181d1f3c951fb719f"),
    new Account("wetaspoggers",     0,  "92553df2682b4e6697cd615a6185dbb8"),
    new Account("bruhpogchamp",     0,  "cb04f741d505497fa9e030dcc5870a39"),
    new Account("coolswaggamer",    0,  "307103ee17af4ae398e15d2f0c8a4d83"),
    new Account("eatmyvenom",       0,  "5ec59f3572844dd6ad0f5e88abf176a8"),
    new Account("hotcheetah",       0,  "d049a6668e6542de93b86c18aa8cc31c"),
    new Account("fubyinthecutie",   0,  "6618ec18e05e4b8696646ac556c307f5"),
    new Account("fuby",             0,  "527f18702ca942258a8f928c0077ab80"),
    new Account("mvvi",             0,  "fcdf415e9993436d836b922354c6e598"),
    new Account("kevinthewall",     0,  "872996337a0847aba7dca6d23f6ab362"),
    new Account("cobleemil",        0,  "1720d3158d80489f9b16a0ed72066d9f"),
    new Account("atni",             0,  "74d93607de1a4988aa997680baa52aff"),
    new Account("kuirie",           0,  "a764c0b012e24d338ba4477cab471631"),
    new Account("qSpider",          0,  "c1d3f63292bd4e038bb7223f9c528c70"),
    new Account("FionnaBalor",      0,  "c9efa13b1b0543b1ab1a8c3358666112"),
    new Account("_hipo",            0,  "37316b5549094735893b0168b7ec4631"),
    new Account("the_devilhimself", 0,  "d88c27c5c4ea4f7cb5ae14cca6685daa"),
    new Account("0name",            0,  "4b732d33f73445f797df125ea2f7f6e2"),
    new Account("js_juke",          0,  "38be93494aa140fe80ba1e4eb23ef17a"),
    new Account("drgen",            0,  "d03b6986680342c2881f6e9f05aa539a"),
    new Account("napness",          0,  "e06e1a9d6f544383a17ce727e6a01c5b"),
    new Account("tabananaman",      0,  "e3113d0ae4f047908a6ea05ffc70ed99"),
    new Account("badneon",          0,  "87b047ffec7f45c8b8b265409840daff"),
    new Account("daniezowo",        0,  "2fe1de5b959f4f08bdad18a009fd9733"),
    new Account("zhmeva",           0,  "a82811c82b394da8a7767e28d9248a45"),
    new Account("konan1010",        0,  "fc0dab3eb92144e9a7e215773edde962"),
    new Account("kyaco",            0,  "44a93e59b83f4957a73df0adcfe0b39a"),
    new Account("mizlynna",         0,  "5ec7c6412f0c437d8c45ac8ed45ef468"),
    new Account("edwarez",          0,  "1f588591df87453da6e293818a6a5473"),
    new Account("llleeee",          0,  "5d7b84393c52418f8333853998f0ced3"),
    new Account("_nadel_",          0,  "2e95d4e967644a98b0b9ec9fd470bacb"),
    new Account("Faevourite",       0,  "2f6e5e5499e04353b442091b972d8c91"),
    new Account("verybad_",         0,  "86b06ab17e3441869659ebd2062c650e"),
    new Account("i1a",              0,  "a1e8210a27a54371a4e98e2bef6615f4"),
    new Account("LiamGoneMad",      0,  "adb2edd3262b41cf98f4c58702225c71"),
    new Account("steakinthewall",   0,  "9477ef812e1b4345be40b1529f22c6a6"),
    new Account("WinInTheWall",     0,  "ab0ce1c342e847f18212e159fdbc2576"),
    new Account("Arcxire",          0,  "c46f6438006049d4830ca6fa732303fc"),
    new Account("USOMUSKY",         0,  "75203801f5a54ba6baa691523aa15848"),
    new Account("Blackoutburst",    0,  "b8ef1c7615e04b958d474ca133561f5a"),
    new Account("pastuuh",          0,  "b913560d826948bb898e1224811182ad"),
    new Account("DeeDossed",        0,  "31500c3967494317baa9b075e1f49bab"),
    new Account("CloverStyle",      0,  "421e32e33d5f44a29180b5e002057d06"),
    new Account("skycity17",        0,  "f3ca6983bc1a412e9887582d069d85e0"),
    new Account("p3ppa_plg",        0,  "f4d24725a98c4ba5974e09a1593b9e64"),
    new Account("shiins",           0,  "a23876ceb32f4d72a0a45eb5873bc101"),
    new Account("0897david0897",    0,  "6dad8267c2794d1d8e74e4305f77fb6b"),
    new Account("lllGhost",         0,  "8b7b7e2fc6fa45cab0eaa9859a39fb3d"),
    new Account("BLKIN",            0,  "159db5c267ce4edfb6c96b1534c69fa1"),
    new Account("laura_something",  0,  "572b5e64f3324e68b95cbee80bf98e88"),
    new Account("DarthEsme",        0,  "8c6b335bdf944317bcb9d93f402aa800"),
    new Account("Ink0taScythe",     0,  "58d3eb8d8e5a4ace851de5b805b369d4"),
    new Account("PartyGamesUpdate", 0,  "91382a73707c44ee9ac6822a63c24fb7"),
    new Account("DrPickle_",        0,  "e9217e592be042748426507c85cc7a83"),
    new Account("SuperMinerAAA",    0,  "3bf7d05435e144feadc7ba0d0ebf138d"),
    new Account("PokemonCity17",    0,  "1702f06f87cb4c5c94164e4966926b1d"),
    new Account("Speedblaster",     0,  "1dcb13970b364a46bef2d626670bfcab"),
    new Account("mythicalpingu",    0,  "5dca9ac311ed47eb8890a443ba03e2b6"),
    new Account("LunaAstris",       0,  "8bdae675d3b94d2bb71cbb076f61aa4b"),
    new Account("Nebbens",          0,  "278544eef8244420ba205ce92a28805d"),
    new Account("Dumboes",          0,  "69253d1078ba4d43aaaad9996d6085c7"),
    new Account("MiWadiPOG",        205,"86fa3f6650f44550b91e034c566d65e4"),
    new Account("Smertnix",         506,"b6fa98ce973741d0996c3282c30f1200"),
    new Account("fizzyferns",       272,"7855118f2df742cdb91719b0c679c4d9"),
    new Account("GreenToothbrush",  542,"b5c76b6b568d4c7d960783736f3011c4"),
    new Account("JaidJule",         156,"50714dea74d54c2c99467d4eddced34a"),
    new Account("MintBiscuitBalls", 101,"7fb433d1a0244f51aa84472010d9e9a2"),
    new Account("Pamowen1",         73, "d22d9033b45a4cb7ad4270202cc13edb"),
    new Account("Generic_Mystic",   276,"02d148b337954851a62183da05eaf958"),
    new Account("Kelp04",           54, "d70c6b7b68d5433a9a1541c69d937bc5"),
    new Account("Riley_14",         670,"2edbe7fd91d84e00b01b9c676696a6b3"),
    new Account("UnderscoreRandom", 56, "60432cfd0f884053af42aa5c86d4980b"),
    new Account("sevehn",           515,"1102b2cdb4394201b76f055d9e73947c"),
    new Account("Miisted",          68, "8e526df6c8914c64b8959240e3621595"),
    new Account("enuoia",           782,"a4ade80fba14494ab86730865869fc80"),
    new Account("PandaBroDk",       752,"f9180df5d6584556ad41424bef2c7134"),
    new Account("rosmine",          729,"9ec963384e434b12914f63cdc50d39a5"),
    new Account("TheMinatoryFox",   707,"3f89d735247242ab93e423ac2dcd1587"),
    new Account("Railbeam",         706,"b7c5561ed03f4efda5d548dd7578e505"),
    new Account("Leuphou",          673,"c943524c9e814137b5052adb7971c4f5"),
    new Account("Haelx",            1031,"967baa9c478a4b428dcce752c224fad5"),
    new Account("UhmCringe",        572,"6f67052f845647fa8ac23b0a089d6579"),
    new Account("Squashy_SquidMC",  532,"7c01c0effca24035a39b8ff001ef6883"),
    new Account("firework15069",    559,"7312a6a342eb4fb5ba82841655d64eed"),
    new Account("gkc1414",          514,"23ce7611d41848048239ef4303d18aec"),
    new Account("BigHairyPoggers",  0,  "d069d531593e4449ba3ce1f6a0adb4f9"),
    new Account("Pureloor",         169,"2a8c301c367c49218d676c23bbe31f82"),
    new Account("Korr",             42, "572701ac574446549d4144cd33d24e0e"),
    new Account("sphylx",           166,"2ebcf8158d654e0aa03fd7fd70f50c05"),
    new Account("Pio1",             34, "687d52e048694f32b4daf4467bf7cb76"),
    new Account("awesomedudeIV",    633,"226a029f1bb64ee3a2ecef734fb290cb"),
    new Account("GhostlyUchi",      169,"f1a73af3d6574adeb3639ad07a399e67"),
    new Account("ordnasxd",         174,"65d9b07e42fe4914bc95420b9812c594"),
    new Account("baomars",          9,  "05604ed9730841fea40746f1fd6320e7"),
]

let others = [
    new Account("HammyInTheWall",   0,  "b00d07b27984424db8f2d96c1e4aace5"),
    new Account("UekuInTheWall",    0,  "2f3a6a6d8d4447e5a310f3456a4f999c"),
    new Account("riskytaunt",       0,  "5fdd078f4e434f299de097dc901657c7"),
    new Account("xmuffins",         1,  "fd377fb97ccd424ba150355c7e651a73"),
    new Account("bunniexoxo",       0,  "a606f01b5a334c6ca1ebc770fa9fd6c1"),
    new Account("MasonInTheWall",   0,  "bedb53e2dd754786a2ac1ec80023aabe"),
    new Account("SlightlyRomantic", 23, "ad46fd81d60c4c9abc8a625f151ae236"),
    new Account("herobrine_7_7_7",  0,  "b6ae289c0b554905a6b471eb882eb068"),
    new Account("Klaudes",          21, "eccb20606d064dc78910e7749251fb6d"),
    new Account("ElectricC",        27, "386d3cbb07d34f45a07c9bbdaf1575df"),
];

let afkers = [
    new Account("Galaxy_Senpai",    0,  "12b722c11e1e4afdb94c9035b505b381"),
    new Account("xHugTacos",        25, "6b13ccc803e4492099c0a69b8711287d"),
    new Account("genkai95",         0,  "ae4448d2426847cdab3c2643ba180f62"),
    new Account("Chenchen87",       0,  "8c7fda5b68a344cab0285fb819e72b84"),
    new Account("Swishfox",         0,  "54daaea5e2434d509c3ae2ab6894613b"),
    new Account("xLightW0lf",       0,  "adb6dbe449744378a35a412c17461e07"),
    new Account("Riiruu",           0,  "ffaed91b5ea448358e49d6cb360ad4c9"),
    new Account("Cale73",           0,  "19f86e80474b46399f8e4895bc3f9aa8"),
    new Account("Aplanna",          0,  "d7c1688cccff4d27abaabc7d3bf78cb6"),
    new Account("Gigchad",          0,  "75250f4279744d419f292acb66e1e878"),
    new Account("Sebastitgames",    0,  "4eff417255fd4f6595388e86b090c9f3"),
    new Account("minifigures",      0,  "fcfe7dc42a8643798a67ac60b9047f0b"),
    new Account("jkGALAKTUS",       0,  "574bfb977d4c475b8197b73b15194a2a"),
    new Account("Pe3tr",            0,  "3ba7e860b0734eb8b7c4393f94565781"),
    new Account("knacam",           0,  "d4a092f3fb3649fb93f2c2cd266e5fbb"),
    new Account("Cukrenka",         0,  "6ccdfdc5ea8a43c1ab6f9787b2a6af94"),
    new Account("FortuneLemon",     0,  "3c57402d3fd94ba9abc0e239ac13e2ba"),
    new Account("Aldix",            0,  "6a040159d71841129271ce291b226587"),
    new Account("Krumpachnik",      0,  "c7dd99bb81454c2fbfc7fbe782995a47"),
    new Account("aByee",            0,  "989ab8d5264546f09734ab01095c3b12"),
    new Account("ZenBenn",          0,  "f9adb4d8fd664d4098d4e70bb3d15ee6"),
    new Account("ThePoGoCZ",        0,  "2dea766f25b84d37b08a88e4dc2fee4d"),
    new Account("LoverBoyCanadian", 0,  "2b5a1ae09148446eb50fbb2f7bc2b41c"),
    new Account("canadiansweat",    0,  "2beab55b4b5f48c3be44c1fc6143bc76"),
    new Account("TomerWB",          104,"27bfc7fa817a4614a9336d4da29643f1"),
    new Account("Osunburst",        12, "39f04005bbb14d2ea6fd0b378ad7a700"),
    new Account("Cuseno",           147,"233fec7343b143dca38d973c4bac86f9"),
    new Account("Falsehacker",      58, "233fec7343b143dca38d973c4bac86f9"),
    new Account("InfamousJUK3D",    0,  "f99735b1b41e4d81966f2d6512b65e7b"),
    new Account("Hiejo",            35, "eff2905c6d964a88a8f5c098472dd741"),
    new Account("oMarc",            28, "d4601e8aa2d04249a3a9368840735873"),
    new Account("Frightt",          59, "024896d11ca2419085415a64417bb194"),
    new Account("DutchMark",        0,  "811e9b67ef5843a98e4b52eb2449ee9d"),
    new Account("Rowdies",          53, "7f3d419178064fe59d1fcf617835f56e"),
    new Account("SilverPat",        19, "d68d5b1887e146f5a1fbc18049292724"),
    new Account("strqnded",         78, "be3890ab08604c7ebcc1d92f8cde07ed"),
    new Account("xArctic",          55, "06eaba13fe53418b9a1dd18ea92c66bb"),
    new Account("ilovealice2000",   49, "99a64e1451874894b0c014adb3edc510"),
    new Account("kigz",             38, "8d03dc3fdf894fc499966747f5d72845"),
    new Account("Intensefy",        59, "fce01da6a3814f7cae7acc0f31c58eae"),
    new Account("GloriousYellow",   0,  "1037837a39b64a0ea0a54d9b91061771"),
    new Account("Cubxr",            62, "1037837a39b64a0ea0a54d9b91061771"),
    new Account("Almighty_Dab",     0,  "59bc1c1236b3487cb36724f1ca475009"),
    new Account("SirFuzzyMonkey",   0,  "97f3afe5e9924d2bb862cb0b51a29105"),
    new Account("NoHackzJustAsian", 0,  "921d1f805da940c79008e5c5b10cba18"),
    new Account("Bqsketball",       7,  "ee0fca3f3c86440293fb6084e1c85030"),
    new Account("TheLazySquid",     9,  "2402d53a1c674a54a7eb4cef31852b7b"),
    new Account("RAT_nee920",       25, "59069d61c23248fbafbd3b0473740a84"),
    new Account("wcho",             10, "0484d90b86ba4281aaeacf1668a41106"),
    new Account("Shadqw",           104,"46ca8b111c59428f9b27318100cda158"),
    new Account("CursedRaven",      2,  "f6da7e9895c34773a8db9dc00c807832"),
    new Account("Knightviper98",    0,  "ed369af75c9c427986048861df28e9b7"),
    new Account("undramatic",       54, "cc24a439bd3e48ec9858e807d2cb7288"),
    new Account("ColorfulBlob",     100,"72ec4d813f674d59a767955fa9981324"),
    new Account("sddie",            34, "95b02f267f714642b34c78f7f5a44521")
];

let important = [
    new Account("plancke",          0,  "f025c1c7f55a4ea0b8d93f47d17dfe0f"),
    new Account("AgentKid",         0,  "0b3ee6ed95f941b4884ff3fb0a6156e4"),
    new Account("hypixel",          0,  "f7c77d999f154a66a87dc4a51ef30d19"),
    new Account("SlothPixel",       0,  "7dee85b445b348f0891850c1be2e0ca2"),
    new Account("Plancker",         0,  "2c93d7de9f124e84a56c918fc24390eb"),
    new Account("Plank",            0,  "d6e5c8368a754913a640598124283228"),
    new Account("SenorPancake",     0,  "b9df4e1e3afc4147a88043da5d410db8"),
    new Account("ZeroErrors",       0,  "ce0507fbb61343f7b4a58f10b3c71090"),
    new Account("MasterControl",    0,  "c1ec7a0544d84dd8a44a6eb400570ed7"),
    new Account("Thorlon",          0,  "d3be5ef3db9b48d3a668019bf3ce0495"),
    new Account("Sylent_",          0,  "51e8915dbe3a4d5894693a16f3c60c73"),
    new Account("SylentButDedly",   0,  "5887350330aa49c2b7d1e31cc69141a7"),
    new Account("LadyBleu",         0,  "ef35e10b189e4193a7c9c4813e76af05"),
]

let yt = [
    new Account("Technoblade",      0,  "b876ec32e396476ba1158438d83c67d4"),
    new Account("Dream",            0,  "ec70bcaf702f4bb8b48d276fa52a780c"),
    new Account("elybeatmaker",     0,  "0de37784badd4fe1845ad58951d45ab1"),
    new Account("gamerboy80",       0,  "24c182c6716b47c68f60a1be9045c449"),
    new Account("Illumina",         0,  "46405168e9ce40a099a40b989a912c77"),
    new Account("Purpled",          0,  "1218cdf352bd4e18ba24d4b202ec85f3"),
    new Account("TapL",             0,  "2e12870c08ec4337bc2e8fbf54e79853"),
    new Account("Zyphon_",          0,  "af0f4dfdfb534d698bad0757f17debed"),
]

let pog = [
    new Account("pr0cess",          0,  "12f1b65715434896b8185d584cc21fe4"),
    new Account("smokey95dog",      0,  "94446063823a44e2b2842e1fd89fed9c"),
    new Account("Rechenmaschine",   0,  "a0d6849dcaca4a86bba9d8bf2f0a88d7")
]

module.exports = {accounts: accounts.concat(others, afkers, important ,yt, pog),gamers:accounts, others: others, afkers : afkers, important: important, yt:yt, pog:pog} 
