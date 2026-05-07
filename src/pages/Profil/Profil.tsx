import "./Profil.css";
import ProfilImg from "../../assets/profil.png";

function Profil() {
	return (
		<>
			<div className="profil-info">
				<img src={ProfilImg} alt="ProfilImg" />
				<div>
					<h1>Trần Phú du Đại Việt</h1>
					<h3>MAÎTRE DES JONQUES</h3>
					<p>
						Grand négociateur des ports de Vân Đồn et protecteur des routes
						maritimes de l'Est. Votre fortune s'édifie sur la soie, l'ivoire et
						le respect de vos pairs.
					</p>
				</div>
			</div>
			<div className="profil-section">
				<div className="profil-stats">
					<div>
						<h3>Royaumes visités</h3>
						<span>12</span>
					</div>
					<div>
						<h3>Lieues parcourues</h3>
						<span>8620</span>
					</div>
					<div>
						<h3>Titres honorifiques</h3>
						<span>3</span>
					</div>
				</div>
				<div className="profil-house">
					<h2>Informations de la Maison</h2>
					<div>
						<span>Nom de la Maison</span>
						<h3>Guilde du Lotus d'Or</h3>
					</div>
					<div>
						<span>Résidence Principale</span>
						<h3>Comptoir de Vân Đồn, Đại Việt</h3>
					</div>
					<div>
						<span>Écuries Préférées</span>
						<h3>Jonques de la Baie d'Émeraude</h3>
					</div>
				</div>
				<div className="profil-distinctions">
					<h2>Héraldique & Distinctions</h2>
					<div className="profil-distinctions-badge">
						<div>
							<span>⚖</span>
							<h3>Négociateur</h3>
						</div>
						<div>
							<span>⚓</span>
							<h3>Navigateur</h3>
						</div>
						<div>
							<span>🌾</span>
							<h3>Philanthrope</h3>
						</div>
					</div>
				</div>
				<div className="profil-history">
					<div className="profil-history-top">
						<h2>Historique des Chartes</h2>
						<button type="button">VOIR TOUT</button>
					</div>
					<div className="profil-history-item">
						<div className="profil-history-item-div-left">
							<span>22 AVRIL MCCXXIV</span>
							<h3>Convoi de Soie vers Malacca</h3>
							<p>Monture : Navire marchand • Escorte : Mercenaires des Îles</p>
						</div>
						<div className="profil-history-item-div-right">
							<h3>ACCOMPLIE</h3>
							<span>232 Ecus</span>
						</div>
					</div>
					<div className="profil-history-item">
						<div className="profil-history-item-div-left">
							<span>15 MAI MCCXXIV</span>
							<h3>Cargaison d'Épices vers Constantinople</h3>
							<p>
								Monture : Caravane de chameaux • Escorte : Gardes Varangiens
							</p>
						</div>
						<div className="profil-history-item-div-right">
							<h3>ÉCHEC (Pillage par les nomades du désert)</h3>
							<span>0 Ecus</span>
						</div>
					</div>
					<div className="profil-history-item">
						<div className="profil-history-item-div-left">
							<span>02 JUIN MCCXXIV</span>
							<h3>Reliquaire Sacré vers la Cathédrale de Reims</h3>
							<p>Monture : Chariot blindé • Escorte : Paladins de l'Ordre</p>
						</div>
						<div className="profil-history-item-div-right">
							<h3>ACCOMPLIE</h3>
							<span>580 Ecus</span>
						</div>
					</div>
				</div>
			</div>
			<div className="profil-actions">
				<button type="button" className="button1">
					Modifier le profil
				</button>
				<button type="button" className="button2">
					Télécharger mes sceaux
				</button>
			</div>
		</>
	);
}

export default Profil;
