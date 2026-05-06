import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Vehicules.css";

import parchemin from "../assets/parchemin.png";
import sceau from "../assets/sceau-medieval.png";
import map from "../../backend/images/maps/carte3.png";

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
};

function Vehicules() {
  const [vehicules, setVehicules] = useState<Vehicle[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<number | null>(null);

  const { state } = useLocation() as { state: CityType };

  console.log(state);

  useEffect(() => {
    fetch("http://localhost:3001/api/vehicules")
      .then((response) => response.json())
      .then((data: Vehicle[]) => {
        setVehicules(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="vehicles-page">
      <section className="vehicles-hero">
        <div className="vehicles-hero-left">
          <span className="vehicles-subtitle">
            NOS VÉHICULES
          </span>

          <h1 className="vehicles-title">
            CHOISISSEZ <br />
            VOTRE VÉHICULE
          </h1>

          <div className="vehicles-divider"></div>

          <p className="vehicles-description">
            Des montures rapides aux carrosses somptueux,
            trouvez le transport parfait pour votre voyage
            dans le royaume.
          </p>
        </div>

        <div className="vehicles-hero-map">
          <img
            src={map}
            alt="Carte médiévale"
            className="vehicles-map-image"
          />
        </div>
      </section>

      <section
        className="vehicles-parchemin"
        style={{
          backgroundImage: `url(${parchemin})`,
        }}
      >
        <img
          src={sceau}
          className="vehicles-sceau"
          alt="Sceau médiéval"
        />
        
                <div className="vehicles-grid">
          {vehicules.map((vehicule) => (
            <Link
              to="/detailsDuVoyage"
              key={vehicule.id}
              className={`vehicle-card ${
                selectedVehicle === vehicule.id
                  ? "vehicle-selected"
                  : ""
              }`}
              onClick={() => setSelectedVehicle(vehicule.id)}
            >
              <img
                className="vehicle-image"
                src={`http://localhost:3001${vehicule.image}`}
                alt={vehicule.nom}
              />

              <div className="vehicle-content">
                <h3 className="vehicle-name">
                  {vehicule.nom}
                </h3>

                <p className="vehicle-description">
                  {vehicule.description}
                </p>

                <div className="vehicle-footer">
                  <span className="vehicle-places">
                    {vehicule.nombre_places} passager
                    {vehicule.nombre_places > 1 ? "s" : ""}
                  </span>

                  <span className="vehicle-price">
                    {vehicule.prix_ecu} écus
                  </span>
                </div>
              </div>

              {selectedVehicle === vehicule.id && (
                <div className="vehicle-selected-icon">
                  ✓
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="vehicles-button-container">
          <button
            type="button"
            className="vehicles-button"
          >
            CHOISISSEZ
          </button>
        </div>
      </section>
    </div>
  );
}

export default Vehicules;