import { useEffect, useState } from "react";
import "./Vehicules.css";

import parchemin from "../assets/parchemin.png";
import sceau from "../assets/sceau-medieval.png";
import map from "../assets/vielleCarte.jpg";

type Vehicle = {
  id: number;
  nom: string;
  prix_ecu: number;
  image: string;
  description: string;
  nombre_places: number;
};

function Vehicules() {

  const [vehicules, setVehicules] = useState<Vehicle[]>([]);
  const [selectedVehicule, setSelectedVehicule] = useState<number | null>(null);

  useEffect(() => {

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

  return (

    <div className="vehicles-page">

      <section className="hero">

        <div className="hero-left">

          <span className="subtitle">
            NOS VÉHICULES
          </span>

          <h1 className="hero-title">
            Choisissez <br />
            votre véhicule
          </h1>

          <div className="hero-line"></div>

          <p className="hero-description">
            Des montures rapides aux carrosses somptueux,
            trouvez le transport parfait pour votre voyage
            dans le royaume.
          </p>

        </div>

        <div className="hero-map">

          <img
            src={map}
            alt="Carte médiévale"
            className="map-image"
          />

        </div>

      </section>

      <section
        className="parchemin-section"
        style={{
          backgroundImage: `url(${parchemin})`,
        }}
      >

        <img
          src={sceau}
          className="sceau"
          alt="Sceau médiéval"
        />

        <div className="vehicles-container">

          {vehicules.map((vehicule) => (

            <div
              className={`vehicle-card ${selectedVehicule === vehicule.id
                  ? "selected-card"
                  : ""
                }`}
              key={vehicule.id}
              onClick={() => setSelectedVehicule(vehicule.id)}
            >

              <div className="vehicle-image-container">

                <img
                  className="vehicle-image"
                  src={`http://localhost:3001${vehicule.image}`}
                  alt={vehicule.nom}
                />

                {selectedVehicule === vehicule.id && (

                  <div className="selected-check">
                    ✓
                  </div>

                )}

              </div>

              <div className="vehicle-info">

                <div className="vehicle-content">

                  <h3 className="vehicle-name">
                    {vehicule.nom}
                  </h3>

                  <p className="vehicle-description">
                    {vehicule.description}
                  </p>

                  <div className="vehicle-details">

                    <span>
                      👥 {vehicule.nombre_places} places
                    </span>

                    <span>
                      ⚔ Premium
                    </span>

                  </div>

                </div>

                <span className="price">
                  {vehicule.prix_ecu} écus
                </span>

              </div>

            </div>

          ))}

        </div>

        <div className="button-container">

          <button className="choose-button">
            CHOISISSEZ
          </button>

        </div>

      </section>

    </div>

  );
}

export default Vehicules;