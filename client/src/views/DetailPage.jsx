// Librerias
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

// Componentes
import Modal from '../components/Modal/Modal';

// CSS
import "../css/detailActivities.css";
import "../css/homePage.css";

const DetailPage = ({ countryId }) => {
    const [countryDetail, setCountryDetail] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 

    useEffect(() => {
        const fetchCountryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/countries/${countryId}`);
                setCountryDetail(response.data);
            } catch (error) {
                console.error('Error fetching country detail:', error);
            }
        };

        fetchCountryDetail();
    }, [countryId]);

    if (!countryDetail) {
        return <BottonG>Cargando...</BottonG>;
    }

    // Función para formatear la duración en horas y minutos
    const formatDuration = (duration) => {
        const [hours, minutes] = duration.toString().split(".");

        const hoursNumber = parseInt(hours);
        const minutesNumber = parseInt(minutes);

        let hoursText = hoursNumber === 1 ? "hora" : "horas";
        let minutesText = minutesNumber === 1 ? "minuto" : "minutos";

        if (hoursNumber === 1 && minutesNumber === 0) {
            return `${hoursNumber} ${hoursText}`;
        } else if (hoursNumber === 1) {
            return `${hoursNumber} ${hoursText} y ${minutesNumber} ${minutesText}`;
        } else if (minutesNumber === 0) {
            return `${hoursNumber} ${hoursText}`;
        } else if (minutesNumber === 1) {
            return `${hoursNumber} ${hoursText} y ${minutesNumber} ${minutesText}`;
        } else {
            return `${hoursNumber} ${hoursText} y ${minutesNumber} ${minutesText}`;
        }
    };

    return (
        <div>
            {/* Header */}
            <header className="header-homePage">
                <div className="contenedor">
                <div className=" barra">
            
                    {/* Logo */}
                    <Link className="logo" to={"/"}>
                    <h4 className="logo_nombre no-margin">Viajes</h4>
                    <h4 className="logo_nombre no-margin">
                        <span className="logo_bold">AlExtranjero</span>
                    </h4>
                    </Link>

                    {/* Seach bar */}
                    <div className="searchBar">
                    <input
                        type="text"
                        className="searchBar_input"
                        name="name"
                        placeholder="Nombre"
                        required
                    />
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
                <button className='search-button' onClick={() => setIsModalOpen(true)}>Detalle</button>

                {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <div>
                        <h2>Actividades:</h2>
                        {countryDetail.Activities.length > 0 ? (
                            countryDetail.Activities.map((activity, index) => (
                            <div key={activity.id}>
                                <h3>Actividad {index + 1}:</h3>
                                <p>Nombre: {activity.name}</p>
                                <p>Dificultad: {activity.difficulty}</p>
                                <p>Duración: {formatDuration(activity.duration)}</p>
                                <p>Temporada: {activity.season}</p>
                            </div>
                            ))
                        ) : (
                            <h4>No registradas</h4>
                        )}
                    </div>

                    <div>
                    <h2>Detalles de {countryDetail.name}:</h2>
                    <p>Continente: {countryDetail.continents}</p>
                    <p>Capital: {countryDetail.capital}</p>
                    <p>Subregión: {countryDetail.subregion}</p>
                    <p>Área: {countryDetail.area}</p>
                    <p>Población: {countryDetail.population}</p>
                    </div>
                </Modal>
                )}
            </main>
        </div>
    );
};

export default DetailPage;
