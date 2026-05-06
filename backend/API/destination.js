export const destinations = [
  { id: 1, lieu: "Village de Montbois", distance_lieue: 4, distance_index: 1 },
  { id: 2, lieu: "Marche de Saint-Roch", distance_lieue: 7, distance_index: 1 },
  { id: 3, lieu: "Pont des Corbeaux", distance_lieue: 9, distance_index: 1 },
  { id: 4, lieu: "Abbaye d'Aubeciel", distance_lieue: 12, distance_index: 2 },
  { id: 5, lieu: "Mine de Fer-Gris", distance_lieue: 15, distance_index: 2 },
  { id: 6, lieu: "Fortin des Veilleurs", distance_lieue: 18, distance_index: 2 },
  { id: 7, lieu: "Col du Loup Blanc", distance_lieue: 21, distance_index: 2 },
  { id: 8, lieu: "Port de Rivefroide", distance_lieue: 24, distance_index: 3 },
  { id: 9, lieu: "Citadelle de Brumegarde", distance_lieue: 27, distance_index: 3 },
  { id: 10, lieu: "Bois des Murmures", distance_lieue: 30, distance_index: 3 },
  { id: 11, lieu: "Temple de l'Ecu Solaire", distance_lieue: 34, distance_index: 3 },
  { id: 12, lieu: "Dunes de Cendres", distance_lieue: 38, distance_index: 4 },
  { id: 13, lieu: "Tour du Guetteur", distance_lieue: 42, distance_index: 4 },
  { id: 14, lieu: "Lac de Verre", distance_lieue: 46, distance_index: 4 },
  { id: 15, lieu: "Camp de la Garde Pourpre", distance_lieue: 50, distance_index: 4 },
  { id: 16, lieu: "Ruines de Val-Serein", distance_lieue: 54, distance_index: 5 },
  { id: 17, lieu: "Plateau d'Orage", distance_lieue: 58, distance_index: 5 },
  { id: 18, lieu: "Crypte de l'Ancien Roi", distance_lieue: 63, distance_index: 5 },
  { id: 19, lieu: "Frontiere de Noirvallon", distance_lieue: 69, distance_index: 5 },
  { id: 20, lieu: "Cap des Mille Fanions", distance_lieue: 75, distance_index: 5 },
];

export function getDestinations() {
  return destinations;
}

export function getDestinationById(id) {
  return destinations.find((destination) => destination.id === Number(id)) ?? null;
}

export function getDestinationsByDistanceIndex(distanceIndex) {
  return destinations.filter(
    (destination) => destination.distance_index === Number(distanceIndex),
  );
}
