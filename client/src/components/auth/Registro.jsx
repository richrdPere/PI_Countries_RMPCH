import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

const Registro = () => {
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
            <header className="headerLogin">
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
            </header>

            <main className='contenido_principal'>
                {/* Titulo */}
                <h2 className='centrar-texto'>Create <span className="logo_bold">una Cuenta</span></h2>


                {/* Registro */}
                <form className='form__container'>
                    {/* Datos de la Cuenta */}
                    <section className='form__top'>

                        <h4>Datos de la Cuenta</h4>

                        {/* Email */}
                        <div className='form__group'>
                            <input className="form__input" id='email' placeholder="Email" type="email" name="email"/>
                            <label className="form__label" htmlFor="email">Email</label>
                        </div>
                        
                        {/* Password */}
                        <div className='form__group'>
                            <input className="form__input" placeholder="Password" type="password" name="password"/>
                            <label className="form__label" htmlFor="password">Password</label>
                        </div>      
                    </section>
                    

                    {/* Datos del Usuario */}
                    <section className='form__bottom'>
                        
                        <h4>Datos del Usuario</h4>

                        <div className='form__name'>
                            {/* Nombres */}
                            <div className='form__group'>
                                <input className="form__input" id='name' placeholder="Nombres" type="text" name="name"/>
                                <label className="form__label" htmlFor="name">Nombres</label>
                            </div>

                            {/* Apellidos */}
                            <div className='form__country form__group'>
                                <input className="form__input" id='lastName' placeholder="Apellidos" type="text" name="lastName"/>
                                <label className="form__label" htmlFor="lastName">Apellidos</label>
                            </div>
                        </div>
                        
                        <div className='form__country'>
                            {/* Pais */}
                            <div className='form__group'>
                                <input className="form__input" id='country' placeholder="País" type="text" name="country"/>
                                <label className="form__label" htmlFor="country">País</label>
                            </div>

                            {/* Continente */}
                            <div className='form__group'>
                                {/* <label className="" htmlFor="continent">Continente</label> */}
                                <select className="form__select" id='continent' name="continent">
                                    <option>Continente</option>
                                    <option value="Africa">Africa</option>
                                    <option value="South America">South America</option>
                                    <option value="Asia">Asia</option>
                                    <option value="Europe">Europe</option>
                                    <option value="Oceania">Oceania</option>
                                </select>
                            </div>
                        </div>

                        {/* Button */}
                        <div className='form__center'>
                            <input type="submit" className='form__button' value="Crear Cuenta"/>
                        </div>
                        
                    </section>

                    
                </form>
            </main>
        </>
        
    );
}

export default Registro;