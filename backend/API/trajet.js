import { getDestinationById } from "./destination.js";
import { getVehiculeById } from "./vehicules.js";

const TARIF_PAR_LIEUE_PAR_NIVEAU = {
	1: 8,
	2: 12,
	3: 16,
};

export function calculateTripCost({
	departId,
	retourId,
	vehiculeId,
	niveauEquipement = 1,
}) {
	const depart = getDestinationById(departId);
	const retour = getDestinationById(retourId);
	const vehicule = getVehiculeById(vehiculeId);

	if (!depart || !retour || !vehicule) {
		return null;
	}

	const variante =
		vehicule.variantes.find(
			(item) => item.niveau_equipement === Number(niveauEquipement),
		) ?? vehicule.variantes[0];

	const distanceLieue = Math.abs(
		Number(retour.distance_lieue) - Number(depart.distance_lieue),
	);
	const tarifLieueEcu =
		TARIF_PAR_LIEUE_PAR_NIVEAU[variante.niveau_equipement] ??
		TARIF_PAR_LIEUE_PAR_NIVEAU[1];
	const coutTrajetEcu = distanceLieue * tarifLieueEcu;
	const coutEquipementEcu = Number(variante.prix_ecu);
	const coutTotalEcu = coutTrajetEcu + coutEquipementEcu;

	return {
		depart,
		retour,
		vehicule: {
			id: vehicule.id,
			nom: vehicule.nom,
			niveau_equipement: variante.niveau_equipement,
			image: variante.image,
		},
		distance_lieue: distanceLieue,
		tarif_lieue_ecu: tarifLieueEcu,
		cout_trajet_ecu: coutTrajetEcu,
		cout_equipement_ecu: coutEquipementEcu,
		cout_total_ecu: coutTotalEcu,
	};
}
