import { useNavigate, Link} from 'react-router-dom';

//import "../css/index.css";
import "../css/ladingPage.css";
import Nosotros from '../components/auth/Nosotros';

const LadingPage = () => {

    // NAVEGACIÓN
    // Obtener la función de navegación
    const navigate = useNavigate();

    // Redireccionar a ciertas Page

    // 1.-Nav - Hacia nosotros
    // ----------------------------
    // const handleEnterToNosotros = () => {
    //     navigate('/about'); // Redirige a la ruta '/about'
    // }

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
                    <h1 className="no-margin header-normal">Bienvenido a Viajes<span className='logo_bold header-normal'>AlExtranjero</span></h1>
                    
                    <p className="no-margin">Recuerdos de viaje que nunca olvidarás</p>
                </div>
            </header>
            
            {/* Main - Sobre Mí  */}
            <main className='layout__content'>
                <Nosotros/>
            </main>
        </>
    )
}

export default LadingPage;