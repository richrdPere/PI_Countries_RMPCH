import axios from "axios";
//const axios = require('axios')

// Definición de los tipos de acción
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // Acción para obtener a los usuarios exitosamente
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"; // Acción para crear un usuario exitosamente

// Action creator para obtener actividades exitosamente
export const getUsersSuccess = users => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

// Action creator para la creación de actividad exitosa
export const createUserSuccess = users => ({
    type: CREATE_USER_SUCCESS,
    payload: users,
});

// Thunk para obtener Usuarios
export const getUsers = () => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/users`);
        dispatch(getUsersSuccess(response.data)); // Llama al action creator para obtener actividades exitosamente
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// Thunk para crear una Usuarios
export const createUser = (userData) => async dispatch => {
    try {
        const response = await axios.post(`http://localhost:3001/register`, userData);
        dispatch(createUserSuccess(response.data)); // Llama al action creator para la creación exitosa
    } catch (error) {
        console.error("Error creating user:", error);
    }
};
