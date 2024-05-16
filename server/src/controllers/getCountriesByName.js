// Librerias
const { Sequelize } = require('sequelize');
const { Country } = require('../db');

exports.getCountriesByName = async (req, res) => {

    try {

        // Recuperamos el nombre por Query
        const { nameQuery } = req.query.name;

        //console.log(nameQuery);

        // Validar si existe un nombre
        if (!nameQuery) {
            return res.status(400).json({ error: 'Debe proporcionar el nombre de país...' });
        }

        // Obtenemos todos los paises que coinciden con el nombre recibido por query
        const countries = await Country.findAll({
            where: Sequelize.where(
                Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${nameQuery.toLowerCase()}%`
            ),
        });
      
        if (countries.length === 0) {
            return res.status(404).json({ message: 'País no registrado en la Base de Datos...' });
        }
      
        res.json(countries);
            
    } catch (error) {
        res.status(500).json(error.message);
    }
};
