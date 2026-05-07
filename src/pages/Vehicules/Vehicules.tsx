import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Vehicules.css";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import parchemin from "../../assets/parchemin.png";
import sceau from "../../assets/sceau-medieval.png";
// import map from "../../assets/vielleCarte.jpg";

type Vehicle = {
	id: number;
	nom: string;
	prix_ecu: number;
	image: string;
	description: string;
	nombre_places: number;
};

// type CityType = {
// 	id: number;
// 	lieu: string;
// 	arrivedCities: string;
// 	departureCities: string;
// };

function Vehicules() {
	const [vehicules, setVehicules] = useState<Vehicle[]>([]);
	const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);
	// const { state } = useLocation() as { state: CityType };
	const location = useLocation();
	const state = location.state as {
		arrivedCities: string;
		departureCities: string;
		departureDistance: number;
		arrivedDistance: number;
	};
	console.log(state);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto",
		});
		fetch("http://localhost:3001/api/vehicules")
			.then((response) => response.json())
			.then((data: Vehicle[]) => {
				console.log(data);
				setVehicules(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	//   const { state } = useLocation() as { state: CityType };

	//   console.log(state);

	//   useEffect(() => {
	//     fetch("http://localhost:3001/api/vehicules")
	//       .then((response) => response.json())
	//       .then((data: Vehicle[]) => {
	//         setVehicules(data);
	//       })
	//       .catch((error) => {
	//         console.log(error);
	//       });
	//   }, []);

	return (
		<div className="vehicule-page-master">
			<div className="vehicles-page">
				<div className="Card-vehicule">
					<section className="vehicles-parchemin">
						<img src={sceau} className="vehicles-sceau" alt="Sceau médiéval" />
						<div className="departArriverPageVehicule">
							<div className="départDestinationPageVehicule">
								<h2 className="h2Vehicule">Point de depart</h2> <br />
								<p className="text-h2-vehicule">{state.departureCities}</p>
							</div>
							<ArrowRightIcon className="iconFlecheVoyage" />
							<div>
								<h2 className="h2Vehicule">Destination</h2> <br />
								<p className="text-h2-vehicule">{state.arrivedCities}</p>
							</div>
						</div>

						<div className="vehicles-grid">
							<div className="scroll-vehicule">
								{vehicules.map((vehicule) => (
									<Link
										to="/detailsDuVoyage"
										key={vehicule.id}
										state={{ voyage: state, vehicule: vehicule }}
										className={`vehicle-card ${
											selectedVehicle === vehicule.id ? "vehicle-selected" : ""
										}`}
										onClick={() => setSelectedVehicle(vehicule.id)}
									>
										<img
											className="vehicle-image"
											src={`http://localhost:3001${vehicule.image}`}
											alt={vehicule.nom}
										/>

										<div className="vehicle-content">
											<h3 className="vehicle-name">{vehicule.nom}</h3>

											<p className="vehicle-description">
												{vehicule.description}
											</p>

											<div className="vehicle-footer">
												<span className="vehicle-places">
													{vehicule.nombre_places} passager
													{vehicule.nombre_places > 1 ? "s" : ""}
												</span>

												<span className="vehicle-price">
													{vehicule.prix_ecu *
														(state.departureDistance +
															state.arrivedDistance)}{" "}
													Ecus
												</span>
											</div>
										</div>

										{selectedVehicle === vehicule.id && (
											<div className="vehicle-selected-icon">✓</div>
										)}
									</Link>
								))}
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Vehicules;
