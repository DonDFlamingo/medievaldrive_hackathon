import React from 'react'
import {ArrowRightIcon} from "@radix-ui/react-icons"
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
            <div>
            <h1 className='titrePageVoyage'>Détails de votre périple</h1>
            </div>
            <div className='departArriverPageVoyage'>
            <div className='départDestinationPageVoyage'>
                <h2>Origine</h2> <br /> Citadelle d'iron-Hold
            </div>
            <ArrowRightIcon className='iconFlecheVoyage'/>
            <div>
                <h2>DESTINATION</h2> <br /> Côte d'Azur
            </div>
            </div>
        </div>
            <img src={`http://localhost:3001${maps[2]?.image}`} className='cartePageVoyage' />
      </div>
    )
}
  

export default DetailsDuVoyage;
