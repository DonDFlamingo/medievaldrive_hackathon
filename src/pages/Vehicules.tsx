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

  // const destriers = vehicles.filter(
  //   (vehicle) =>
  //     vehicle.name.toLowerCase().includes("destrier") ||
  //     vehicle.name.toLowerCase().includes("cheval")
  // );

  // const diligences = vehicles.filter(
  //   (vehicle) =>
  //     vehicle.name.toLowerCase().includes("diligence") ||
  //     vehicle.name.toLowerCase().includes("caleche") ||
  //     vehicle.name.toLowerCase().includes("calèche")
  // );

  // const carrosses = vehicles.filter((vehicle) =>
  //   vehicle.name.toLowerCase().includes("carrosse")
  // );

  return (
    <div className="vehicles-page">

      <section className="hero">

        <div className="hero-left">

          <span className="subtitle">
            NOS VÉHICULES
          </span>

          <h1>
            Choisissez <br />
            votre véhicule
          </h1>

          <p>
            Des montures rapides aux carrosses somptueux,
            trouvez le transport parfait pour votre voyage
            dans le royaume.
          </p>

        </div>

        <div className="hero-map">

          <img
            src={map}
            alt="Carte médiévale"
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

        <div className="category">


          <p className="category-description">
            Des chevaux rapides et agiles pour les voyageurs seuls.
          </p>

          <div className="vehicles-container">

            {vehicules.map((vehicule) => (

              <div
                className="vehicle-card"
                key={vehicule.id}
              >

                <img
                  className="vehicle-image"
                  src={`http://localhost:3001${vehicule.image}`}
                  alt={vehicule.nom}
                />

                <div className="vehicle-info">

                  <div>

                    <h3>
                      {vehicule.nom}
                    </h3>

                    <p>
                      {vehicule.description}
                    </p>

                    <p>
                      Nombre de places:
                      {vehicule.nombre_places}
                    </p>

                  </div>

                  <span className="price">
                    {vehicule.prix_ecu} écus
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Vehicules;