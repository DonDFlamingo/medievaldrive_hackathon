import React from 'react'
import {ArrowRightIcon} from "@radix-ui/react-icons"
import "./detailsDuVoyage.css"

function DetailsDuVoyage () {
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
      </div>
    )
}
  

export default DetailsDuVoyage;
