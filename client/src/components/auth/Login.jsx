// UseState
import { useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

import validation from "../validation";

const Login = ({login}) => {
    // Use States
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    // const [isErrorEmail, setIsErrorEmail] = useState(false);
    // const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [errors, setErrors] = useState({});


    // FUNCIONES
    // 1.-Funcion - handlerChange
    // ----------------------------
    const handlerChange = (event) => {
        setErrors(validation(userData));
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    // 2.-Funcion - handlerSubmit
    // ----------------------------
    const handlerSubmit = (e) => {
        e.preventDefault();
        // Validamos la conexion
        // if(!errors.email || !errors.password){
        //     setIsErrorEmail(true);
        //     setIsErrorPassword(true);
        // }

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

                        {/* {errors.email && <span>{errors.email}</span>} */}
                        {errors.email ? <span>{errors.email}</span> : null}
                        {/* {isErrorEmail ? <span>{errors.email}</span> : null} */}
                    </div>

                    {/* Password */}
                    <div className='form__group'>
                        <input className="form__input" onChange={handlerChange} placeholder="Password" type="password" name="password"/>
                        <label className="form__label" htmlFor="password">Password</label>

                        {/* {errors.password && <span>{errors.password}</span>} */}
                        {errors.password ? <span>{errors.password}</span>: null}
                        {/* {isErrorPassword? <span>{errors.password}</span>: null} */}
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