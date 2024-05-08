import { useState } from 'react'

// Rutas
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Vistas (Views)
import DetailPage from "./views/DetailPage.jsx";
import FormPage from "./views/FormPage.jsx";
import HomePage from "./views/HomePage.jsx";
import LadingPage from "./views/ladingPage.jsx";
import LoginPage from './views/LoginPage.jsx';

// Components
import Registro from "./components/auth/Registro.jsx";

function App() {
    
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
                    <HomePage />
                </>
            }></Route>

            {/* 4.-Ruta info especifica - DetailPage */}
            <Route path="/detailPage" element={
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
                    <LoginPage/>
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
