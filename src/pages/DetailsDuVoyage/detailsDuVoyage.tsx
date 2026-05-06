import React from 'react'
import {ArrowRightIcon, CardStackIcon, CheckCircledIcon, LapTimerIcon, RocketIcon, StarIcon} from "@radix-ui/react-icons"
import "./detailsDuVoyage.css"
import { useEffect,useState } from 'react'


type maps = {
    id : number;
    image : string;
    points_interet ?: string;
}



function DetailsDuVoyage () {
    const [maps, setMaps] = useState<maps[]>([])

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
                        <h2 className='h2Voyage'>Origine</h2> <br /> Citadelle d'iron-Hold
                    </div>
                        <ArrowRightIcon className='iconFlecheVoyage'/>
                    <div>
                        <h2 className='h2Voyage'>DESTINATION</h2> <br /> Côte d'Azur
                    </div>
                </div>
        </div>
        <div className='millieuxPages'>
            <div className='imagePageVoyage'>
                <img src={`http://localhost:3001${maps[2]?.image}`} className='cartePageVoyage' />
                    <div className='btnPageVoyage'>
                        <button type="button"><CheckCircledIcon/> CONFIRMER LE VOYAGE</button>
                        <button type="button">MODIFIER LE VOYAGE</button>
                    </div>
            </div>
            <div className='cardPageVoyage'>
                <div className='statistiqueDeRoute'>
                    <h2 className='h2Voyage'>Statistiques de Route</h2>
                        <ul>
                            <li><RocketIcon /> DISTANCE 142 Lieues </li>
                            <li><LapTimerIcon /> DUREE ESTIMEE 3 Soleils</li>
                        </ul>
                    <div>
                        <CardStackIcon/> <br />
                        PRIX TOTAL 3.550 fLORINS D'OR
                    </div>
                </div>
                    <div className='transportSelectionerPageVoyage'>
                    <h2 className='h2Voyage'>TRANSPORT SELECTIONNE</h2>
                        <ul>
                            <li>Noble Coach</li>
                            <li>Classe Souveraine</li> <StarIcon/>
                        </ul>
                        <ul>
                            <li>Sellerie en velours royal</li>
                            <li>Escorte de garde personnelle</li>
                        </ul>
                    </div>
            </div>
        </div>
      </div>
    )
}
  

export default DetailsDuVoyage;
