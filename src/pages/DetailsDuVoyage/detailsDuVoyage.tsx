import {
	ArrowRightIcon,
	CardStackIcon,
	LapTimerIcon,
	RocketIcon,
} from "@radix-ui/react-icons";
import "./detailsDuVoyage.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

type maps = {
	id: number;
	image: string;
	points_interet?: string;
};
type Vehicle = {
	id: number;
	nom: string;
	prix_ecu: number;
	image: string;
	description: string;
	nombre_places: number;
};
type CityType = {
	id: number;
	lieu: string;
	arrivedCities: string;
	departureCities: string;
	departureDistance: number;
	arrivedDistance: number;
};

type LocationState = {
	vehicule: Vehicle;
	voyage: CityType;
};

function DetailsDuVoyage() {
	const [maps, setMaps] = useState<maps[]>([]);
	const location = useLocation();
	const state = location.state as LocationState;
	const [vehicule, setVehicule] = useState<LocationState[]>([]);
	const i = Math.floor(Math.random() * 4);
	console.log(vehicule);
	useEffect(() => {
		Promise.all([
			fetch(`${API_BASE_URL}/api/maps`).then((r) => r.json()),
			fetch(`${API_BASE_URL}/api/vehicules`).then((r) => r.json()),
		]).then(([mapsData, vehiculesData]) => {
			setMaps(mapsData);
			setVehicule(vehiculesData);
		});
	}, []);
	return (
		<div className="pageVoyageFull">
			<div className="pageDetailsDuVoyage">
				<div className="pageParchemin">
					<div className="chepaPourLeMoment">
						<div className="hautDePagesVoyage">
							<h1 className="titrePageVoyage">Détails de votre périple</h1>
							<div className="departArriverPageVoyage">
								<div className="départDestinationPageVoyage">
									<h2 className="h2Voyage">Point de départ</h2> <br />
									{state.voyage.departureCities}
								</div>
								<ArrowRightIcon className="iconPageVoyage" />
								<div>
									<h2 className="h2Voyage">Destination</h2> <br />{" "}
									{state.voyage.arrivedCities}
								</div>
							</div>
						</div>

						<img
							src={`${API_BASE_URL}${maps[i]?.image}`}
							className="cartePageVoyage"
							alt="img"
						/>
					</div>
					<div className="millieuxPages">
						<div className="cardPageVoyage">
							<div className="statistiqueDeRoute">
								<h2 className="h2Voyage">Statistiques de Route</h2>
								<div className="distancEtDureeVoyage">
									<ul className="ulDistanceEtVoyage">
										<li className="testEspace">
											<RocketIcon className="iconPageVoyage" /> Distance{" "}
										</li>
										<li>
											{(state.voyage.departureDistance +
												state.voyage.arrivedDistance) *
												6}
											Lieues
										</li>
									</ul>
									<ul className="ulDistanceEtVoyage">
										<li className="testEspace">
											<LapTimerIcon className="iconPageVoyage" /> Durée estimée
										</li>
										<li>
											{(state.voyage.departureDistance +
												state.voyage.arrivedDistance) /
												2}{" "}
											Soleils
										</li>
									</ul>
								</div>
								<div className="prixStatistiqueVoyage">
									<ul className="ulDistanceEtVoyage">
										<li className="testEspace">
											<CardStackIcon className="iconPageVoyage" /> Prix total
										</li>
										<li className="prixTotalVoyage">
											{state.vehicule.prix_ecu *
												(state.voyage.departureDistance +
													state.voyage.arrivedDistance)}{" "}
											ECUS
										</li>
									</ul>
								</div>
							</div>
							<div className="transportSelectionerPageVoyage">
								<h2 className="h2Voyage">Transport selectionné</h2>
								<h3>{state.vehicule.nom}</h3>
								<img
									className="imageVehiculePageVoyage"
									src={`${API_BASE_URL}${state.vehicule.image}`}
									alt={state.vehicule.nom}
								/>
								<p>{state.vehicule.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsDuVoyage;
