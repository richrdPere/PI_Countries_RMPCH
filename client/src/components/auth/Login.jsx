// UseState
import { useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

const Login = ({login}) => {
    // Use States
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    // FUNCIONES
    // 1.-Funcion - handlerChange
    // ----------------------------
    const handlerChange = (event) => {
        //setErrors(validation(userData));
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    // 2.-Funcion - handlerSubmit
    // ----------------------------
    const handlerSubmit = (e) => {
        e.preventDefault();
        login(userData)
    }

    return (
        <>
            {/* Titulo */}
            <h2 className='centrar-texto'>Inicia Sesión <span className="logo_bold">con tu Cuenta</span></h2>

            {/* Log in */}
            <form className='form__container login__space' onSubmit={handlerSubmit}>
                {/* Datos de la Cuenta */}
                <section className='form__top'>
                    {/* Email */}
                    <div className='form__group'>
                        <input className="form__input" onChange={handlerChange} id='email' placeholder="Email" type="email" name="email"/>
                        <label className="form__label" htmlFor="email">Email</label>
                    </div>

                    {/* Password */}
                    <div className='form__group'>
                        <input className="form__input" onChange={handlerChange} placeholder="Password" type="password" name="password"/>
                        <label className="form__label" htmlFor="password">Password</label>
                    </div>    

                    {/* Button */}
                    <div className="form__center">
                        <Link to={'/homePage'}>
                            <input type="submit" className='form__button' value="Iniciar Sesión"/> 
                        </Link>
                    </div>
                </section>
            </form>    
        </>
    );
}

export default Login;