// UseState
import { useState, useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom';

import "../css/loginPage.css";

import Login from '../components/auth/Login.jsx';

const LoginPage = ({login}) => {
    // NAVEGACIÓN
    // Obtener la función de navegación
    const navigate = useNavigate();

    // Redireccionar a ciertas Page

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
            <header className="headerLogin">
                <div className="contenedor">
                    <div className="barra">
                        {/* Logo */}
                        <Link className="logo" to={'/'}>
                            <h1 className="logo_nombre no-margin">Viajes<span className="logo_bold">AlExtranjero</span></h1>
                        </Link>

                        {/* Navegacion */}
                        <div className="navegacion">
                            <a className="navegacion_enlace" onClick={handleEnterToRegister}>Registarte</a>
                            <a className="navegacion_enlace" onClick={handleEnterToLogin}>Iniciar Sesión</a>
                        </div>   
                    </div>
                </div>
            </header>

            {/* Contenido Principal */}
            <main className='contenido_principal'>
                
                {/* Log in */}
                <Login login={login}/>

                
            </main>
            
            
        </>
    )
}

export default LoginPage;