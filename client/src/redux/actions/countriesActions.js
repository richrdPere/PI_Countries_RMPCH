import axios from 'axios';

// Definición del tipo de acción
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS'; // Acción para obtener países exitosamente

// Action creator para obtener países exitosamente
export const getCountriesSuccess = countries => ({
    type: GET_COUNTRIES_SUCCESS,
    payload: countries,
});

// Thunk para obtener países
export const getCountries = () => async dispatch => {
    try {
        const response = await axios.get('http://localhost:3001/countries'); // Cambia la URL según tu configuración
        dispatch(getCountriesSuccess(response.data)); // Llama al action creator para obtener países exitosamente
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
};