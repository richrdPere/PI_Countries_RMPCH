const { Country, Activity } = require("../../db");

exports.deleteActivity = async (req, res) => {

    // Obtenemos los datos del Body dentro de la solicitud
    //const { name, type, difficulty, duration, season, countries } = req.body;
    
    // Arreglo de Paises
    //let countriesArray = [];
    
    try{
        // Recuperar el ID
        const { id } = req.params;

        await Activity.destroy({
            where: {
                id,
            }
        })
        
        return res.status(204).json({ message: 'La actividad ha sido eliminado' });

    } catch(error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
