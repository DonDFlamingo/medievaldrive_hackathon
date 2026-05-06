export const vehicules = [
  {
    id: 1,
    image: "/images/vehicules/cheval%20.png",
    nom: "Cheval",
    prix_ecu: 90,
    description: "Peu equipe, selle basique et sacoches legeres.",
    nombre_places: 1,
    variantes: [
      {
        niveau_equipement: 1,
        image: "/images/vehicules/cheval%20.png",
        prix_ecu: 90,
        description: "Peu equipe, selle basique et sacoches legeres.",
      },
      {
        niveau_equipement: 2,
        image: "/images/vehicules/cheval2.png",
        prix_ecu: 140,
        description: "Bien equipe, selle renforcee et meilleur confort de route.",
      },
      {
        niveau_equipement: 3,
        image: "/images/vehicules/cheval3.png",
        prix_ecu: 210,
        description: "Tres bien equipe, harnais premium et endurance longue distance.",
      },
    ],
  },
  {
    id: 2,
    image: "/images/vehicules/caleche.png",
    nom: "Caleche",
    prix_ecu: 180,
    description: "Peu equipee, caisse simple et protection minimale.",
    nombre_places: 3,
    variantes: [
      {
        niveau_equipement: 1,
        image: "/images/vehicules/caleche.png",
        prix_ecu: 180,
        description: "Peu equipee, caisse simple et protection minimale.",
      },
      {
        niveau_equipement: 2,
        image: "/images/vehicules/galeche2.png",
        prix_ecu: 260,
        description: "Bien equipee, assises ameliorees et structure plus stable.",
      },
      {
        niveau_equipement: 3,
        image: "/images/vehicules/galeche3.png",
        prix_ecu: 360,
        description: "Tres bien equipee, renforts complets et confort superieur.",
      },
    ],
  },
  {
    id: 3,
    image: "/images/vehicules/carosse.png",
    nom: "Carrosse",
    prix_ecu: 320,
    description: "Peu equipe, amenagement interieur sobre.",
    nombre_places: 5,
    variantes: [
      {
        niveau_equipement: 1,
        image: "/images/vehicules/carosse.png",
        prix_ecu: 320,
        description: "Peu equipe, amenagement interieur sobre.",
      },
      {
        niveau_equipement: 2,
        image: "/images/vehicules/carosse2.png",
        prix_ecu: 460,
        description: "Bien equipe, interieur confortable et meilleure isolation.",
      },
      {
        niveau_equipement: 3,
        image: "/images/vehicules/carosse3.png",
        prix_ecu: 620,
        description: "Tres bien equipe, finition noble et confort maximal.",
      },
    ],
  },
];

export function getVehicules() {
  return vehicules;
}

export function getVehiculeById(id) {
  return vehicules.find((vehicule) => vehicule.id === Number(id)) ?? null;
}
