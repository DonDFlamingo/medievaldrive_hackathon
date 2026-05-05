import './Home.css'
import Card2 from '../../assets/Card-2.png'

function Home(){
    return(
        <>
       <div className='banniere-image' >
        {/* <img src={banniere} alt="banniere-image" className='banniere-image'/> */}
        <div className='banniere-container'>
        <h1 className='title-home'>Voyager à travers les royaumes avec Distinction</h1>
        <p className='banniere-para'>Découvrez une excellence de transport sans précedent.Des carrosses royaux </p>
        <p  className='banniere-p'>aux coursiers rapides, nous orchestrons chaque étape de votre épopée</p>
        <div className="search-destination">
         <div className="field">
            <label htmlFor="point_de_depart" className="label">POINT DE DEPART</label>
              <input type="text" id="point_de_depart" className="home-input" placeholder="Cité d'Argent" />
         </div>
         <div className="field">
           <label htmlFor="destination" className="label">DESTINATION</label>
           <input type="text" id="destination" className="home-input" placeholder="Port de 'Aube" />
        </div>
         <button type="button" className="home-button">RESERVER</button>
        </div>
        </div>
       </div>
       <div className='Cards-container'>
        <div className='card1'>
            <div className='card1-text'>
            <h2>Royal Carriage</h2>
            <p>L'apogée du confort.Voyagez dans des habitacles de soie et d'ébène,protégés par notre garde d'élite.</p>
            </div>
        </div>
        <div className='card2'>
              <div className='card2-text'>
             <h2 className='card2-text-title'>Rnight Express</h2>
             <p>Pour les missives et les voyageurs pressés.Nos montures les plus rapides,entrainées pour l'endurence absolue à travers les colis de montagnes</p>
             </div>
             <img src={Card2} alt="Card1" className='home-image'/>
        </div>
        <div className='card3'>
            <h2>Secure Caravane</h2>
            <p className='card3-para'>Le stransport sécurise de vos biens les plus précieux.</p>
            <p className='card3-para'>Escortes armées et scellés magiques garantis.</p>
            <ul className='card3-ul'>
                <li>Traçage par messager ailé</li>
                <li>Assuranse royale sur le fret</li>
                <li>Entrepot fortifiés</li>
            </ul>
        </div>
        <div className='card4'>
            <div className='home-image'/>
            <div className='card4-text'>
            <h4 >Réseau Mondial</h4>
            <h3 >14 ROYAUMES 120 RELAIS</h3>
            </div>
        </div>
       </div>
       <div>
        <h2 className='title-99'>99</h2>
        <p className='para-99'>"La Destination n'est que la conclusion D'un récit. Chez Gralted Transit,nous nous assurons que chaque chapitre du voyage soit Digne D'une légende."</p> 
        <p className='home-99'>-LE GRAND INTENDANT DES TRANSPORTS</p>
       </div>
       </>
    )
}

export default Home;