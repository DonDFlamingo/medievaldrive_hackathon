import {ArrowRightIcon, CardStackIcon, CheckCircledIcon, LapTimerIcon, RocketIcon, StarIcon} from "@radix-ui/react-icons"
import "./detailsDuVoyage.css"
import { useEffect,useState } from 'react'
import Vehicules from "../Vehicules";


type maps = {
    id : number;
    image : string;
    points_interet ?: string;
}

type Vehicule = {
    id: number
    image : string;
}



function DetailsDuVoyage () {
    const [maps, setMaps] = useState<maps[]>([])
    const [vehicule, setVehicule] = useState<Vehicule[]>([])

useEffect(() => {
  Promise.all([
    fetch('http://localhost:3001/api/maps').then(r => r.json()),
    fetch('http://localhost:3001/api/vehicules').then(r => r.json()),
  ]).then(([mapsData, vehiculesData]) => {
    setMaps(mapsData)
    setVehicule(vehiculesData)
  })
}, [])
    return (
      <div className='pageDetailsDuVoyage'>
        <div className='hautDePagesVoyage'>         
            <h1 className='titrePageVoyage'>Détails de votre périple</h1>           
                <div className='departArriverPageVoyage'>
                    <div className='départDestinationPageVoyage'>
                        <h2 className='h2Voyage'>Origine</h2> <br /> Citadelle d'iron-Hold
                    </div>
                        <ArrowRightIcon className='iconPageVoyage'/>
                    <div>
                        <h2 className='h2Voyage'>DESTINATION</h2> <br /> Côte d'Azur
                    </div>
                </div>
        </div>
        <div className='millieuxPages'>
            <div className='imagePageVoyage'>
                <img src={`http://localhost:3001${maps[2]?.image}`} alt="imagePageVoyage" className='cartePageVoyage' />
                    <div className='btnPageVoyage'>
                        <button type="button" className="btnConfirmerVoyage"><CheckCircledIcon/> CONFIRMER LE VOYAGE</button>
                        <button type="button" className="btnModifierVoyage">MODIFIER LE VOYAGE</button>
                    </div>
            </div>
            <div className='cardPageVoyage'>
                <div className='statistiqueDeRoute'>
                    <h2 className='h2Voyage'>Statistiques de Route</h2>
                    <div className="distancEtDureeVoyage">
                        <ul className="ulDistanceEtVoyage">
                            <li className="testEspace"><RocketIcon className='iconPageVoyage'/> DISTANCE </li>
                            <li>142 Lieues</li>
                        </ul>
                        <ul className="ulDistanceEtVoyage">
                            <li className="testEspace"><LapTimerIcon className='iconPageVoyage'/> DUREE ESTIMEE</li>
                            <li>3 Soleils</li>
                        </ul>
                    </div>
                    <div className="prixStatistiqueVoyage">
                        
                        <ul className="ulDistanceEtVoyage">
                            <li className="testEspace"><CardStackIcon className='iconPageVoyage'/> PRIX TOTAL</li>
                            <li className="prixTotalVoyage">3.550 FLORINS D'OR</li>
                        </ul>
                    </div>
                </div>  
                    <div className='transportSelectionerPageVoyage'>
                    <h2 className='h2Voyage'>TRANSPORT SELECTIONNE</h2>
                    <img src={`http://localhost:3001${vehicule[2]?.image}`} alt="imageVehiculePageVoyage" className='imageVehiculePageVoyage' />
                        <ul>
                            <li className="noblePageVoyage">Noble Coach</li>
                            <li>Classe Souveraine</li>
                        </ul>
                        <ul className="noblePageVoyage">
                            <li className="liNobleVoyage">Sellerie en velours royal</li>
                            <li className="liNobleVoyage">Escorte de garde personnelle</li>
                        </ul>
                    </div>
            </div>
        </div>
      </div>
    )
}
  

export default DetailsDuVoyage;
