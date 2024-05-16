// UseState
import { useState, useEffect } from 'react'

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
            {/* Log in */}
            <div className='login-box'>    
                {/* Titulo */}
                <h2>Iniciar Sesión</h2>

                {/* Log in */}
                <form onSubmit={handlerSubmit}>

                    {/* Email */}
                    <div className='user-box'>
                        <input type="email" name="email" onChange={handlerChange}/>
                        <label>Email</label>
                    </div>
                                
                    {/* Password */}
                    <div className='user-box'>
                        <input  type="password" name="password" onChange={handlerChange}/>
                        <label>Password</label>
                    </div>
                            
                    {/* Extra options */}
                    {/* <div className='options-login'>
                        <Link className="option_link" to={'/register'}>¿No tienes cuenta? Crea Una</Link>
                        <Link className="option_link" to={'/forgotPassword'}>Olvide mi Password</Link>
                    </div> */}

                    {/* Submit */}
                    <Link to={'/homePage'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </Link>
                </form>
            </div>
            
        </>
    );
}

export default Login;