/* eslint-disable react/prop-types */
import "../../css/homePage.css";
import Card from "./Card.jsx";

const Cards = ({countries, onClose}) => {
    return (
        <div className="cards-container">
            {countries.map(({ id, name, flagImage, continent, capital, subRegion, area, population }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        flagImage={flagImage}
                        continent={continent}
                        capital={capital}
                        subRegion={subRegion?.name}
                        area={area}
                        population={population}

                        onClose={onClose}
                    />
                );
            })}
        </div>
    );
}

export default Cards;


