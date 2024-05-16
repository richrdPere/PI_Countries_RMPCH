import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

const Registro = () => {
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
                <h2>Crear Cuenta</h2>


                {/* Log in */}
                <form>
                    {/* Email */}
                    <label htmlFor="email">Email</label>
                    <input id='email' placeholder="Tu Email" type="email" name="email" className='email_input'/>

                    {/* Password */}
                    <label htmlFor="password">Password</label>
                    <input placeholder="Tu Password" type="password" name="password" className='password_input'/>

                    {/* Extra options */}
                    <div className='options_login'>
                        <Link className="option_link" to={'/register'}>¿No tienes cuenta? Crea Una</Link>
                        <Link className="option_link" to={'/forgotPassword'}>Olvide mi Password</Link>
                    </div>

                    {/* Button */}
                    <input type="submit" value="Iniciar Sesion" className='button_submit'/>
                </form>
            </main>
        </>
        
    );
}

export default Registro;