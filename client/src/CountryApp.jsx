// UseState
import { useState, useEffect } from 'react'

// Librerias
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";


// Vistas (Views)
import DetailPage from "./views/DetailPage.jsx";
import FormPage from "./views/FormPage.jsx";
import HomePage from "./views/HomePage.jsx";
import LadingPage from "./views/ladingPage.jsx";
import LoginPage from './views/LoginPage.jsx';

// Components
import Registro from "./components/auth/Registro.jsx";
import Nosotros from './components/auth/Nosotros.jsx';


function CountryApp() {
    // Use States
    const [countries, setCountries] = useState([]);
    const [isAuth, setIsAuth] = useState(false);

    // Navigate y Location
    const navigate = useNavigate();
    const { pathname } = useLocation();


    // 1.-Funcion - Login
    // -------------------
    const login = async (userData) => {
        try {
            const { email, password } = userData;
            const URL = 'http://localhost:5000/countries/login/';
            const { data } = await axios(URL + `?email=${email}&password=${password}`)

            setAccess(data.isAuth);
            isAuth && navigate('/homePage');

        }
        catch (error){
            window.alert("Usuario o contraseña incorrectos");
        }
    }

    // Use Effect
    useEffect(()=>{
        !isAuth && navigate("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth]);


    // 2.-Funcion - onClose
    // ----------------------
    const onClose = (id) => {
        let filterCountries = countries.filter((country) => {
            return country.id !== id;
        });

        setCountries(filterCountries);
    };


    // 3.-Funcion - onSearch
    // ----------------------
    const onSearch = async (id) => {
        try {
            const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            setCountries((oldCountries) => [...oldCountries, data]);
            
        }catch (error){
            window.alert('¡No hay personajes con este ID!');
        }
    }


    return (
        <>
        {/* Navegación */}
        {/* {pathname !== "/" ? <Nav onSearch={onSearch} /> : null} */}

        <Routes>

            {/* ================================= */}
            {/* ====== RUTAS PRINCIPALES ======== */}
            {/* ================================= */}

            {/* 1.-Ruta Principal - LadingPage */}
            {/* Ruta para la página de inicio */}
            <Route path="/" element={
                <>
                    <LadingPage/>
                </>
            }></Route>

            {/* 2.-Ruta Acti. Turistica - FormPage */}
            {/* Ruta para el forumalrio */}
            <Route path="/form" element={
                <>
                    <FormPage/>
                </>
            }></Route>

            {/* 3.-Ruta SPA - HomePage */}
            {/* Ruta para la página principal */}
            <Route path="/homePage" element={
                <>
                    <HomePage/>
                </>
            }></Route>

            {/* 4.-Ruta info especifica - DetailPage */}
            {/* Ruta para el detalle de país */}
            <Route path="/countries/:cca3" element={
                <>
                    <DetailPage/>
                </>
            }></Route>


            {/* ================================= */}
            {/* ====== RUTAS ADICIONALES ======== */}
            {/* ================================= */}


            {/* 5.-Ruta Login */}
            <Route path="/login" element={
                <>
                    <LoginPage login={login}/>
                </>
            }></Route>

            {/* 6.-Ruta Registro */}
            <Route path="/register" element={
                <>
                    <Registro/>
                </>
            }></Route>

            {/* 7.-Ruta Nosotros */}
            <Route path="/about" element={
                <>
                    <Nosotros/>
                </>
            }></Route>

            <Route path="/redirect" element={
                <Navigate to="/HomePage" />} 
            /> {/* Redirige a /HomePage */}
        </Routes>


      
        </>
    )
}

export default CountryApp
