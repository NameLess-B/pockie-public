const { Avatar } = require("./avatars");
const { DropTable } = require("./dropTable");

function createMonsterStats(
  avatar, 
  level, 
  exp=0, 
  hp, 
  chakra, 
  min, 
  max, 
  spd, 
  def, 
  critical=0, 
  criticalDamage=230, 
  hit=0, 
  dodge=0, 
  defenseBreak=0, 
  parry=0, 
  pierce=0, 
  con=0, 
  dropTable=DropTable.None, 
  stones=[0, 0],
  skills=[],
  canKickBomb=false,
) {
  return {
    avatar,
		level,
    exp,
    hp,
    maxHp: hp,
    chakra,
    maxChakra: chakra,
    minAttack: min,
    maxAttack: max,
    speed: spd,
    defense: def,
    critical,
    criticalDamage,
    hit,
    dodge,
    defenseBreak,
    parry,
    pierce,
    con,
    dropTable,
    stones,
    skills,
    canKickBomb,
	}
}

const Monster = {
  EXP: 31000,
  EXP_2: 31001,
  STONES: 31002,
  Earth_Pterosaur: 31018,
  Whirlwind: 31019,
  Barbarians: 31020,
  Ice_Pterosaur: 31021,
  Lei_Pterosaur: 31022,
  Uesugi_Saski: 31023,
  Greedy_Bandit: 31024,
  Toad_Dragon: 31025,
  Double_Headed_Dragon: 31026,
  Wild_Pterosaur: 31041,
  Mowing: 31042,
  Coast_2: 31043,
  Pyramid: 31044,
  Kobayam: 31045,
  Giant_Cricket: 31046,
  Mechanical_Cattle: 31047,
  Giant_Lizard: 31048,
  Giant_Bird: 31049,
  Jiutou_Dragon: 31050,
  Cerberus: 31051,
  Scarlet: 32001,
  Warrior_Of_Darkness: 32002,
  Bullheaded_Champ: 32003,
  Thunder: 32004,
  Shadow_Bat: 32005,
  Guzhu_Xi_Shou: 32006,
  Aka_Kou_Giant: 32007,
  Hongchaun_Yatai: 32008,
  Noodle_Thief: 32010,
  Demon_General: 32011,
  Morima: 32012,
  Longfeather_Bandit: 32015,
  Ghost_Noodle: 32016,
  Pork_Gangster: 32018,
  Magic_General: 32017,
  The_Righteous_Thief: 32019,
  Chevalier: 32020,
  Resentment: 32021,
  Morima_Qianhe: 32022,
  Mountain_Bandit: 32023,
  Fog_Monster: 32024,
  Gangster: 32036,
  Ancient_Ninja: 32027,
  Barren_Swordsman: 32028,
  Jin_Mang_Monster: 32030,
  Drowning: 32031,
  Skeleton_Swordsman: 32032,
  Young_Eagle: 33001,
  Eagle: 33002,
  Bloodsucking_Bat: 33003,
  Little_Devil: 33004,
  Green_Leather_Frog: 33005,
  Bee: 33006,
  Mouse: 33007,
  Grinning_Monkey: 33008,
  Dog: 33009,
  Ghost: 33010,
  Kappa: 33011,
  Wild_Monk: 33012,
  Magic_Flute_Demon: 33013,
  Ghost_Mother_In_Law: 33014,
  Maneater_Blossom: 33015,
  Treant: 33016,
  Flower: 33017,
  Sweet_Potato_Demon: 33018,
  Corn_Demon: 33019,
  Flame_Demon: 33020,
  Buns: 33025,
  Sushi: 33026,
  Riceball_Monster: 33027,
  Black_Eagle: 33028,
  Desert_Vulture: 33029,
  Swamp_Poison_Frog: 33031,
  Corpse_Mouse: 33033,
  Roar_Demon_Ape: 33034,
  Furious_Dog: 33035,
  Poisonous_Marsh_Knap: 33037,
  Degenerate_Monk: 33038,
  Fraud: 33040,
  Demon_Eye_Demon: 33041,
  Gloomy_Tree: 33042,
  Bloodthirsty_Sunflower: 33043,
}

