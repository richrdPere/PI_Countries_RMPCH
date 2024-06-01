import axios from "axios";
//const axios = require('axios')

// Definición de los tipos de acción
export const GET_ACTIVITIES_SUCCESS = "GET_ACTIVITIES_SUCCESS"; // Acción para obtener actividades exitosamente
export const CREATE_ACTIVITY_SUCCESS = "CREATE_ACTIVITY_SUCCESS"; // Acción para crear una actividad exitosamente

// =====================================================================
// Action creator para obtener actividades exitosamente
export const getActivitiesSuccess = activities => ({
    type: GET_ACTIVITIES_SUCCESS,
    payload: activities,
});

// Action creator para la creación de actividad exitosa
export const createActivitySuccess = activity => ({
    type: CREATE_ACTIVITY_SUCCESS,
    payload: activity,
});


// =====================================================================
// Thunk para obtener actividades
export const getActivities = () => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:3001/activities`);
        dispatch(getActivitiesSuccess(response.data)); // Llama al action creator para obtener actividades exitosamente
    } catch (error) {
        console.error("Error fetching activities:", error);
    }
};

// Thunk para crear una actividad
export const createActivity = (activityData) => async dispatch => {
    try {
        const response = await axios.post(`http://localhost:3001/activities`,activityData);
        dispatch(createActivitySuccess(response.data)); // Llama al action creator para la creación exitosa
    } catch (error) {
        console.error("Error creating activity:", error);
    }
};
