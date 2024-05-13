// Librerias
const { Router } = require("express");
const router = Router();
// Controllers
const { getCountries } = require('../controllers/getCountries');
const { getCountriesByIdPais } = require('../controllers/getCountriesByIdPais');
const { getCountriesByName } = require('../controllers/getCountriesByName');
const { getActivities } = require('../controllers/getActivities');
const { postActivities } = require('../controllers/postActivities');


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
// 4.- POST| /activities
// ------------------------------
router.post('/activities', postActivities); // Falta

// ------------------------------
// 5.- GET| /activities
// ------------------------------
router.get('/activities', getActivities) // Falta


module.exports = router;

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info