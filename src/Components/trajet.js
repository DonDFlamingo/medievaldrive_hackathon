import { getDestinationById } from "./destination.js";
import { getVehiculeById } from "./vehicules.js";

export function calculateTripCost({ departId, retourId, vehiculeId }) {
	const depart = getDestinationById(departId);
	const retour = getDestinationById(retourId);
	const vehicule = getVehiculeById(vehiculeId);

	if (!depart || !retour || !vehicule) {
		return null;
	}

	const indexDepart = Number(depart.distance_index);
	const indexRetour = Number(retour.distance_index);
	const sommeIndex = indexDepart + indexRetour;
	const prixVehiculeSelectionne = Number(vehicule.prix_ecu);
	const coutTotalEcu = sommeIndex * prixVehiculeSelectionne;

	return {
		cout_total_ecu: coutTotalEcu,
	};
}
