// Librerias
import React, {useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

// Actions de Redux
import { getCountries } from '../redux/actions/countriesActions';
import { searchCountriesByName } from '../redux/actions/searchActions';
import { getActivities } from '../redux/actions/activitiesActions';

// Componentes
import CountryCard from "../components/CountryCard/CountryCard.jsx";
import Pagination from '../components/Pagination/Pagination.jsx';
import CountryDetail from '../components/CountryDetail/CountryDetail.jsx'
import ContinentFilter from "../components/CountryDetail/ContinentFilter.jsx";
import ActivityFilter from "../components/ActivityFilter/ActivityFilter.jsx" ;
import SearchBar from "../components/SearchBar/SearchBar.jsx";

// CSS
import "../css/homePage.css";

// Numero de Pages
const PageSize = 10;

const HomePage = () => {
    // Obtener los países y actividades del estado global
    const countries = useSelector(state => state.countries);
    const activities = useSelector(state => state.activities);
    const dispatch = useDispatch();

    // Estados locales para manejar la paginación, país seleccionado y filtros
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [sortField, setSortField] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');

    // Obtener la lista de países y actividades al cargar el componente
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  // Calcular índices de inicio y fin para la paginación
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = startIndex + PageSize;

  // Filtrar y ordenar los países según los filtros y orden seleccionados
  const filteredAndSortedCountries = countries
    .filter(country => !selectedContinent || country.continents === selectedContinent)
    .filter(country =>
      !selectedActivity ||
      (selectedActivity === 'Todas las actividades' ||
        selectedActivity.countries.includes(country.name))
    )
    .slice()
    .sort((a, b) => {
      if (sortField === 'name') {
        return sortDirection === 'asc'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortField === 'population') {
        return sortDirection === 'asc'
          ? a.population - b.population
          : b.population - a.population;
      }
      return 0;
    });

    // Calcular el número total de páginas para la paginación
    const totalPages = Math.ceil(filteredAndSortedCountries.length / PageSize);

    // Manejador para cambiar la página actual de la paginación
    const handlePageChange = newPage => {
        setCurrentPage(newPage);
        setSelectedActivity(null);
    };

    // Manejador para mostrar los detalles de un país
    const handleCountryButtonClick = countryId => {
        setSelectedCountryId(countryId);
    };

    // Manejador para buscar países por nombre
    const handleSearch = (nameCountry) => {
        dispatch(searchCountriesByName(nameCountry));
        setSelectedContinent(null);
        setSelectedActivity(null);
        setCurrentPage(1); // Reiniciar a la página 1 cuando se busque un país
    };

    // Manejador para borrar la búsqueda
    const handleClearSearch = () => {
        dispatch(getCountries());
        setCurrentPage(1);
        setSelectedContinent(null);
        setSelectedActivity(null);
    };

    const handleSelectContinent = continent => {
        setSelectedContinent(continent);
        setSelectedActivity(null);
        setCurrentPage(1); // Reiniciar a la página 1 cuando se aplique un filtro
    };

    const handleSelectActivity = activityCountries => {
        setSelectedActivity({ countries: activityCountries });
        setCurrentPage(1); // Reiniciar a la página 1 cuando se aplique un filtro
    };


    return (
        <>
            {/* Header */}
            <header className="header-homePage">
                <div className="contenedor">
                <div className=" barra">
                    
                    {/* Logo */}
                    <Link className="logo" to={"/"}>
                    <h4 className="logo_nombre no-margin">
                        Viajes
                    </h4>
                    <h4 className="logo_nombre no-margin"><span className="logo_bold">AlExtranjero</span></h4>
                    </Link>

                    {/* Seach bar */}
                    <div className="searchBar">
                        <input type="text" className="searchBar_input" name="name" placeholder="Nombre" required/>
                        <label htmlFor="name" className="searchBar_label">
                            {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
                            Buscar
                        </label>
                    </div>

                    {/* Navegacion */}
                    <div className="navegacion">
                    <Link href="#" className="navegacion_enlace">
                        Nosotros
                    </Link>
                    <Link href="#" className="navegacion_enlace" to={"/register"}>
                        Sign up
                    </Link>
                    <Link href="#" className="navegacion_enlace" to={"/login"}>
                        Log in
                    </Link>
                    </div>
                </div>
                </div>

                <div className="header_titulo ">
                {/* Titulo */}
                <h2 className="no-margin">Recuerdos de viaje que nunca olvidarás</h2>

                <p className="no-margin">Explora el mundo como un lugareño</p>
                </div>
            </header>

            {/* Main */}
            <main>
                {/* Cards de los Paises */}
                {/* <Cards countries={countries} onClose={onClose}/> */}
                <div className="main-container">

                    <div className="filtro-title">
                        <h1>Lista de Países</h1>
                    </div>

                    <div className="filtro-container">
                        {/* Contenedor para los filtros y búsqueda */}
                        <div>
                            <div>
                                <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
                                <ContinentFilter onSelectContinent={handleSelectContinent} />
                                <ActivityFilter
                                    activities={activities}
                                    onSelectActivity={handleSelectActivity}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div> 
                        </div>
                    
                        <div>
                            <Link to="/form">
                                <h3>Agregar Actividad</h3>
                            </Link>
                        </div>


                        {/* Contenedor para la ordenación */}
                        <div>
                            <div className="search-label">
                                <h6>Ordenar por:</h6>
                            </div>

                            <select className="search-select" value={sortField} onChange={e => setSortField(e.target.value)}>
                                <option value="name">Nombre</option>
                                <option value="population">Población</option>
                            </select>

                            <button className="search-button" onClick={() => setSortDirection('asc')}>Ascendente</button>
                            <button className="search-button" onClick={() => setSortDirection('desc')}>Descendente</button>
                        </div>
                        
                        {/* Contenedor para la lista de países */}
                        <div className="country-list">
                            {filteredAndSortedCountries
                                .slice(startIndex, endIndex)
                                .map(country => (
                                    <CountryCard
                                        key={country.id}
                                        country={country}
                                        onShowDetail={handleCountryButtonClick}
                                    />
                                ))
                            }
                        </div>
                        
                        {/* Contenedor para la paginación */}
                        <div className="pagination-container">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                        
                        {/* Mostrar detalles de un país seleccionado */}
                        {selectedCountryId && <CountryDetail countryId={selectedCountryId} />}
                    </div>
                </div>

            </main>
        </>
    );
};

export default HomePage;
