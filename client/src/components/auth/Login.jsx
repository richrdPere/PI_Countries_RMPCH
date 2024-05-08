import { useNavigate, Link} from 'react-router-dom';
import "../../css/loginPage.css";

const Login = () => {

    return (
        <>
            {/* Log in */}
            <div className='login-box'>    
                {/* Titulo */}
                <h2>Iniciar Sesión</h2>

                {/* Log in */}
                <form>
                    {/* Email */}
                    <div className='user-box'>
                        <input type="email" name="email"/>
                        <label>Email</label>
                    </div>
                                
                    {/* Password */}
                    <div className='user-box'>
                        <input  type="password" name="password"/>
                        <label>Password</label>
                    </div>
                            
                    {/* Extra options */}
                    {/* <div className='options-login'>
                        <Link className="option_link" to={'/register'}>¿No tienes cuenta? Crea Una</Link>
                        <Link className="option_link" to={'/forgotPassword'}>Olvide mi Password</Link>
                    </div> */}

                    {/* Submit */}
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
            
        </>
    );
}

export default Login;