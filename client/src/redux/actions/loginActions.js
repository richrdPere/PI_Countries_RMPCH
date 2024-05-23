import axios from "axios";
//const axios = require('axios')

// Definición de los tipos de acción
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS"; // Acción para obtener a los usuarios exitosamente
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"; // Acción para crear un usuario exitosamente

// Action creator para obtener actividades exitosamente
export const getUsersSuccess = activities => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

// Action creator para la creación de actividad exitosa
export const createUserSuccess = activity => ({
    type: CREATE_USER_SUCCESS,
    payload: users,
});

// Thunk para obtener Usuarios
export const getUsers = () => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/login`);
        dispatch(getUsersSuccess(response.data)); // Llama al action creator para obtener actividades exitosamente
    } catch (error) {
        console.error("Error fetching activities:", error);
    }
};

// Thunk para crear una actividad
export const createUser = (activityData) => async dispatch => {
    try {
        const response = await axios.post(`http://localhost:3001/activities`,activityData);
        dispatch(createUserSuccess(response.data)); // Llama al action creator para la creación exitosa
    } catch (error) {
        console.error("Error creating activity:", error);
    }
};
