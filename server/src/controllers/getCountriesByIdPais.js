// Importamos los Modelos
const { Activity, Country } = require("../db");

exports.getCountriesByIdPais = async (req, res) => {
    
    // Extraemos el id de req con Params
    const { cca3 } = req.params;

    try {

        // Query del modelo Country para el parametro cca3, junto a algunos datos de Activity
        const country = await Country.findOne({
            where: { cca3: cca3 },
            include: {
            model: Activity,
            attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
            },
        });
    
        // If the country is found, return it as a response
        if (country) {
            return res.status(200).json(country);
        } else {
            // If the country is not found, return a 404 Not Found response
            return res.status(404).json({ error: 'País no encontrado' });
        }

    } catch (error) {
      return res.status(500).json(error.message);
    }
};

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info

//#region 
        // Nombre de Pais
        // const nombre = jsonCountries.countries[0].name
        // const onlyName = nombre.common
        // console.log(onlyName);

        // Bandera de Pais
        //const flag = jsonCountries.countries[0].flags

        // Continente del Pais
        //const continent = jsonCountries.countries[0].region

        // Capital del Pais
        //const capital = jsonCountries.countries[0].capital

        // Subregion del Pais
        //const subRegion = jsonCountries.countries[0].subregion

        // Area del Pais
        //const area = jsonCountries.countries[0].area

        // Población del Pais
        //const population = jsonCountries.countries[0].population

        //#endregion