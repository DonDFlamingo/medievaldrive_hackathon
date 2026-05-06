export const maps = [
	{
		id: 1,
		image: "/images/maps/carte.png",
		points_interet: [
			{ id: "m1-p1", nom: "Village", x: 21, y: 68 },
			{ id: "m1-p2", nom: "Pont", x: 48, y: 55 },
			{ id: "m1-p3", nom: "Taverne", x: 73, y: 77 },
		],
	},
	{
		id: 2,
		image: "/images/maps/carte2.png",
		points_interet: [
			{ id: "m2-p1", nom: "Fortin", x: 17, y: 31 },
			{ id: "m2-p2", nom: "Mine", x: 44, y: 48 },
			{ id: "m2-p3", nom: "Camp", x: 78, y: 62 },
		],
	},
	{
		id: 3,
		image: "/images/maps/carte3.png",
		points_interet: [
			{ id: "m3-p1", nom: "Abbaye", x: 28, y: 18 },
			{ id: "m3-p2", nom: "Lac", x: 52, y: 43 },
			{ id: "m3-p3", nom: "Marchand", x: 81, y: 71 },
		],
	},
	{
		id: 4,
		image: "/images/maps/carte4.png",
		points_interet: [
			{ id: "m4-p1", nom: "Citadelle", x: 14, y: 64 },
			{ id: "m4-p2", nom: "Ruines", x: 49, y: 53 },
			{ id: "m4-p3", nom: "Temple", x: 68, y: 24 },
		],
	},
];

export function getMaps() {
	return maps;
}

export function getMapById(id) {
	return maps.find((map) => map.id === Number(id)) ?? null;
}
