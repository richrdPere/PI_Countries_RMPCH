import axios from 'axios';

// Acción para obtener países exitosamente
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';

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

// Thunk para buscar países por nombre
export const searchCountriesByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/name?name=${name}`);
        // Utiliza la acción existente de países para actualizar los resultados de la búsqueda
        dispatch({
            type: GET_COUNTRIES_SUCCESS, // Utiliza el mismo tipo de acción que obtiene los países
            payload: response.data,
        });
    } catch (error) {
        console.error('Error searching countries by name:', error);
    }
};