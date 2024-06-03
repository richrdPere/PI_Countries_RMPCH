import { createStore, applyMiddleware } from 'redux'; // Importa funciones de Redux
import thunk from 'redux-thunk'; // Importa Redux Thunk para manejar acciones asíncronas
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer'; // Importa el rootReducer

// Crea la tienda de Redux
// Pasansole como parametro nuestro Reducer.
const store = createStore(
  rootReducer, // Pasa el rootReducer como el reducer principal
  composeWithDevTools(applyMiddleware(thunk)) // Aplica Redux Thunk como middleware para manejar acciones asíncronas
);

export default store; // Exporta la tienda