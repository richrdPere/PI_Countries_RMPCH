// Librerias
import React, { useState, useEffect } from "react";

// Components
import CountryDetail from '../CountryDetail/CountryDetail'; // Importa el componente CountryDetail

// CSS
import { DivCard, ImgCard } from './CountryCardsStyle';



const CountryCard = ({ country }) => {
    // Use States
    const [isModalOpen, setIsModalOpen] = useState(true); // Inicialmente se mostrará automáticamente

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
      };

    return (
        <>
            <DivCard>
                {/* Imagen de la bandera del país */}
                <ImgCard src={country.flags} alt={`${country.name} Flag`} />

                <div>
                    {/* Nombre del país */}
                    <h3>{country.name}</h3>
                    {/* Continente del país */}
                    <h2>{country.continents}</h2>
                </div>
            </DivCard>
            
            {isModalOpen && (
                <CountryDetail countryId={country.cca3} onClose={closeModal} />
            )}
        </>
    );
}

export default CountryCard;
