import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer'; // Importar el reducer de países
import activitiesReducer from './activitiesReducer'; // Importar el reducer de actividades
import loginReducer from './loginReducer'; // Importar el reducer de login
// Combinación de reducers
const rootReducer = combineReducers({
  countries: countriesReducer, // Agrega el reducer de países bajo la clave 'countries'
  activities: activitiesReducer, // Agrega el reducer de actividades bajo la clave 'activities'
  login: loginReducer, // Agrega el reducer de users bajo la clave 'login' 
});

export default rootReducer;