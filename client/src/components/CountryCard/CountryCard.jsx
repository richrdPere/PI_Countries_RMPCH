// Librerias
import React, { useState, useEffect } from "react";

// Components
import CountryDetail from '../CountryDetail/CountryDetail'; // Importa el componente CountryDetail

// CSS
import '../../css/cards.css'
import DetailPage from "../../views/DetailPage";


const CountryCard = ({ country }) => {
    // Use States
    const [isModalOpen, setIsModalOpen] = useState(true); // Inicialmente se mostrará automáticamente

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card__container">
        
            {/* DISEÑO DE LA CARD */}
            <div className="card__detail">
                {/* Imagen de la bandera del país */}
                <div className="card__flag">    
                    <img 
                        className="card__image" 
                        src={country.flags} 
                        alt={`${country.name} Flag`}
                    />
                    
                </div>  

                {/* Contenedor datos */}
                <div className="card__info">
                    {/* Nombre del país */}
                    {/* <h3>nombre: <span>{country.name}</span></h3> */}
                    {/* Continente del país */}
                    <h3 className="card__name">
                        {country.name} | <span>{country.id}</span>
                    </h3>
                    {/* <h3 className="card__continent no-pading "><span>{country.continents} | {country.population}</span></h3> */}
                    <h3 className="card__continent">Cont.   <span>{country.continents}</span></h3>
                    <h3 className="card__continent">Pobl.   <span>{country.population}</span></h3>

                </div>

                {/* <div className="">
                    {isModalOpen && (
                        <CountryDetail countryId={country.cca3} onClose={closeModal} />
                    )}
                </div>  */}

                {/* <button className="btn__detail" onClick={() => setIsModalOpen(true)}>Detalle</button> */}
            </div>
            
            <div className="card__moreInfo">
                {isModalOpen && (
                    <CountryDetail  onClose={closeModal} />
                )}

                {/* <DetailPage countryId={country.id}/> */}
            </div> 

            
            
            
        </div>
    );
}

export default CountryCard;
