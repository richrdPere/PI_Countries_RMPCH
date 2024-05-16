import { createStore, applyMiddleware } from 'redux'; // Importa funciones de Redux
import thunkMiddleware from 'redux-thunk'; // Importa Redux Thunk para manejar acciones asíncronas
import rootReducer from '../reducers/rootReducer'; // Importa el rootReducer

// Crea la tienda de Redux
const store = createStore(
  rootReducer, // Pasa el rootReducer como el reducer principal
  applyMiddleware(thunkMiddleware) // Aplica Redux Thunk como middleware para manejar acciones asíncronas
);

export default store; // Exporta la tienda