const Monsters = {
  [Monster.EXP]: {
    avatar: Avatar.Flower,
		level: 2,
    exp: 50000,
    hp: 30,
    maxHp: 30,
    chakra: 30,
    maxChakra: 30,
    minAttack: 19,
    maxAttack: 23,
    speed: 1004,
    defense: 71,
    dropTable: DropTable.Level_1,
    stones: [8, 9]
	},
  [Monster.EXP_2]: {
    avatar: Avatar.Flower,
		level: 2,
    exp: 1000000,
    hp: 30,
    maxHp: 30,
    chakra: 30,
    maxChakra: 30,
    minAttack: 19,
    maxAttack: 23,
    speed: 1004,
    defense: 71,
    dropTable: DropTable.Level_1,
    stones: [8, 9]
	},
  [Monster.STONES]: createMonsterStats(10076, 95, 1, 1, 1, 1, 1, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [10000, 10000]),
	[Monster.Flower]: createMonsterStats(10076, 2, 8, 30, 30, 19, 23, 996, 71, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_1, [8, 9], [40027]),
  [Monster.Bee]: createMonsterStats(10065, 4, 14, 32, 32, 23, 28, 997, 95, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_1, [8, 10], [40023]),
  [Monster.Sushi]: createMonsterStats(10085, 6, 21, 59, 59, 27, 33, 998, 115, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_6, [9, 11]),
  [Monster.Scarlet]: createMonsterStats(10001, 8, 29, 73, 73, 31, 38, 1000, 153, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_6, [10, 12], [40031, 40033]),
  [Monster.Warrior_Of_Darkness]: createMonsterStats(10002, 10, 37, 312, 312, 32, 40, 1001, 173, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_6, [10, 12], [40031, 40033, 40036]),
  [Monster.Sweet_Potato_Demon]: createMonsterStats(10077, 12, 46, 137, 137, 40, 49, 1003, 189, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_11, [11, 13], [40028]),
  [Monster.Grinning_Monkey]: createMonsterStats(10067, 14, 56, 145, 145, 44, 54, 1004, 199, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_11, [11, 14], [40024]),
  [Monster.Riceball_Monster]: createMonsterStats(10086, 16, 66, 195, 195, 48, 59, 1005, 207, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_11, [11, 14], [40020]),
  [Monster.Treant]: createMonsterStats(10075, 17, 72, 199, 199, 50, 62, 1006, 223, 0, 0, 0, 0, 0, 0, 0, 0, DropTable.Level_16, [12, 14], [40026]),
  [Monster.Kappa]: {
    avatar: Avatar.Kappa,
		level: 18,
    exp: 78,
    hp: 204,
    maxHp: 204,
    chakra: 204,
    maxChakra: 204,
    minAttack: 53,
    maxAttack: 65,
    speed: 993,
    defense: 231,
    dropTable: DropTable.Level_16,
    stones: [12, 15]
	},
  [Monster.Maneater_Blossom]: {
    avatar: Avatar.Maneater_Blossom,
		level: 19,
    exp: 85,
    hp: 209,
    maxHp: 209,
    chakra: 209,
    maxChakra: 209,
    minAttack: 55,
    maxAttack: 67,
    speed: 993,
    defense: 234,
    dropTable: DropTable.Level_16,
    stones: [12, 15]
	},
  [Monster.Bullheaded_Champ]: {
    avatar: Avatar.Bullheaded_Champ,
		level: 20,
    exp: 90,
    hp: 583,
    maxHp: 583,
    chakra: 583,
    maxChakra: 583,
    minAttack: 70,
    maxAttack: 85,
    speed: 935,
    defense: 327,
    dropTable: DropTable.Level_16,
    stones: [12, 15]
	},
  [Monster.Longfeather_Bandit]: {
    avatar: Avatar.Longfeather_Bandit,
		level: 21,
    exp: 96,
    hp: 285,
    maxHp: 285,
    chakra: 285,
    maxChakra: 285,
    minAttack: 63,
    maxAttack: 77,
    speed: 959,
    defense: 269,
    dropTable: DropTable.Level_21,
    stones: [12, 15]
	},
  [Monster.Corn_Demon]: {
    avatar: Avatar.Corn_Demon,
		level: 22,
    exp: 102,
    hp: 280,
    maxHp: 280,
    chakra: 280,
    maxChakra: 280,
    minAttack: 66,
    maxAttack: 81,
    speed: 959,
    defense: 301,
    dropTable: DropTable.Level_21,
    stones: [13, 15]
	},
  [Monster.Chevalier]: {
    avatar: Avatar.Chevalier,
		level: 23,
    exp: 109,
    hp: 279,
    maxHp: 279,
    chakra: 279,
    maxChakra: 279,
    minAttack: 69,
    maxAttack: 85,
    speed: 958,
    defense: 306,
    dropTable: DropTable.Level_21,
    stones: [13, 16]
	},
  [Monster.Mouse]: {
    avatar: Avatar.Burrowing_Rodent,
		level: 24,
    exp: 116,
    hp: 279,
    maxHp: 279,
    chakra: 279,
    maxChakra: 279,
    minAttack: 72,
    maxAttack: 88,
    speed: 958,
    defense: 311,
    dropTable: DropTable.Level_21,
    stones: [13, 16]
	},
  [Monster.Shadow_Bat]: {
    avatar: Avatar.Shadow_Bat,
		level: 25,
    exp: 123,
    hp: 760,
    maxHp: 760,
    chakra: 760,
    maxChakra: 760,
    minAttack: 95,
    maxAttack: 116,
    speed: 899,
    defense: 439,
    dropTable: DropTable.Level_21,
    stones: [13, 16]
	},
  [Monster.Ghost]: {
    avatar: Avatar.Wildhaired_Banshee,
		level: 26,
    exp: 130,
    hp: 344,
    maxHp: 344,
    chakra: 344,
    maxChakra: 344,
    minAttack: 84,
    maxAttack: 102,
    speed: 924,
    defense: 372,
    dropTable: DropTable.Level_26,
    stones: [13, 16]
	},
  [Monster.Ghost_Mother_In_Law]: {
    avatar: Avatar.Ghost_Granny,
		level: 27,
    exp: 137,
    hp: 341,
    maxHp: 341,
    chakra: 341,
    maxChakra: 341,
    minAttack: 88,
    maxAttack: 107,
    speed: 924,
    defense: 388,
    dropTable: DropTable.Level_26,
    stones: [13, 16]
	},
  [Monster.Flame_Demon]: {
    avatar: Avatar.Scorching_Demon,
		level: 28,
    exp: 145,
    hp: 340,
    maxHp: 340,
    chakra: 340,
    maxChakra: 340,
    minAttack: 91,
    maxAttack: 112,
    speed: 923,
    defense: 396,
    dropTable: DropTable.Level_26,
    stones: [14, 17]
	},
  [Monster.Green_Leather_Frog]: {
    avatar: Avatar.Greenskin_Frog,
		level: 29,
    exp: 153,
    hp: 340,
    maxHp: 340,
    chakra: 340,
    maxChakra: 340,
    minAttack: 95,
    maxAttack: 116,
    speed: 922,
    defense: 399,
    dropTable: DropTable.Level_26,
    stones: [14, 17]
	},
  [Monster.Demon_General]: {
    avatar: Avatar.Demon_Chuuji,
		level: 30,
    exp: 161,
    hp: 977,
    maxHp: 977,
    chakra: 977,
    maxChakra: 977,
    minAttack: 126,
    maxAttack: 154,
    speed: 866,
    defense: 503,
    dropTable: DropTable.Level_26,
    stones: [14, 17]
	},
  [Monster.Little_Devil]: {
    avatar: Avatar.Bakeneko,
		level: 31,
    exp: 169,
    hp: 419,
    maxHp: 419,
    chakra: 419,
    maxChakra: 419,
    minAttack: 110,
    maxAttack: 134,
    speed: 887,
    defense: 441,
    dropTable: DropTable.Level_31,
    stones: [14, 17]
	},
  [Monster.Dog]: {
    avatar: Avatar.Lost_Dog,
		level: 32,
    exp: 178,
    hp: 410,
    maxHp: 410,
    chakra: 410,
    maxChakra: 410,
    minAttack: 115,
    maxAttack: 140,
    speed: 886,
    defense: 479,
    dropTable: DropTable.Level_31,
    stones: [14, 17]
	},
  [Monster.Noodle_Thief]: {
    avatar: Avatar.Masked_Robber,
		level: 33,
    exp: 187,
    hp: 410,
    maxHp: 410,
    chakra: 410,
    maxChakra: 410,
    minAttack: 119,
    maxAttack: 146,
    speed: 886,
    defense: 484,
    dropTable: DropTable.Level_31,
    stones: [14, 18]
	},
  [Monster.Buns]: {
    avatar: Avatar.Bun_Monster,
		level: 34,
    exp: 196,
    hp: 409,
    maxHp: 409,
    chakra: 409,
    maxChakra: 409,
    minAttack: 123,
    maxAttack: 151,
    speed: 885,
    defense: 490,
    dropTable: DropTable.Level_31,
    stones: [14, 18]
	},
  [Monster.Thunder]: {
    avatar: Avatar.Thunderbolt_Warrior,
		level: 35,
    exp: 205,
    hp: 1177,
    maxHp: 1177,
    chakra: 1177,
    maxChakra: 1177,
    minAttack: 159,
    maxAttack: 195,
    speed: 856,
    defense: 553,
    dropTable: DropTable.Level_31,
    stones: [15, 18]
	},
  [Monster.Hongchaun_Yatai]: {
    avatar: Avatar.Hongo_Batai,
		level: 35,
    exp: 205,
    hp: 1177,
    maxHp: 1177,
    chakra: 1177,
    maxChakra: 1177,
    minAttack: 159,
    maxAttack: 195,
    speed: 856,
    defense: 553,
    dropTable: DropTable.Level_31,
    stones: [15, 18]
	},
  [Monster.Ghost_Noodle]: {
    avatar: Avatar.Ghostfaced_Henchman,
		level: 36,
    exp: 214,
    hp: 493,
    maxHp: 493,
    chakra: 493,
    maxChakra: 493,
    minAttack: 143,
    maxAttack: 175,
    speed: 850,
    defense: 563,
    dropTable: DropTable.Level_36,
    stones: [14, 18]
	},
  [Monster.Wild_Monk]: {
    avatar: Avatar.Immoral_Monk,
		level: 37,
    exp: 224,
    hp: 489,
    maxHp: 489,
    chakra: 489,
    maxChakra: 489,
    minAttack: 148,
    maxAttack: 181,
    speed: 850,
    defense: 579,
    dropTable: DropTable.Level_36,
    stones: [15, 18]
	},
  [Monster.Ancient_Ninja]: {
    avatar: Avatar.Ancient_Isle_Ninja,
		level: 38,
    exp: 234,
    hp: 487,
    maxHp: 487,
    chakra: 487,
    maxChakra: 487,
    minAttack: 154,
    maxAttack: 188,
    speed: 849,
    defense: 587,
    dropTable: DropTable.Level_36,
    stones: [15, 18]
	},
  [Monster.Pork_Gangster]: {
    avatar: Avatar.Demon_Brute,
		level: 39,
    exp: 244,
    hp: 487,
    maxHp: 487,
    chakra: 487,
    maxChakra: 487,
    minAttack: 159,
    maxAttack: 194,
    speed: 848,
    defense: 590,
    dropTable: DropTable.Level_36,
    stones: [15, 19]
	},
  [Monster.Guzhu_Xi_Shou]: {
    avatar: Avatar.Ancient_Isle_Nightwatch,
		level: 40,
    exp: 254,
    hp: 1447,
    maxHp: 1447,
    chakra: 1447,
    maxChakra: 1447,
    minAttack: 193,
    maxAttack: 236,
    speed: 848,
    defense: 594,
    dropTable: DropTable.Level_36,
    stones: [15, 19]
	},
  [Monster.Magic_General]: {
    avatar: Avatar.Bloodboil_Demon,
		level: 40,
    exp: 254,
    hp: 1447,
    maxHp: 1447,
    chakra: 1447,
    maxChakra: 1447,
    minAttack: 193,
    maxAttack: 236,
    speed: 848,
    defense: 594,
    dropTable: DropTable.Level_36,
    stones: [15, 19]
	},
  [Monster.Magic_Flute_Demon]: {
    avatar: Avatar.Demon_Flute_Succubus,
		level: 41,
    exp: 264,
    hp: 550,
    maxHp: 550,
    chakra: 550,
    maxChakra: 550,
    minAttack: 173,
    maxAttack: 211,
    speed: 839,
    defense: 609,
    dropTable: DropTable.Level_41,
    stones: [15, 19]
	},
  [Monster.Eagle]: {
    avatar: Avatar.Vulture,
		level: 42,
    exp: 275,
    hp: 546,
    maxHp: 546,
    chakra: 546,
    maxChakra: 546,
    minAttack: 178,
    maxAttack: 217,
    speed: 839,
    defense: 624,
    dropTable: DropTable.Level_41,
    stones: [16, 19]
	},
  [Monster.Mountain_Bandit]: {
    avatar: Avatar.Sunrise_Brigand,
		level: 43,
    exp: 286,
    hp: 545,
    maxHp: 545,
    chakra: 545,
    maxChakra: 545,
    minAttack: 182,
    maxAttack: 222,
    speed: 838,
    defense: 629,
    dropTable: DropTable.Level_41,
    stones: [16, 19]
	},
  [Monster.Bloodsucking_Bat]: {
    avatar: Avatar.Bloodbat,
		level: 44,
    exp: 297,
    hp: 544,
    maxHp: 544,
    chakra: 544,
    maxChakra: 544,
    minAttack: 185,
    maxAttack: 226,
    speed: 838,
    defense: 634,
    dropTable: DropTable.Level_41,
    stones: [16, 19]
	},
  [Monster.Aka_Kou_Giant]: {
    avatar: Avatar.Flameplate_Brigand,
		level: 45,
    exp: 308,
    hp: 1617,
    maxHp: 1617,
    chakra: 1617,
    maxChakra: 1617,
    minAttack: 221,
    maxAttack: 270,
    speed: 817,
    defense: 645,
    dropTable: DropTable.Level_41,
    stones: [16, 20]
	},
  [Monster.Young_Eagle]: {
    avatar: Avatar.Egret,
		level: 46,
    exp: 320,
    hp: 623,
    maxHp: 623,
    chakra: 623,
    maxChakra: 623,
    minAttack: 197,
    maxAttack: 240,
    speed: 831,
    defense: 656,
    dropTable: DropTable.Level_46,
    stones: [16, 20]
	},
  [Monster.Corpse_Mouse]: {
    avatar: Avatar.Digrat,
		level: 47,
    exp: 332,
    hp: 619,
    maxHp: 619,
    chakra: 619,
    maxChakra: 619,
    minAttack: 201,
    maxAttack: 246,
    speed: 831,
    defense: 672,
    dropTable: DropTable.Level_46,
    stones: [16, 20]
	},
  [Monster.Morima]: {
    avatar: Avatar.Forest_Ninja,
		level: 48,
    exp: 344,
    hp: 617,
    maxHp: 617,
    chakra: 617,
    maxChakra: 617,
    minAttack: 206,
    maxAttack: 251,
    speed: 830,
    defense: 680,
    dropTable: DropTable.Level_46,
    stones: [16, 20]
	},
  [Monster.Furious_Dog]: {
    avatar: Avatar.Berserker_Demondog,
		level: 49,
    exp: 356,
    hp: 616,
    maxHp: 616,
    chakra: 616,
    maxChakra: 616,
    minAttack: 210,
    maxAttack: 256,
    speed: 830,
    defense: 683,
    dropTable: DropTable.Level_46,
    stones: [17, 20]
	},
  [Monster.Morima_Qianhe]: {
    avatar: Avatar.Senyo_Of_The_Forest,
		level: 50,
    exp: 368,
    hp: 1832,
    maxHp: 1832,
    chakra: 1832,
    maxChakra: 1832,
    minAttack: 256,
    maxAttack: 313,
    speed: 809,
    defense: 687,
    dropTable: DropTable.Level_46,
    stones: [17, 20]
	},
  [Monster.Black_Eagle]: {
    avatar: Avatar.Blackhawk,
		level: 51,
    exp: 381,
    hp: 670,
    maxHp: 670,
    chakra: 670,
    maxChakra: 670,
    minAttack: 221,
    maxAttack: 270,
    speed: 821,
    defense: 701,
    dropTable: DropTable.Level_46,
    stones: [17, 21]
	},
  [Monster.Demon_Eye_Demon]: {
    avatar: Avatar.Dreameater_Blossom,
		level: 52,
    exp: 394,
    hp: 666,
    maxHp: 666,
    chakra: 666,
    maxChakra: 666,
    minAttack: 226,
    maxAttack: 276,
    speed: 820,
    defense: 715,
    dropTable: DropTable.Level_46,
    stones: [17, 21]
	},
  [Monster.Skeleton_Swordsman]: {
    avatar: Avatar.Skeleton_Soldier,
		level: 53,
    exp: 407,
    hp: 665,
    maxHp: 665,
    chakra: 665,
    maxChakra: 665,
    minAttack: 231,
    maxAttack: 282,
    speed: 820,
    defense: 720,
    dropTable: DropTable.Level_46,
    stones: [17, 21]
	},
  [Monster.Roar_Demon_Ape]: {
    avatar: Avatar.Roaring_Demon_Ape,
		level: 54,
    exp: 420,
    hp: 663,
    maxHp: 663,
    chakra: 663,
    maxChakra: 663,
    minAttack: 234,
    maxAttack: 286,
    speed: 819,
    defense: 725,
    dropTable: DropTable.Level_46,
    stones: [17, 21]
	},
  [Monster.Resentment]: {
    avatar: Avatar.Nightowl,
		level: 55,
    exp: 434,
    hp: 1974,
    maxHp: 1974,
    chakra: 1974,
    maxChakra: 1974,
    minAttack: 289,
    maxAttack: 353,
    speed: 796,
    defense: 736,
    dropTable: DropTable.Level_46,
    stones: [17, 21]
	},
  [Monster.Degenerate_Monk]: {
    avatar: Avatar.Decadent_Monk,
		level: 56,
    exp: 448,
    hp: 733,
    maxHp: 733,
    chakra: 733,
    maxChakra: 733,
    minAttack: 247,
    maxAttack: 302,
    speed: 813,
    defense: 747,
    dropTable: DropTable.Level_51,
    stones: [17, 21]
	},
  [Monster.Swamp_Poison_Frog]: {
    avatar: Avatar.Marsh_Frog,
		level: 57,
    exp: 462,
    hp: 728,
    maxHp: 728,
    chakra: 728,
    maxChakra: 728,
    minAttack: 252,
    maxAttack: 309,
    speed: 813,
    defense: 763,
    dropTable: DropTable.Level_56,
    stones: [18, 22]
	},
  [Monster.Gangster]: {
    avatar: Avatar.Treant,
		level: 58,
    exp: 476,
    hp: 725,
    maxHp: 725,
    chakra: 725,
    maxChakra: 725,
    minAttack: 257,
    maxAttack: 314,
    speed: 812,
    defense: 771,
    dropTable: DropTable.Level_56,
    stones: [18, 22]
	},
  [Monster.Gloomy_Tree]: {
    avatar: Avatar.Abyssal_Treant,
		level: 59,
    exp: 491,
    hp: 725,
    maxHp: 725,
    chakra: 725,
    maxChakra: 725,
    minAttack: 261,
    maxAttack: 319,
    speed: 812,
    defense: 774,
    dropTable: DropTable.Level_56,
    stones: [18, 22]
	},
  [Monster.The_Righteous_Thief]: {
    avatar: Avatar.Warfrenzy_Demon,
		level: 60,
    exp: 506,
    hp: 2162,
    maxHp: 2162,
    chakra: 2162,
    maxChakra: 2162,
    minAttack: 320,
    maxAttack: 392,
    speed: 789,
    defense: 778,
    dropTable: DropTable.Level_56,
    stones: [18, 22]
	},
  [Monster.Poisonous_Marsh_Knap]: {
    avatar: Avatar.Noxious_Kappa,
		level: 61,
    exp: 521,
    hp: 799,
    maxHp: 799,
    chakra: 799,
    maxChakra: 799,
    minAttack: 274,
    maxAttack: 335,
    speed: 804,
    defense: 793,
    dropTable: DropTable.Level_56,
    stones: [18, 22]
	},
  [Monster.Bloodthirsty_Sunflower]: {
    avatar: Avatar.Bloodbloom,
		level: 62,
    exp: 536,
    hp: 794,
    maxHp: 794,
    chakra: 794,
    maxChakra: 794,
    minAttack: 280,
    maxAttack: 342,
    speed: 804,
    defense: 808,
    dropTable: DropTable.Level_61,
    stones: [18, 22]
	},
  [Monster.Drowning]: {
    avatar: Avatar.Bereaver,
		level: 63,
    exp: 552,
    hp: 793,
    maxHp: 793,
    chakra: 793,
    maxChakra: 793,
    minAttack: 285,
    maxAttack: 348,
    speed: 804,
    defense: 813,
    dropTable: DropTable.Level_61,
    stones: [18, 22]
	},
  [Monster.Desert_Vulture]: {
    avatar: Avatar.Blackhawk,
		level: 64,
    exp: 568,
    hp: 792,
    maxHp: 792,
    chakra: 792,
    maxChakra: 792,
    minAttack: 288,
    maxAttack: 353,
    speed: 803,
    defense: 818,
    dropTable: DropTable.Level_61,
    stones: [18, 23]
	},
  [Monster.Fog_Monster]: {
    avatar: Avatar.Venomfog_Demon,
		level: 65,
    exp: 584,
    hp: 2358,
    maxHp: 2358,
    chakra: 2358,
    maxChakra: 2358,
    minAttack: 357,
    maxAttack: 437,
    speed: 778,
    defense: 830,
    dropTable: DropTable.Level_61,
    stones: [19, 23]
	},
  [Monster.Fraud]: {
    avatar: Avatar.Cunning_Granny,
		level: 66,
    exp: 600,
    hp: 866,
    maxHp: 866,
    chakra: 866,
    maxChakra: 866,
    minAttack: 303,
    maxAttack: 370,
    speed: 795,
    defense: 842,
    dropTable: DropTable.Level_61,
    stones: [19, 23]
	},
  [Monster.Wild_Pterosaur]: {
    avatar: Avatar.Windbore_Dragon,
		level: 67,
    exp: 617,
    hp: 861,
    maxHp: 861,
    chakra: 861,
    maxChakra: 861,
    minAttack: 309,
    maxAttack: 377,
    speed: 794,
    defense: 858,
    dropTable: DropTable.Level_66,
    stones: [19, 23]
	},
  [Monster.Barren_Swordsman]: {
    avatar: Avatar.Deer_Swordsman,
		level: 68,
    exp: 634,
    hp: 858,
    maxHp: 858,
    chakra: 858,
    maxChakra: 858,
    minAttack: 313,
    maxAttack: 383,
    speed: 794,
    defense: 866,
    dropTable: DropTable.Level_66,
    stones: [19, 23]
	},
  [Monster.Earth_Pterosaur]: {
    avatar: Avatar.Treant,
		level: 69,
    exp: 651,
    hp: 858,
    maxHp: 858,
    chakra: 858,
    maxChakra: 858,
    minAttack: 318,
    maxAttack: 389,
    speed: 793,
    defense: 869,
    dropTable: DropTable.Level_66,
    stones: [19, 23]
	},
  [Monster.Jin_Mang_Monster]: {
    avatar: Avatar.Soulblade_Demon,
		level: 70,
    exp: 668,
    hp: 2560,
    maxHp: 2560,
    chakra: 2560,
    maxChakra: 2560,
    minAttack: 392,
    maxAttack: 479,
    speed: 769,
    defense: 872,
    dropTable: DropTable.Level_66,
    stones: [19, 23]
	},
  [Monster.Whirlwind]: {
    avatar: Avatar.Treant,
		level: 71,
    exp: 686,
    hp: 940,
    maxHp: 940,
    chakra: 940,
    maxChakra: 940,
    minAttack: 332,
    maxAttack: 406,
    speed: 786,
    defense: 887,
    dropTable: DropTable.Level_66,
    stones: [19, 24]
	},
  [Monster.Ice_Pterosaur]: {
    avatar: Avatar.Treant,
		level: 72,
    exp: 704,
    hp: 935,
    maxHp: 935,
    chakra: 935,
    maxChakra: 935,
    minAttack: 338,
    maxAttack: 414,
    speed: 786,
    defense: 902,
    dropTable: DropTable.Level_71,
    stones: [19, 24]
	},
  [Monster.Barbarians]: {
    avatar: Avatar.Treant,
		level: 73,
    exp: 722,
    hp: 933,
    maxHp: 933,
    chakra: 933,
    maxChakra: 933,
    minAttack: 344,
    maxAttack: 420,
    speed: 785,
    defense: 908,
    dropTable: DropTable.Level_71,
    stones: [19, 24]
	},
  [Monster.Lei_Pterosaur]: {
    avatar: Avatar.Treant,
		level: 74,
    exp: 740,
    hp: 932,
    maxHp: 932,
    chakra: 932,
    maxChakra: 932,
    minAttack: 348,
    maxAttack: 425,
    speed: 785,
    defense: 913,
    dropTable: DropTable.Level_71,
    stones: [20, 24]
	},
  [Monster.Toad_Dragon]: {
    avatar: Avatar.Treant,
		level: 75,
    exp: 759,
    hp: 2777,
    maxHp: 2777,
    chakra: 2777,
    maxChakra: 2777,
    minAttack: 433,
    maxAttack: 529,
    speed: 758,
    defense: 924,
    dropTable: DropTable.Level_71,
    stones: [20, 24]
	},
  [Monster.Uesugi_Saski]: {
    avatar: Avatar.Treant,
		level: 76,
    exp: 778,
    hp: 1006,
    maxHp: 1006,
    chakra: 1006,
    maxChakra: 1006,
    minAttack: 364,
    maxAttack: 445,
    speed: 778,
    defense: 935,
    dropTable: DropTable.Level_71,
    stones: [20, 24]
	},
  [Monster.Greedy_Bandit]: {
    avatar: Avatar.Treant,
		level: 78,
    exp: 817,
    hp: 996,
    maxHp: 996,
    chakra: 996,
    maxChakra: 996,
    minAttack: 376,
    maxAttack: 459,
    speed: 777,
    defense: 959,
    dropTable: DropTable.Level_76,
    stones: [20, 24]
	},
  [Monster.Double_Headed_Dragon]: {
    avatar: Avatar.Treant,
		level: 80,
    exp: 857,
    hp: 2975,
    maxHp: 2975,
    chakra: 2975,
    maxChakra: 2975,
    minAttack: 471,
    maxAttack: 576,
    speed: 751,
    defense: 965,
    dropTable: DropTable.Level_76,
    stones: [20, 25]
	},
  [Monster.Mowing]: {
    avatar: Avatar.Treant,
		level: 81,
    exp: 877,
    hp: 1056,
    maxHp: 1056,
    chakra: 1056,
    maxChakra: 1056,
    minAttack: 376,
    maxAttack: 459,
    speed: 777,
    defense: 959,
    dropTable: DropTable.Level_76,
    stones: [20, 24]
	},
  [Monster.Coast_2]: {
    avatar: Avatar.Treant,
		level: 83,
    exp: 919,
    hp: 1116,
    maxHp: 1116,
    chakra: 1116,
    maxChakra: 1116,
    minAttack: 382,
    maxAttack: 465,
    speed: 768,
    defense: 970,
    dropTable: DropTable.Level_81,
    stones: [20, 24]
	},
  [Monster.Pyramid]: {
    avatar: Avatar.Treant,
		level: 85,
    exp: 961,
    hp: 1194,
    maxHp: 1194,
    chakra: 1194,
    maxChakra: 1194,
    minAttack: 389,
    maxAttack: 478,
    speed: 760,
    defense: 965,
    dropTable: DropTable.Level_81,
    stones: [20, 24]
	},
  [Monster.Giant_Cricket]: {
    avatar: Avatar.Treant,
		level: 86,
    exp: 983,
    hp: 1188,
    maxHp: 1188,
    chakra: 1188,
    maxChakra: 1188,
    minAttack: 400,
    maxAttack: 480,
    speed: 766,
    defense: 978,
    dropTable: DropTable.Level_81,
    stones: [20, 24]
	},
  [Monster.Kobayam]: {
    avatar: Avatar.Treant,
		level: 87,
    exp: 1005,
    hp: 1155,
    maxHp: 1155,
    chakra: 955,
    maxChakra: 955,
    minAttack: 396,
    maxAttack: 485,
    speed: 765,
    defense: 972,
    dropTable: DropTable.Level_86,
    stones: [20, 24]
	},
  [Monster.Mechanical_Cattle]: {
    avatar: Avatar.Treant,
		level: 87,
    exp: 1005,
    hp: 1221,
    maxHp: 1221,
    chakra: 1021,
    maxChakra: 1021,
    minAttack: 403,
    maxAttack: 496,
    speed: 758,
    defense: 988,
    dropTable: DropTable.Level_86,
    stones: [20, 24]
	},
  [Monster.Giant_Lizard]: {
    avatar: Avatar.Treant,
		level: 88,
    exp: 1027,
    hp: 1254,
    maxHp: 1254,
    chakra: 1054,
    maxChakra: 1054,
    minAttack: 410,
    maxAttack: 405,
    speed: 762,
    defense: 979,
    dropTable: DropTable.Level_86,
    stones: [20, 24]
	},
  [Monster.Giant_Bird]: {
    avatar: Avatar.Treant,
		level: 89,
    exp: 1050,
    hp: 1280,
    maxHp: 1280,
    chakra: 1080,
    maxChakra: 1080,
    minAttack: 417,
    maxAttack: 520,
    speed: 755,
    defense: 990,
    dropTable: DropTable.Level_86,
    stones: [20, 24]
	},
  [Monster.Jiutou_Dragon]: {
    avatar: Avatar.Treant,
		level: 89,
    exp: 1100,
    hp: 3200,
    maxHp: 3200,
    chakra: 2975,
    maxChakra: 2975,
    minAttack: 479,
    maxAttack: 585,
    speed: 751,
    defense: 972,
    dropTable: DropTable.Level_86,
    stones: [20, 25]
	},
  [Monster.Cerberus]: {
    avatar: Avatar.Treant,
		level: 90,
    exp: 1200,
    hp: 3400,
    maxHp: 3400,
    chakra: 2975,
    maxChakra: 2975,
    minAttack: 485,
    maxAttack: 592,
    speed: 751,
    defense: 980,
    dropTable: DropTable.Level_86,
    stones: [20, 25]
	},
}

module.exports = {
  Monster,
  Monsters,
  createMonsterStats
}