// UseState
import { useState, useEffect } from 'react'

// Librerias
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

// Vistas (Views)
import DetailPage from "./views/DetailPage.jsx";
import FormPage from "./views/FormPage.jsx";
import HomePage from "./views/HomePage.jsx";
import LadingPage from "./views/ladingPage.jsx";
import LoginPage from './views/LoginPage.jsx';

// Components
import Registro from "./components/auth/Registro.jsx";


function App() {
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
            <Route path="/" element={
                <>
                    <LadingPage/>
                </>
            }></Route>

            {/* 2.-Ruta Acti. Turistica - FormPage */}
            <Route path="/formPage" element={
                <>
                    <FormPage/>
                </>
            }></Route>

            {/* 3.-Ruta SPA - HomePage */}
            <Route path="/homePage" element={
                <>
                    <HomePage countries={countries} onClose={onClose}/>
                </>
            }></Route>

            {/* 4.-Ruta info especifica - DetailPage */}
            <Route path="/homePage/detailPage" element={
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
        </Routes>


      
        </>
    )
}

export default App
