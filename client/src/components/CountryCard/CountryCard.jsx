// Librerias
import React, { useState, useEffect } from "react";

// Components
import CountryDetail from '../CountryDetail/CountryDetail'; // Importa el componente CountryDetail

// CSS
import { DivCard, ImgCard } from './CountryCardsStyle';
import '../../css/cards.css'


const CountryCard = ({ country }) => {
    // Use States
    const [isModalOpen, setIsModalOpen] = useState(true); // Inicialmente se mostrará automáticamente

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <div className="card__container">
            
            {/* DISEÑO ANTERIOR*/}
            {/* <DivCard>
                
                <ImgCard src={country.flags} alt={`${country.name} Flag`} />

                <div>
                    
                    <h3>{country.name}</h3>
                    
                    <h2>{country.continents}</h2>
                </div>

                {isModalOpen && (
                    <CountryDetail countryId={country.cca3} onClose={closeModal} />
                )}
            </DivCard> */}

            {/* DISEÑO NUEVO */}
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
                    <h2 className="card__name">{country.name} | <span>{country.id}</span></h2>
                    <h2>continente: <span>{country.continents}</span></h2>

                    {isModalOpen && (
                        <CountryDetail countryId={country.cca3} onClose={closeModal} />
                )}
                </div>

                {/* {isModalOpen && (
                    <CountryDetail countryId={country.cca3} onClose={closeModal} />
                )} */}
            </div>
            
            
        </div>
    );
}

export default CountryCard;
