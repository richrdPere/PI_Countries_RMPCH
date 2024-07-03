// Librerias
const { Router } = require("express");
const router = Router();
// Controllers
// Countries
const { getCountries } = require('../controllers/Countries/getCountries');
const { getCountriesByIdPais } = require('../controllers/Countries/getCountriesByIdPais');
const { getCountriesByName } = require('../controllers/Countries/getCountriesByName');

// Activities
const { getActivity } = require('../controllers/Activities/getActivity');
const { postActivity } = require('../controllers/Activities/postActivitiy');
const { updateActivity } = require('../controllers/Activities/updateActivity');
const { deleteActivity } = require('../controllers/Activities/deteleActivity');

// Users
const { login } = require('../controllers/User/login');
const { postUsers} = require('../controllers/User/postUsers');
const { getUsers} = require('../controllers/User/getUsers');

// -------------------------
// 1.- GET| /countries | http://localhost:3001/countries
// -------------------------
router.get('/countries', getCountries)

// ------------------------------
// 2.- GET| /countries/:idPais | http://localhost:3001/countries/PER
// ------------------------------
router.get('/countries/:cca3', getCountriesByIdPais);

// ------------------------------
// 3.- GET| /countries/name="..." | http://localhost:3001/name?name=Peru
// ------------------------------
router.get('/name', getCountriesByName); // Falta

// ------------------------------
// 4.- GET| /activities | http://localhost:3001/activities
// ------------------------------
router.get('/activities', getActivity); 

// ------------------------------
// 5.- POST| /activities | 
// ------------------------------
router.post('/activities', postActivity);
router.put('/activities/:id', updateActivity);
router.delete('/activities/:id', deleteActivity);
router.get('activities/:id');

// ------------------------------
// 6.- GET| /login
// ------------------------------
router.get('/login', login);

// ------------------------------
// 7.- POST| /login
// ------------------------------
router.post('/register', postUsers);
router.get('/users', getUsers);



module.exports = router;

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info