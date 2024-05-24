import { GET_USERS_SUCCESS, CREATE_USER_SUCCESS } from '../actions/loginActions';

// Estado inicial del reducer
const initialState = [];

// Reducer para las actividades
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      // Actualiza el estado con los usuarios obtenidas
      return action.payload;
    case CREATE_USER_SUCCESS:
      // Agrega la nueva usuarios al estado
      return [...state, action.payload];
    default:
      return state;
  }
};

export default loginReducer;