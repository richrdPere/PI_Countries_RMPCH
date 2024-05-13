// UseState
import { useState, useEffect } from "react";

// Librerias
import { useNavigate } from "react-router-dom";
import "../../css/homePage.css";


// eslint-disable-next-line react/prop-types
const Countries = ({
    id,
    name,
    flagImage,
    continent,
    capital,
    subRegion,
    area,
    population
}) => {
    // Use States
    const [isFav, setIsFav] = useState(false);

    // Navigate
    const navigate = useNavigate();

    // Use Effect
    useEffect(
        () => {
        // eslint-disable-next-line react/prop-types
        myFavorites.forEach(fav => {
            if (fav.id === id) {
            setIsFav(true);
            }
        });
        },
        [myFavorites]
    );

    // 1.-Funcion - handleFavorite
    // -------------------
    const handleFavorite = () => {
        isFav
        ? removeFav(id)
        : addFav({
            id,
            name,
            flagImage,
            continent,
            capital,
            subRegion,
            area,
            population
            });

        setIsFav(!isFav);
    };

    return (
        <div className="card-container">
        {/*Contenedor Button*/}
        <div className="card-button">
            {
                isFav ? (
                    <button className="button-favorite" onClick={handleFavorite}>❤️</button>
                ) : (
                    <button className="button-favorite" onClick={handleFavorite}>🤍</button>
                )
            }
            
            <button className="button-cerrar" onClick={() => onClose(id)}>
                    X
            </button>
        </div>

        {/*Contenedor Imagen y Nombre */}
        <div className="card-image" onClick={() => navigate(`/detail/${id}`)}>
            <img 
                className="image-detail" 
                src={flagImage}
                alt="Imagen de un personaje" 
            />
            <h2 className="image-name">{name} | <span>{id}</span>
            </h2>
        </div>

        {/*Contenedor Datos*/}
        <div className="card-datos">
            <h3>Sub Región: <span>{subRegion}</span></h3>
            <h3>Área: <span>{area}</span></h3>
            <h3>Población: <span>{population}</span></h3>
            {/* <h3>origen <span>{origin}</span></h3> */}
        </div>
        </div>
    );
}
export default Countries;
