// Librerias
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Actions de Redux
import { getCountries } from "../redux/actions/countriesActions";
import { searchCountriesByName } from "../redux/actions/searchActions";
import { getActivities } from "../redux/actions/activitiesActions";

// Componentes
import CountryCard from "../components/CountryCard/CountryCard.jsx";
import Pagination from "../components/Pagination/Pagination.jsx";
import CountryDetail from "../components/CountryDetail/CountryDetail.jsx";
import ContinentFilter from "../components/CountryDetail/ContinentFilter.jsx";
import ActivityFilter from "../components/ActivityFilter/ActivityFilter.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

// Vista 
import FormPage from "./FormPage.jsx";

// CSS
import "../css/homePage.css";

// Numero de Pages
const PageSize = 12;

const HomePage = () => {
  // Obtener los países y actividades del estado global
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const dispatch = useDispatch();

  // Estados locales para manejar la paginación, país seleccionado y filtros
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  // Estados para el paginado
   const [currentPage, setCurrentPage] = useState(1);

  
  // V1
  // Calcular índices de inicio y fin para la paginación
  const startIndex = (currentPage - 1) * PageSize;
  const endIndex = startIndex + PageSize;

  

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  // Obtener la lista de países y actividades al cargar el componente
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  

  // Filtrar y ordenar los países según los filtros y orden seleccionados
  const filteredAndSortedCountries = countries
    .filter(
      (country) =>
        !selectedContinent || country.continents === selectedContinent
    )
    .filter(
      (country) =>
        !selectedActivity ||
        selectedActivity === "Todas las actividades" ||
        selectedActivity.countries.includes(country.name)
    )
    .slice()
    .sort((a, b) => {
      if (sortField === "name") {
        return sortDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortField === "population") {
        return sortDirection === "asc"
          ? a.population - b.population
          : b.population - a.population;
      }
      return 0;
    });

  // Calcular el número total de páginas para la paginación
  const totalPages = Math.ceil(filteredAndSortedCountries.length / PageSize);

  // Manejador para cambiar la página actual de la paginación
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setSelectedActivity(null);
  };

  // Manejador para mostrar los detalles de un país
  const handleCountryButtonClick = (countryId) => {
    setSelectedCountryId(countryId);
  };

  // Manejador para buscar países por nombre
  const handleSearch = (name) => {
    dispatch(searchCountriesByName(name));
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

  const handleSelectContinent = (continent) => {
    setSelectedContinent(continent);
    setSelectedActivity(null);
    setCurrentPage(1); // Reiniciar a la página 1 cuando se aplique un filtro
  };

  const handleSelectActivity = (activityCountries) => {
    setSelectedActivity({ countries: activityCountries });
    setCurrentPage(1); // Reiniciar a la página 1 cuando se aplique un filtro
  };

  // NAVEGACIÓN
  // Obtener la función de navegación
  const navigate = useNavigate();

  // 1.-Nav - Hacia Activities
  // ----------------------------
  const handleEnterToActivities = () => {
    navigate("/form"); // Redirige a la ruta 'Crear Actividad'
  };

  // 2.-Nav - Hacia Login
  // ----------------------------
  const handleEnterToLogin = () => {
    navigate("/login"); // Redirige a la ruta '/login'
  };

  return (
    <>
        {/* Header */}
        <header className="header__homePage">
            <div className="barra__container">
                {/* Lado Izquierdo */}
                <section className="barra__left">
                    {/* Logo */}
                    <Link className="logo" to={"/homePage"}>
                        <h4 className="logo_nombre no-margin">Viajes</h4>
                        <h4 className="logo_nombre no-margin">
                            <span className="logo_bold">AlExtranjero</span>
                        </h4>
                    </Link>

                    {/* Seach bar */}
                    <div className="searchBar">
                    {/* <input type="text" className="searchBar_input" name="name" placeholder="Nombre" required/>

                        <label htmlFor="name" className="searchBar_label">
                                            
                        Buscar
                        </label> */}

                        <SearchBar
                            onSearch={handleSearch}
                            onClearSearch={handleClearSearch}
                        />
                    </div>
                </section>

                        {/*onClick={handleEnterToActivities}*/}
                {/* Lado Derecho */}
                <section className="barra__right">
                    {/* Navegacion */}
                    <div className="navegacion">
                        <FormPage/>
                                               
                        
                        <a className="navegacion_enlace" onClick={handleEnterToLogin}>
                            Cerrar Sesión
                        </a>
                    </div>
                </section>
            </div>

            <div className="header_titulo ">
                {/* Titulo */}
                <h2 className="no-margin">Recuerdos de viaje que nunca olvidarás</h2>

                <p className="no-margin">Explora el mundo como un lugareño</p>
            </div>
        </header>

        {/* Main */}
        <main>
            <div className="main-container">
                {/* <div className="filtro-title">
                    <h1>Lista de Países</h1>
                </div> */}

                {/* Opciones de Countries */}
                

                <div className="filtro__container">
                    {/* 1.- Contenedor para los filtros */}
                    <div>
                        
                        <ContinentFilter onSelectContinent={handleSelectContinent} />
                    </div>

                    <div>
                        <ActivityFilter
                            activities={activities}
                            onSelectActivity={handleSelectActivity}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>

                    {/* 2.- Contenedor para la ordenación */}
                    <div className="container__ordenacion">
                        <div className="search__label">
                            <h5>Ordenar por:</h5>
                        </div>

                        <div className="search__ordenacion">
                            <select
                                className="search__select"
                                value={sortField}
                                onChange={(e) => setSortField(e.target.value)}
                            >
                                <option value="name">Nombre</option>
                                <option value="population">Población</option>
                            </select>

                            <button
                                    className="search__button"
                                    onClick={() => setSortDirection("asc")}
                                >
                                    +
                                </button>

                                <button
                                    className="search__button"
                                    onClick={() => setSortDirection("desc")}
                                >
                                    -
                            </button>
                        </div>

                        
                    </div>
                
                </div>

                {/* Contenedor para la lista de países */}
                <div className="country__list">
                    {/* Cards */}
                    {filteredAndSortedCountries
                        .slice(startIndex, endIndex)
                        .map((country) => (
                            <CountryCard
                                key={country.id}
                                country={country}
                                onShowDetail={handleCountryButtonClick}
                            />
                        ))
                    }
                </div>

                {/* Contenedor para la paginación */}
                <div className="pagination__container no-margin">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={handlePageChange}
                    />

                    
                </div>

                {/* Mostrar detalles de un país seleccionado */}
                {selectedCountryId && (
                    <CountryDetail countryId={selectedCountryId} />
                )}   
            </div>
        </main>
    </>
  );
};

export default HomePage;
