// Librerias
const { Sequelize } = require('sequelize');
const { Country } = require('../db');

exports.getCountriesByName = async (req, res) => {

    try {

        // Recuperamos el nombre por Query
        const { name } = req.query;

        //console.log(name);

         
        // Validar si existe un nombre
        if (!name) {
            return res.status(400).json({ error: 'Debe proporcionar el nombre de país...' });
        }

        // Obtenemos todos los paises que coinciden con el nombre recibido por query
        const countries = await Country.findAll({
            where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${name.toLowerCase()}%`
            ),
        });
      
        if (countries.length === 0) {
            return res.status(404).json({ message: 'País no registrado en la Base de Datos...' });
        }
      
        res.json(countries);
            
    } catch (error) {
        console.error('Error al obtener los países:', error);
        res.status(500).json(error.message);
    }
};
