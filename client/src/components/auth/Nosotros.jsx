import "../../css/ladingPage.css";

const Nosotros = () => {

    return (
        <section className="content__page content__about no-margin">
            {/* Titulo */}
            <header className="about__header">
                <h1 className="about__title">Sobre <span className="title__color">Mi</span></h1>
            </header>

            {/* Información */}
            <section className="about__personalInfo">
                {/* Biografia */}
                <article className="personalInfo__bio">
                    <p className="personalInfo__description">
                        Hola mucho gusto. Me presentó, soy Richard M. Pereira Chinchero,
                        estudiante de programación en el desarrollo de Full Stack developer
                        en Henry. Y te doy la bienvenido a mi Proyecto Integrador sobre
                        Countries con el objetivo de poner a prueba mis habilidades de
                        desarrollador web. Espero que sea de su agrado...
                    </p>
                </article>

                {/* Datos */}
                <div className="personalInfo__data">
                    <ul className="personalInfo__list">
                        {/* Edad */}
                        <li className="personalInfo__option">
                            <span className="personalInfo__title">Edad</span>
                            <span className="personalInfo__value">24</span>
                        </li>
                        {/* Pais */}
                        <li className="personalInfo__option">
                            <span className="personalInfo__title">Pais</span>
                            <span className="personalInfo__value">Perú</span>
                        </li>
                        {/* Direccion */}
                        <li className="personalInfo__option">
                            <span className="personalInfo__title">Dirección</span>
                            <span className="personalInfo__value">
                                av. Manahuañunca, A-2, Cusco{" "}
                            </span>
                        </li>
                        {/* Correo */}
                        <li className="personalInfo__option">
                            <span className="personalInfo__title">Correo</span>
                            <span className="personalInfo__value">
                                richrdpere321@gmail.com
                            </span>
                        </li>
                        {/* Telefono */}
                        <li className="personalInfo__option">
                            <span className="personalInfo__title">Teléfono</span>
                            <span className="personalInfo__value">986-302860</span>
                        </li>
                    </ul>
                </div>
            </section> {/* Fin - Información */}

            {/* Tecnologias */}
            <section>
                <header className="services__header">
                    <h2 className="services__title">Lo que <span className="title__color">hago</span></h2>
                </header>

                <div className="services__container">

                        {/* 1er React */}
                        <article className="services__service">
                            {/* Img */}
                            {/* <div className="service__img">
                                <figure className="gallery__item">
                                    <div className="gallery__containerImagen">
                                        <a href="#">
                                            <img className="gallery__image" src="img/tecnologias_logos/react_logo.png" alt="Servicio 1 " />
                                        </a>                            
                                    </div>
                                </figure>
                                
                            </div> */}

                            <div className="service__content">
                                <h3 className="service__title">React</h3>
                                <p className="service__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus enim, 
                                    consectetur nesciunt iure sit sed dicta, autem eum quidem eveniet harum provident 
                                    reprehenderit esse voluptas et sint recusandae architecto.
                                </p>
                            </div>
                        </article>

                        {/* 2do Redux */}
                        <article className="services__service">
                            <div className="service__img">
                                <i className="service__realIcon fa-solid fa-chalkboard-teacher"></i>
                            </div>

                            <div className="service__content">
                                <h3 className="service__title">Redux</h3>
                                <p className="service__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus enim, 
                                    consectetur nesciunt iure sit sed dicta, autem eum quidem eveniet harum provident 
                                    reprehenderit esse voluptas et sint recusandae architecto.
                                </p>
                            </div>
                        </article>

                        {/* 3er Node */}
                        <article className="services__service">
                            <div className="service__img">
                                <i className="service__realIcon fa-solid fa-computer"></i>
                            </div>

                            <div className="service__content">
                                <h3 className="service__title">Node</h3>
                                <p className="service__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus enim, 
                                    consectetur nesciunt iure sit sed dicta, autem eum quidem eveniet harum provident 
                                    reprehenderit esse voluptas et sint recusandae architecto.
                                </p>
                            </div>
                        </article>

                        {/* 4er PostgresSQL */}
                        <article className="services__service">
                            <div className="service__img">
                                <i className="service__realIcon fa-solid fa-terminal"></i>
                            </div>

                            <div className="service__content">
                                <h3 className="service__title">PostgresSQL</h3>
                                <p className="service__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus enim, 
                                    consectetur nesciunt iure sit sed dicta, autem eum quidem eveniet harum provident 
                                    reprehenderit esse voluptas et sint recusandae architecto.
                                </p>
                            </div>
                        </article>

                </div>
            </section> {/* Fin - Tecnologias */}

        </section>
    );
};

export default Nosotros;
