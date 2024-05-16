// Librerias
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Modal from '../Modal/Modal';
import axios from "axios";
import { BottonG } from './CountryDetailStyle';


// eslint-disable-next-line react/prop-types
const CountryDetail = ({ countryId }) => {
    // Use States
    const [countryDetail, setCountryDetail] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Use Effect
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
        }
    ), [countryId];

    // Spinner
    if(!countryDetail){
        return <BottonG>Cargando...</BottonG>
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
        <>
            <BottonG onClick={() => setIsModalOpen(true)}>Detalle</BottonG>

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
        </>
    );
}
export default CountryDetail;
