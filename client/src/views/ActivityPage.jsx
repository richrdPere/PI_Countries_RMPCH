import React from 'react'

const ActivityPage = () => {
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


                {/* Lado Derecho */}
                <section className="barra__right">
                    {/* Navegacion */}
                    <div className="navegacion">
                        <a className="navegacion_enlace" onClick={handleEnterToActivities}>
                            Mis Destinos
                        </a>

                        <a className="navegacion_enlace"  onClick={handleEnterToActivities}
                        >
                            Mis Destinos
                        </a>
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
    </>
  )
}

export default ActivityPage