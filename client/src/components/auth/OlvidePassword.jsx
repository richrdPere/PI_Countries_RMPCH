import React, { useEffect, useState} from 'react'
import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

const OlvidePassword = () => {
    // NAVEGACIÓN
    // Obtener la función de navegación
    const navigate = useNavigate();

    // 1.-Nav - Hacia Log in
    // ----------------------------
    const handleEnterToLogin = () => {
        navigate('/login'); // Redirige a la ruta '/login'
    }

    // 2.-Nav - Hacia Sign up
    // ----------------------------
    const handleEnterToRegister = () => {
        navigate('/register'); // Redirige a la ruta '/register'
    }

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="contenedor">
                    <div className="barra">
                        {/* Logo */}
                        <Link className="logo" to={'/'}>
                            <h1 className="logo_nombre no-margin">Viajes<span className="logo_bold">AlExtranjero</span></h1>
                        </Link>

                        {/* Navegacion */}
                        <div className="navegacion">
                            <a className="navegacion_enlace" onClick={handleEnterToRegister}>Registrate</a>
                            <a className="navegacion_enlace" onClick={handleEnterToLogin}>Iniciar Sesión</a>
                        </div>   
                    </div>
                </div>

                <div className="header_titulo ">
                    {/* Titulo */}
                    <h1 className="no-margin">Bienvenido a Viajes<span className='logo_bold header-normal'>AlExtranjero</span></h1>
                    
                    <p className="no-margin">Recuerdos de viaje que nunca olvidarás</p>
                </div>
            </header>
        </>
    )
}

export default OlvidePassword