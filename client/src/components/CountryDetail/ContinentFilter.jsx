import React from 'react';
import '../../css/homePage.css';


const ContinentFilter = ({ onSelectContinent }) => {

    // Array de continentes
    const continents = ['Africa', 'South America', 'Asia', 'Europe', 'Oceania']

  return (
    <>
        <h3>Filtrar por Continente:</h3>

        {/* Etiqueta para mostrar el título */}
        <div className='search-label'>
            <h3>Filtrar por Continente:</h3>
        </div>
      
        {/* Select para elegir un continente */}
        <select className='search-select' onChange={(e) => onSelectContinent(e.target.value)}>
            {/* Opción por defecto para mostrar todos los continentes */}
            <option className='search-option' value="">Todos los continentes</option>
            
            {/* Mapear los continentes para crear opciones */}
            {continents.map((continent, index) => (
            <option key={index} value={continent}>
                {continent}
            </option>
            ))}
        </select>


    </>
  )
}

export default ContinentFilter