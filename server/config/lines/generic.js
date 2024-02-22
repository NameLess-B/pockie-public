const ItemType = require('../items/types').Item;

module.exports = {
	[ItemType.Weapon]: {
		1: [1001],
		6: [1001, 1002],
		11: [1001, 1002, 1003],
		16: [1001, 1002, 1003, 1004],
		21: [1001, 1002, 1003, 1004, 1005],
		26: [1002, 1003, 1004, 1005, 1006],
		31: [1003, 1004, 1005, 1006, 1007],
		36: [1004, 1005, 1006, 1007, 1008],
		41: [1005, 1006, 1007, 1008, 1009],
		46: [1006, 1007, 1008, 1009, 1010],
	},
	[ItemType.Gloves]: {
		8: [1002],
		18: [1002, 1003, 1004],
		28: [1002, 1003, 1004, 1005, 1006],
		38: [1004, 1005, 1006, 1007, 1008],
		48: [1006, 1007, 1008, 1009, 1010]
	},
	[ItemType.Ring]: {
		10: [1001],
		20: [1001, 1002, 1003],
		30: [1001, 1002, 1003, 1004, 1005],
		40: [1003, 1004, 1005, 1006, 1007],
		50: [1005, 1006, 1007, 1008, 1009]
	},
	[ItemType.Amulet]: {
		4: [1001],
		14: [1001, 1002, 1003],
		24: [1001, 1002, 1003, 1004, 1005],
		34: [1003, 1004, 1005, 1006, 1007],
		44: [1005, 1006, 1007, 1008, 1009]
	},
	[ItemType.Helm]: {
		3: [1001],
		13: [1001, 1002, 1003],
		23: [1001, 1002, 1003, 1004, 1005],
		33: [1003, 1004, 1005, 1006, 1007],
		43: [1005, 1006, 1007, 1008, 1009]
	},
	[ItemType.Body]: {
		2: [1001],
		7: [1001, 1002],
		12: [1001, 1002, 1003],
		17: [1001, 1002, 1003, 1004],
		22: [1001, 1002, 1003, 1004, 1005],
		27: [1002, 1003, 1004, 1005, 1006],
		32: [1003, 1004, 1005, 1006, 1007],
		37: [1004, 1005, 1006, 1007, 1008],
		42: [1005, 1006, 1007, 1008, 1009],
		47: [1006, 1007, 1008, 1009, 1010],
	},
	[ItemType.Belt]: {
		9: [1002],
		19: [1002, 1003, 1004],
		29: [1002, 1003, 1004, 1005, 1006],
		39: [1004, 1005, 1006, 1007, 1008],
		49: [1006, 1007, 1008, 1009, 1010]
	},
	[ItemType.Shoes]: {
		5: [1001],
		15: [1001, 1002, 1003],
		25: [1001, 1002, 1003, 1004, 1005],
		35: [1003, 1004, 1005, 1006, 1007],
		45: [1005, 1006, 1007, 1008, 1009]
	}
}