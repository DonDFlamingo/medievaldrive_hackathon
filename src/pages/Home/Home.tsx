import "./Home.css";
import Card2 from "../../assets/Card-2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import

type CityType = {
	id: number;
	lieu: string;
	distance_index: number;
};

function Home() {
	// const API_BASE = 'http://localhost:3001'
	const [departureCities, setDepartureCities] = useState<CityType[]>([]);
	const [arrivedCities, setArrivedCities] = useState<CityType[]>([]);
	const navigate = useNavigate();
	const handleSelectDeparture = (lieuName: string, distance_index: number) => {
		navigate("/destination", {
			state: {
				departureCities: lieuName,
				distance_index,
			},
		});
	};

	const handleSelectArrived = (lieuName: string, distance_index: number) => {
		navigate("/destination", {
			state: {
				arrivedCities: lieuName,
				distance_index,
			},
		});
	};

	useEffect(() => {
		fetch("http://localhost:3001/api/destinations")
			.then((res) => res.json())
			.then((data: CityType[]) => {
				setDepartureCities(data);
				setArrivedCities(data);
			});
	}, []);

	//      const filteredCities = cities.filter((city) => {
	//     return city.name;
	//   });

	return (
		<>
			<div className="banniere-image">
				<div className="banniere-container">
					<h1 className="title-home">
						Voyager à travers les royaumes avec Distinction
					</h1>
					<p className="banniere-para">
						Découvrez une excellence de transport sans précedent. Des carrosses
						royaux{" "}
					</p>
					<p className="banniere-p">
						aux coursiers rapides, nous orchestrons chaque étape de votre
						épopée.
					</p>
					<div className="search-destination">
						<div className="field">
							<label htmlFor="point_de_depart" className="label">
								POINT DE DEPART
							</label>
							<select
								id="point_de_depart"
								className="home-input"
								value=""
								onChange={(e) => {
									const [lieuName, distance_index] = e.target.value.split("|");
									handleSelectDeparture(lieuName, Number(distance_index));
								}}
							>
								<option value="">Choisir...</option>
								{departureCities.map((city) => (
									<option
										key={city.id}
										value={`${city.lieu}|${city.distance_index}`}
									>
										{city.lieu}
									</option>
								))}
							</select>
						</div>
						<div className="field">
							<label htmlFor="destination" className="label">
								DESTINATION
							</label>
							<select
								id="destination"
								className="home-input"
								value=""
								onChange={(e) => {
									const [lieuName, distance_index] = e.target.value.split("|");
									handleSelectDeparture(lieuName, Number(distance_index));
								}}
							>
								<option value="">Choisir...</option>
								{arrivedCities.map((city) => (
									<option
										key={city.id}
										value={`${city.lieu}|${city.distance_index}`}
									>
										{city.lieu}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
			</div>
			<div className="Cards-container">
				<div className="card1">
					<div className="card1-text">
						<h2 className="card2-text-title">Royal Carriage</h2>
						<p>
							L'apogée du confort.Voyagez dans des habitacles de soie et
							d'ébène,protégés par notre garde d'élite.
						</p>
					</div>
				</div>
				<div className="card2">
					<div className="card2-text">
						<h2 className="card2-text-title">Knight Express</h2>
						<p>
							Pour les missives et les voyageurs pressés. Nos montures les plus
							rapides, entrainées pour l'endurance absolue à travers les cols de
							montagnes.
						</p>
					</div>
					<img src={Card2} alt="Card1" className="home-image" />
				</div>
				<div className="card3">
					<h2 className="card2-text-title">Secure Caravane</h2>
					<p className="card3-para">
						Le stransport sécurise de vos biens les plus précieux.
						<br />
						Escortes armées et scellés magiques garantis.
					</p>
					<ul className="card3-ul">
						<li>Traçage par messager ailé</li>
						<li>Assuranse royale sur le fret</li>
						<li>Entrepot fortifiés</li>
					</ul>
				</div>
				<div className="card4">
					<div className="home-image" />
					<div className="card4-text">
						<h3 className="card2-text-title">Réseau Mondial</h3>
						<h4>
							14 Royaumes <br /> 120 Relais
						</h4>
					</div>
				</div>
			</div>
			<div>
				<h2 className="title-99">99</h2>
				<p className="para-99">
					"La Destination n'est que la conclusion D'un récit. Chez Gralted
					Transit,nous nous assurons que chaque chapitre du voyage soit Digne
					D'une légende."
				</p>
				<p className="home-99">-LE GRAND INTENDANT DES TRANSPORTS</p>
			</div>
		</>
	);
}

export default Home;
