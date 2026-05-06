export const vehicules = [
  {
    id: 1,
    image: "/images/vehicules/cheval%20.png",
    nom: "Brumacier",
    prix_ecu: 90,
    description: "Peu equipe, selle basique et sacoches legeres.",
    nombre_places: 1,
  },
  {
    id: 2,
    nom: "Vent-Noir",
    nombre_places: 1,
    prix_ecu: 140,
    image: "/images/vehicules/cheval2.png",
    description: "Bien equipe, selle renforcee et meilleur confort de route.",
  },
{
    id: 3,
    nom: "Foudre d’Ambre",
    nombre_places: 1,
    image: "/images/vehicules/cheval3.png",
    prix_ecu: 210,
    description: "Tres bien equipe, harnais premium et endurance longue distance.",
  },
   {
    id: 4,
    image: "/images/vehicules/caleche.png",
    nom: "L’Étoile Errante",
    prix_ecu: 180,
    description: "Peu equipee, caisse simple et protection minimale.",
    nombre_places: 3,
   },
    {
    id: 5,
    nom: "La Roue d’Or",
    image: "/images/vehicules/galeche2.png",
    prix_ecu: 260,
    description: "Bien equipee, assises ameliorees et structure plus stable.",
    nombre_places: 3,
   },
   {
    id: 6,
    nom: "Le Corbeau Noir",
    image: "/images/vehicules/galeche3.png",
    prix_ecu: 360,
    description: "Tres bien equipee, renforts complets et confort superieur.",
    nombre_places: 3,
   },
   {
   id: 7,
    image: "/images/vehicules/carosse.png",
    nom: "La Traverse Royale",
    prix_ecu: 320,
    description: "Peu equipe, amenagement interieur sobre.",
    nombre_places: 5,
   },
    {
   id: 8,
    nom: "Le Souffle du Nord",
    image: "/images/vehicules/carosse2.png",
    prix_ecu: 460,
    description: "Bien equipe, interieur confortable et meilleure isolation.",
    nombre_places: 5,
   }
,
  {
   id: 9,
    nom: "La Voie des Marchands",
    image: "/images/vehicules/carosse3.png",
    prix_ecu: 620,
    description: "Tres bien equipe, finition noble et confort maximal.",
    nombre_places: 5,
  },
];

export function getVehicules() {
  return vehicules;
}

export function getVehiculeById(id) {
  return vehicules.find((vehicule) => vehicule.id === Number(id)) ?? null;
}
