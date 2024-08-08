// Librerias
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import "../../css/detailActivities.css";
import Modal from "../Modal/Modal";
import axios from "axios";

// Componente
import ActivityCrud from "../ActivityFilter/ActivityCrud";

// eslint-disable-next-line react/prop-types
const CountryDetail = ({ countryId }) => {
  // Use States
  const [countryDetail, setCountryDetail] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use Effect
  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries/${countryId}`
        );
        setCountryDetail(response.data);
      } catch (error) {
        console.error("Error fetching country detail:", error);
      }
    };

    fetchCountryDetail();
  }, [countryId]);

  console.log("Countries: ", countryDetail);

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
      <div className="modal__items">
        <div className="modal__countryDetail">
          {/* Titulo - Detalles */}
          <h2 className="modal__title">
            Detalles de{" "}
            <span className="span__title">{countryDetail?.name || 'Nombre no disponible'}:</span>
          </h2>

          <p className="modal__parrafo">
            Continente:{" "}
            <span className="span__info">{countryDetail?.continents || 'Información no disponible'}</span>
          </p>
          <p className="modal__parrafo">
            Capital: <span className="span__info">{countryDetail?.capital || 'Información no disponible'}</span>
          </p>
          <p className="modal__parrafo">
            Subregión:{" "}
            <span className="span__info">{countryDetail?.subregion || 'Información no disponible'}</span>
          </p>
          <p className="modal__parrafo">
            Área: <span className="span__info">{countryDetail?.area || 'Información no disponible'} </span>
          </p>
          <p className="modal__parrafo">
            Población:{" "}
            <span className="span__info">{countryDetail?.population || 'Información no disponible'} </span>
          </p>

          {/* Imagen de la bandera del país */}
          <div className="modal__flag">
            <img
              className="modal__image"
              src={countryDetail?.flags || 'URL de la bandera no disponible'}
              alt={`${countryDetail?.name || 'País'} Flag`}
            />
          </div>
        </div>

        <div className="modal__activities">
          {/* Titulo - Actividades */}
          <h2 className="modal__title">
            Actividades sobre{" "}
            <span className="span__title">{countryDetail?.name || 'Nombre no disponible'}:</span>
          </h2>

          {/* <ActivityCrud activities={countryDetail.Activities} formatDuration={formatDuration}/> */}

          {countryDetail?.Activities?.length > 0 ? (
            countryDetail.Activities.map((activity, index) => (
              <div key={activity.id} className="modal__Activities">
                <h3>Actividad {index + 1}:</h3>
                <p className="no-margin">Nombre: {activity.name}</p>
                <p className="no-margin">Dificultad: {activity.difficulty}</p>
                <p className="no-margin">
                  Duración: {formatDuration(activity.duration)}
                </p>
                <p className="no-margin">Temporada: {activity.season}</p>
              </div>
            ))
          ) : (
            <h4>No registradas</h4>
          )}
        </div>
      </div>

      {/* <button className="btn__detail" onClick={() => setIsModalOpen(true)}>Detalle</button> */}

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="modal__items">
            <div className="modal__countryDetail">
              <h2 className="modal__title">
                Detalles de{" "}
                <span className="span__title">{countryDetail.name}:</span>
              </h2>

              <p className="modal__parrafo">
                Continente:{" "}
                <span className="span__info">{countryDetail.continents}</span>
              </p>
              <p className="modal__parrafo">
                Capital:{" "}
                <span className="span__info">{countryDetail.capital}</span>
              </p>
              <p className="modal__parrafo">
                Subregión:{" "}
                <span className="span__info">{countryDetail.subregion}</span>
              </p>
              <p className="modal__parrafo">
                Área: <span className="span__info">{countryDetail.area} </span>
              </p>
              <p className="modal__parrafo">
                Población:{" "}
                <span className="span__info">{countryDetail.population} </span>
              </p>

              <div className="modal__flag">
                <img
                  className="modal__image"
                  src={countryDetail.flags}
                  alt={`${countryDetail.name} Flag`}
                />
              </div>
            </div>

            <div className="modal__activities">
              <h2 className="modal__title">
                Actividades sobre{" "}
                <span className="span__title">{countryDetail.name}:</span>
              </h2>

              {countryDetail.Activities.length > 0 ? (
                countryDetail.Activities.map((activity, index) => (
                  <div key={activity.id} className="modal__Activities">
                    <h3>Actividad {index + 1}:</h3>
                    <p className="no-margin">Nombre: {activity.name}</p>
                    <p className="no-margin">
                      Dificultad: {activity.difficulty}
                    </p>
                    <p className="no-margin">
                      Duración: {formatDuration(activity.duration)}
                    </p>
                    <p className="no-margin">Temporada: {activity.season}</p>
                  </div>
                ))
              ) : (
                <h4>No registradas</h4>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
export default CountryDetail;
