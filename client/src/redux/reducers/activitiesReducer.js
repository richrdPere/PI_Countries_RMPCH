import { GET_ACTIVITIES_SUCCESS, CREATE_ACTIVITY_SUCCESS } from '../actions/activitiesActions';

// Estado inicial del reducer
const initialState = [];

// Reducer para las actividades
const activitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVITIES_SUCCESS:
      // Actualiza el estado con las actividades obtenidas
      return action.payload;
    case CREATE_ACTIVITY_SUCCESS:
      // Agrega la nueva actividad al estado
      return [...state, action.payload];
    default:
      return state;
  }
};

export default activitiesReducer;