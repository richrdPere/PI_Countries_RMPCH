import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Cards from "../components/cards/Cards.jsx";

//import "../css/index.css";
import "../css/homePage.css";

const HomePage = ({countries, onClose}) => {
    return (
        <div>
            {/* Header */}
            <header className="header-homePage">
                <div className="contenedor">
                <div className=" barra">
                    {/* Carrusel*/}
                    {/* <ul>
                        <li>
                            
                            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltd0ca1069566c7d75/65425bfa2149b10407ad83fd/11_Amsterdam_bike.jpg?auto=webp&quality=60" alt="imagen 1" />
                        </li>

                        <li>
                            
                            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt13042c23e777ed82/65a9568f41047f41814e773f/DESKTOP_-_04_Food_(banner_image).jpg?auto=webp&quality=60" alt="imagen 2" />
                        </li>

                        <li>
                            
                            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89f86751d709a4d6/6543969b36795e040703e1e6/3_Teide_desktop.jpg?auto=webp&quality=60" alt="imagen 3" />
                        </li>

                        <li>
                        
                            <img src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt4c9125891d9eac87/656897bf6f7bf43bbe830107/4_London.jpg?auto=webp&quality=60" alt="imagen 4" />
                        </li>
                    </ul> */}

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
                <Link></Link>
            </main>
        </div>
    );
};

export default HomePage;
