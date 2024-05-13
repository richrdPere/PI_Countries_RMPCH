import { useNavigate, Link } from "react-router-dom";

import "../../css/detailActivities.css"

const Culture = () => {
  return (
    <div>
      {/* Header */}
      <header className="header-culture">
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
         {/* Activities - Options */}
         <div className="opciones">
              <Link className="option_enlace" to={"/culture"}>
                Cultura
              </Link>
              <Link className="option_enlace" to={"/gastronomy"}>
                Gastronomia
              </Link>
              <Link className="option_enlace" to={"/nature"}>
                Naturaleza
              </Link>
              <Link className="option_enlace" to={"/sport"}>
                Deporte
              </Link>
            </div>
        

        <h2>Estas en Cultura</h2>
      </main>
    </div>
  );
};

export default Culture;
