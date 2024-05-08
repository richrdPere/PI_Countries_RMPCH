import { useNavigate, Link} from 'react-router-dom';

import "../css/index.css";
import "../css/loginPage.css";

import Login from '../components/auth/Login.jsx';

const LoginPage = () => {
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
                        <Link className="navegacion_enlace">Nosotros</Link>
                        <Link className="navegacion_enlace" to={'/register'}>Sign up</Link>
                        <Link className="navegacion_enlace" to={'/login'}>Log in</Link>
                    </div>   
                </div>
            </div>
        </header>

        {/* Contenido Principal */}
        <main className='contenido_principal'>
            
            {/* Log in */}
            <Login/>

            
        </main>
        
        
    </>
  )
}

export default LoginPage;