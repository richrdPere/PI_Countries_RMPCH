import { GET_COUNTRIES_SUCCESS } from '../actions/countriesActions';

// Estado inicial del reducer
const initialState = [];

// Reducer para los países
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_SUCCESS:
      // Actualiza el estado con los países obtenidos
      return action.payload;
    case 'GET_COUNTRIES_SUCCESS':
      // Agrega un nuevo caso para la acción de búsqueda (mismo resultado que el caso anterior)
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;