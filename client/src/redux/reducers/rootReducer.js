import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer'; // Importa el reducer de países
import activitiesReducer from './activitiesReducer'; // Importa el reducer de actividades

// Combinación de reducers
const rootReducer = combineReducers({
  countries: countriesReducer, // Agrega el reducer de países bajo la clave 'countries'
  activities: activitiesReducer, // Agrega el reducer de actividades bajo la clave 'activities'
});

export default rootReducer;