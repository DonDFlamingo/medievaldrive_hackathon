import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Destination.css";
import sceau from "../../assets/sceau-medieval.png";

type CityType = {
	id: number;
	lieu: string;
	arrivedCities: string;
	departureCities: string;
};

function Destination() {
	const [destination, setDestination] = useState<CityType[]>([]);

	const { state } = useLocation() as { state: CityType };

	useEffect(() => {
		fetch("http://localhost:3001/api/destinations")
			.then((res) => res.json())
			.then((data: CityType[]) => {
				setDestination(data);
			});
	}, []);

	console.log(state);

	console.log(setDestination);
	return (
		<div className="destination">
			<div className="vielle-map">
				<div className="suggestion-lieu">
					<hr className="hr-under-h2" />
					<img className="sceau-medieval" src={sceau} alt="Sceau" />
					<h2 className="h2-suggestion-lieu">Planifiez votre course</h2>
					{/* <hr className="hr-beyond-h2" /> */}
					<div className="selection-destination">
						<select
							className="depart-destination"
							name="depart-destination"
							id="depart-destination"
							defaultValue=""
						>
							<option value={state.lieu}>
								{state.departureCities || "choisir..."}
							</option>
							{destination.map((lieu) => (
								<option key={lieu.id} value={lieu.lieu}>
									{lieu.lieu}
								</option>
							))}
						</select>
						<select
							className="arrivee-destination"
							name="arrivee-destination"
							id="arrivee-destination"
							defaultValue=""
						>
							<option value="">{state.arrivedCities || "choisir..."}</option>
							{destination.map((lieu) => (
								<option key={lieu.id} value={lieu.lieu}>
									{lieu.lieu}
								</option>
							))}
						</select>
					</div>
					<div className="scroll-suggestion-lieu">
						{destination.map((lieu) => (
							<div key={lieu.id} className="suggestion-lieu-item">
								{lieu.lieu}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Destination;
