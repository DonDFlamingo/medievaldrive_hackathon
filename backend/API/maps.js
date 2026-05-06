export const maps = [
	{
		id: 1,
		image: "/images/maps/carte.png",
	},
	{
		id: 2,
		image: "/images/maps/carte2.png",
	},
	{
		id: 3,
		image: "/images/maps/carte3.png",
	},
	{
		id: 4,
		image: "/images/maps/carte4.png",
	},
];

export function getMaps() {
	return maps;
}

export function getMapById(id) {
	return maps.find((map) => map.id === Number(id)) ?? null;
}
