import { useState } from "react";
import "./Destination.css";
type Lieu = {
	id: number;
	name: string;
};
function Destination() {
	const [destination, setDestination] = useState<Lieu[]>([]);
	console.log(setDestination);
	return (
		<div className="destination">
			<div className="vielle-map">
				<div className="suggestion-lieu">
					<hr className="hr-under-h2" />
					<h2 className="h2-suggestion-lieu">Planifiez votre course</h2>
					{/* <hr className="hr-beyond-h2" /> */}
					<div className="selection-destination">
						<select
							className="depart-destination"
							name="depart-destination"
							id="depart-destination"
							defaultValue=""
						>
							<option value="">Sélectionnez une destination</option>
							{destination.map((lieu) => (
								<option key={lieu.id} value={lieu.name}>
									{lieu.name}
								</option>
							))}
						</select>
						<select
							className="arrivee-destination"
							name="arrivee-destination"
							id="arrivee-destination"
							defaultValue=""
						>
							<option value="">Sélectionnez une destination</option>
							{destination.map((lieu) => (
								<option key={lieu.id} value={lieu.name}>
									{lieu.name}
								</option>
							))}
						</select>
					</div>
					{/* <hr className="separation-selection-suggestion" /> */}
					{/* {destination.map((lieu) => (
						<div key={lieu.id} className="suggestion-lieu-item">
							{lieu.name}
						</div>
					))} */}
					<div className="suggestion-lieu-item"> destination</div>
					<div className="suggestion-lieu-item"> destination</div>
					<div className="suggestion-lieu-item"> destination</div>
					<div className="suggestion-lieu-item"> destination</div>
					<div className="suggestion-lieu-item"> destination</div>
					<div className="suggestion-lieu-item"> destination</div>
				</div>
			</div>
		</div>
	);
}
export default Destination;
