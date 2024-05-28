// Importa los modelos Activity, Country, y Tour
const { Activity, Country } = require('../../db');

exports.getActivity = async (req, res) => {
    
    try {
       // Obtenemos todas las actividades turísticas desde la base de datos
        const activities = await Activity.findAll({
        include: [
            {
            model: Country,
            attributes: ['name'],
            through: { attributes: [] }, // Omite las columnas adicionales de la tabla intermedia
            },
        ],
        });

        if (activities.length === 0) {
            // Si no se encuentran actividades, enviamos un mensaje en formato JSON
            return res.status(404).json({ message: 'No se encuentran actividades registradas' });
        }

        // Creamos un arreglo de objetos con las actividades y los nombres de los países relacionados
        const activitiesWithCountries = activities.map(activity => ({
            id: activity.id,
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season,
            countries: activity.Countries.map(country => country.name),
        }));

        // Enviamos la respuesta con el arreglo de objetos de actividades turísticas y los nombres de los países relacionados
        res.json(activitiesWithCountries);
        

    } catch (error) {
      return res.status(500).json(error.message);
    }
};

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info