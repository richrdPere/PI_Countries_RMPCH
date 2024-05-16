
import React from 'react'
import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";


const Nosotros = () => {
  // NAVEGACIÓN
    // Obtener la función de navegación
    const navigate = useNavigate();

    // Redireccionar a ciertas Page
    // 1.-Nav - Hacia nosotros
    // ----------------------------
    const handleEnterToNosotros = () => {
        navigate('/about'); // Redirige a la ruta '/about'
    }

    // 2.-Nav - Hacia Log in
    // ----------------------------
    const handleEnterToLogin = () => {
        navigate('/login'); // Redirige a la ruta '/login'
    }

    // 3.-Nav - Hacia Sign up
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
                        <a className="navegacion_enlace" onClick={handleEnterToNosotros}>Nosotros</a>
                            <a className="navegacion_enlace" onClick={handleEnterToRegister}>Sign up</a>
                            <a className="navegacion_enlace" onClick={handleEnterToLogin}>Log in</a>
                        </div>   
                    </div>
                </div>
            </header>

            <main className='contenido_principal'>
                {/* Titulo */}
                <h2>Sobre el Creador</h2>


                
            </main>
        </>
        
    );
}

export default Nosotros