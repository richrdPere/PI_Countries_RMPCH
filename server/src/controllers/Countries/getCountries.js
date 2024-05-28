// Importamos los Modelos
const { Country } = require('../../db');

// Importamos la API
// const jsonCountries = require('../../api/db.json')

exports.getCountries = async (req, res) => {
    // Obtenemos un arreglo de objetos
    try {
         // Query del modelo Country para obtener todos los Paises
        const countries = await Country.findAll();

        if(countries){
            // Return the array of country objects as a response
            return res.status(200).json(countries);
        }
        return res.status(404).json({ error: "No encontrado" });

    } catch (error) {
        console.error('Error fetching countries:', error);
        return res.status(500).json(error.message);
    }
};

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info