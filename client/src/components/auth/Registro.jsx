// Librerías
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/loginActions'; 
import { getCountries } from '../../redux/actions/countriesActions';

// CSS
import "../../css/loginPage.css";


const capitalizeWords = (str) => {
    return str.toLowerCase();
  };

const Registro = () => {
    // Definir estados locales usando hooks
    const dispatch = useDispatch();// Manejador para activar acciones de Redux
    const users = useSelector(state => state.users);// Obtener la lista de los usuarios desde el estado de Redux
    const navigate = useNavigate(); // Hook para la navegación entre páginas

    // Cargar la lista de países al cargar el componente
    useEffect(() => {
        dispatch(getUsers());// Disparar la acción para obtener la lista de usuarios desde Redux
    }, [dispatch]);// Se ejecuta cuando el componente se monta y cuando 'dispatch' cambia

    // DEFINIR ESTADOS DE LOGIN
    // Para email
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailExistError, setEmailExistError] = useState(false);

    // Para Password
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Para Nombres
    const [nombre, setNombre] = useState('');
    const [nombreError, setNombreError] = useState('');

    // Para Apellidos
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    // Para País
    const [country, setCountry] = useState('');
    const [countryError, setCountryError] = useState('');

    // VALIDACIONES PARA LOS CAMPOS
    // Validación Email - Falta
    const validateEmail = (value) => {
        if (!value) {
            return 'Por favor, ingrese su email';
        }
        if (/[^a-zA-Z\s]/.test(value)) {
            return 'El nombre no debe contener caracteres especiales ni números';
        }
        return '';
    }

    // Validación Password - Falta
    const validatePassword = (value) => {
        if (!value) {
            return 'Por favor, debe ingresar un password';
        }
        return '';
    }

    // Validación Nombres
    const validateNombres = (value) => {
        if (!value) {
            return 'Por favor, ingrese bien sus nombres';
        }
        if (/[^a-zA-Z\s]/.test(value)) {
            return 'Su nombre no debe contener caracteres especiales ni números';
        }
        return '';
    };

    // Validación Apellidos
    const validateLastName = (value) => {
        if (!value) {
            return 'Por favor, ingrese bien sus apellidos';
        }
        if (/[^a-zA-Z\s]/.test(value)) {
            return 'Su apellido no debe contener caracteres especiales ni números';
        }
        return '';
    };

    // Validación Continente
    const validateContinent = (value) => {
        if (!value.trim()) {
            return 'El campo de Continente no puede estar vacía.';
        }
        return '';
    };

    // FUNCIONES PARA LOS CAMPOS
    const handleEmailChange = (e) => {
        const value = e.target.value;
        const formattedEmail = capitalizeWords(value); // Convertir el email todo a minuscula
        setEmail(formattedEmail);
        setEmailError(validateEmail(formattedEmail));

        // Verificar si el usuario ya existe en la lista de actividades
        const userExists = users.some(user => user.email === formattedEmail);
        setEmailExistError(userExists);
    };

    // NAVEGACIÓN

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