const { Country, Activity } = require("../db");

exports.postActivity = async (req, res) => {

    // Obtenemos los datos del Body dentro de la solicitud
    const { name, type, difficulty, duration, season, countries } = req.body;
    
    // Arreglo de Paises
    let countriesArray = [];
    
    try{
        
        // Crear la actividad turistica en la Base de datos
        const activity = await Activity.create({
            name,
            type,
            difficulty,
            duration,
            season,
        });

        // Si se proporcionan países, busca los países correspondientes en la base de datos
        if (countries && countries.length > 0) {
            countriesArray = await Country.findAll({
              where: {
                cca3: countries,
              },
            });
      
            // Relaciona la actividad turística con los países encontrados
            await activity.addCountries(countriesArray);
          }
      
          // Envía la respuesta con la actividad turística creada y los países relacionados
          return res.json({
            activity,
            countries: countriesArray,
        });

    } catch(error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
