import React from 'react';
import '../../css/homePage.css';


const ContinentFilter = ({ onSelectContinent }) => {

    // Array de continentes
    const continents = ['Africa', 'South America', 'Asia', 'Europe', 'Oceania']

  return (
    <div className='container__ordenacion'>
        

        {/* Etiqueta para mostrar el título */}
        <div className='search__label'>
            <h5>Filtrar por Continente:</h5>
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


    </div>
  )
}

export default ContinentFilter