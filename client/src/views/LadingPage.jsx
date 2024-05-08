import { useNavigate, Link} from 'react-router-dom';

import "../css/index.css";
import "../css/ladingPage.css";

const LadingPage = () => {
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
                            <Link href="#" className="navegacion_enlace">Nosotros</Link>
                            <Link href="#" className="navegacion_enlace" to={'/register'}>Sign up</Link>
                            <Link href="#" className="navegacion_enlace" to={'/login'}>Log in</Link>
                        </div>   
                    </div>
                </div>

                <div className="header_titulo ">
                    {/* Titulo */}
                    <h2 className="no-margin">Recuerdos de viaje que nunca olvidarás</h2>
                    
                    <p className="no-margin">Explora el mundo como un lugareño</p>
                </div>
            </header>
            
            {/* Header */}
        </>
    )
}

export default LadingPage;