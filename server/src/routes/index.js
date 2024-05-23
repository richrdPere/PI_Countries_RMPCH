// Librerias
const { Router } = require("express");
const router = Router();
// Controllers
const { getCountries } = require('../controllers/getCountries');
const { getCountriesByIdPais } = require('../controllers/getCountriesByIdPais');
const { getCountriesByName } = require('../controllers/getCountriesByName');
const { getActivity } = require('../controllers/getActivity');
const { postActivity } = require('../controllers/postActivitiy');

const { login } = require('../controllers/User/login');
const { postUsers} = require('../controllers/User/postUsers');

// -------------------------
// 1.- GET| /countries
// -------------------------
router.get('/countries', getCountries)

// ------------------------------
// 2.- GET| /countries/:idPais
// ------------------------------
router.get('/countries/:cca3', getCountriesByIdPais);

// ------------------------------
// 3.- GET| /countries/name="..."
// ------------------------------
router.get('/name', getCountriesByName); // Falta

// ------------------------------
// 4.- GET| /activities
// ------------------------------
router.get('/activities', getActivity); 

// ------------------------------
// 5.- POST| /activities
// ------------------------------
router.post('/activities', postActivity);

// ------------------------------
// 5.- GET| /login
// ------------------------------
router.get('/login', login);

// ------------------------------
// 6.- POST| /login
// ------------------------------
router.post('/login', postUsers);



module.exports = router;

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info