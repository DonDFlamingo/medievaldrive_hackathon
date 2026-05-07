import {ArrowRightIcon, CardStackIcon, CheckCircledIcon, LapTimerIcon, RocketIcon} from "@radix-ui/react-icons"
import "./detailsDuVoyage.css"
import { useEffect,useState } from 'react'
import { useLocation } from "react-router-dom";


type maps = {
    id : number;
    image : string;
    points_interet ?: string;
}
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
    departureDistance:number;
    arrivedDistance:number;
 
};

type LocationState = {
	vehicule: Vehicle;
    voyage:CityType;
};

function DetailsDuVoyage () {
    const [maps, setMaps] = useState<maps[]>([])
    const location = useLocation();
    const state = location.state as LocationState;
	console.log(state);
 const i = Math.floor(Math.random()*4)
useEffect(() => {
  fetch('http://localhost:3001/api/maps')
    .then((r) => r.json())
    .then((data) => setMaps(data))
    
}, [])

console.log(maps)
    return (
      <div className='pageDetailsDuVoyage'>
        <div className='hautDePagesVoyage'>         
            <h1 className='titrePageVoyage'>Détails de votre périple</h1>           
                <div className='departArriverPageVoyage'>
                    <div className='départDestinationPageVoyage'>
                        <h2 className='h2Voyage'>POINT DE DEPART</h2> <br />{state.voyage.departureCities}
                    </div>
                        <ArrowRightIcon className='iconFlecheVoyage'/>
                    <div>
                        <h2 className='h2Voyage'>DESTINATION</h2> <br />{state.voyage.arrivedCities}
                    </div>
                </div>
        </div>
        <div className='millieuxPages'>
            <div className='imagePageVoyage'>
                <img src={`http://localhost:3001${maps[i]?.image}`} className='cartePageVoyage' alt="img" />
                    <div className='btnPageVoyage'>
                        <button type="button"><CheckCircledIcon/> CONFIRMER LE VOYAGE</button>
                        <button type="button">MODIFIER LE VOYAGE</button>
                    </div>
            </div>
            <div className='cardPageVoyage'>
                <div className='statistiqueDeRoute'>
                    <h2 className='h2Voyage'>Statistiques de Route</h2>
                        <ul>
                            <li><RocketIcon />{(state.voyage.departureDistance + state.voyage.arrivedDistance)*6 } Lieu </li>
                            <li><LapTimerIcon />{(state.voyage.departureDistance + state.voyage.arrivedDistance)/2 } Jours </li>
                        </ul>
                    <div>
                        <CardStackIcon/>{state.vehicule.prix_ecu * (state.voyage.departureDistance + state.voyage.arrivedDistance) } ECUS
                    </div>
                </div>
                    <div className='transportSelectionerPageVoyage'>
                    <h2 className='h2Voyage'>TRANSPORT SELECTIONNE</h2>
                    <h3>{state.vehicule.nom}</h3>
                        <p>{state.vehicule.description}</p>
                    </div>
            </div>
        </div>
      </div>
    )
}
  

export default DetailsDuVoyage;
