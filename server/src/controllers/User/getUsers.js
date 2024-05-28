// Importa los modelos Activity, Country, y Tour
const { User } = require('../../db');

exports.getUsers = async (req, res) => {
    
    try {
       // Obtenemos todas las actividades turísticas desde la base de datos
        const users = await User.findAll();

        if (users.length === 0) {
            // Si no se encuentran actividades, enviamos un mensaje en formato JSON
            return res.status(404).json({ message: 'No se encuentran Usuarios Registrados...' });
        }


        // Enviamos la respuesta con el arreglo de objetos de actividades turísticas y los nombres de los países relacionados
        res.json(users);
        

    } catch (error) {
      return res.status(500).json(error.message);
    }
};

//     /:id => params
//  query ===> ?name=name&raza=raza
//  body  ===> info