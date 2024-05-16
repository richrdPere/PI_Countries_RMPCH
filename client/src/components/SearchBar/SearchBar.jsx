// Librerias
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions/countriesActions'

import '../../css/homePage.css';

const SearchBar = ({ onSearch, onClearSearch }) => {
    // Estado local para el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Estado local para mensajes de error y opciones predictivas
    const [errorMessage, setErrorMessage] = useState('');
    const [allCountryNames, setAllCountryNames] = useState([]);

    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);

    // Obtener la lista de países al cargar el componente
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    // Actualizar la lista de nombres de países cuando cambian los países
    useEffect(() => {
        if (countries) {
            const countryNames = countries.map(country => country.name);
            setAllCountryNames(countryNames);
        }
    }, [countries]);

    // Manejador para iniciar la búsqueda
    const handleSearch = async () => {
        try {
            setErrorMessage('');
            await onSearch(searchTerm);
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };

    // Manejador para borrar la búsqueda
    const handleClearSearch = () => {
        setSearchTerm('');
        setErrorMessage('');
        onSearch('');
        onClearSearch();
    };

    // Manejador para seleccionar una opción predictiva
    const handlePredictiveSelect = (selectedCountry) => {
        setSearchTerm(selectedCountry);
        handleSearch();
    };

    // Manejador para cambios en el campo de entrada
    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setSearchTerm(inputText);
    };

    // Manejador para presionar la tecla "Tab" (autocompletar)
    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const matchingOption = allCountryNames.find(country =>
                country.toLowerCase().startsWith(searchTerm.toLowerCase())
            );
            if (matchingOption) {
                handlePredictiveSelect(matchingOption);
            }
        }
    };
    
    return (
        <>
            {/* Etiqueta para el campo de búsqueda */}
            <div className='search-label'>
                <h3>Buscar país por nombre:</h3>
            </div>
            
            {/* Campo de entrada de búsqueda */}
            <input 
                className="search-input"
                type="text"
                placeholder="Ingrese el país..."
                value={searchTerm}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                list="predictive-options"
            />
            
            {/* Opciones predictivas */}
            <datalist id="predictive-options">
                {allCountryNames.map((countryName, index) => (
                    <option key={index} value={countryName} />
                ))}
            </datalist>
            
            {/* Botón para iniciar la búsqueda */}
            <button className='search-button' onClick={handleSearch}>Buscar</button>
            
            {/* Mostrar mensaje de error */}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            
            {/* Mostrar botón para borrar la búsqueda */}
            {searchTerm && <button className='search-button' onClick={handleClearSearch}>Borrar búsqueda</button>}
        </>
    )
}

export default SearchBar