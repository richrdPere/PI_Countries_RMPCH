const { Country, Activity } = require("../../db");

exports.deleteActivity = async (req, res) => {

    // Obtenemos los datos del Body dentro de la solicitud
    //const { name, type, difficulty, duration, season, countries } = req.body;
    
    // Arreglo de Paises
    //let countriesArray = [];
    
    try{
        // Recuperar el ID
        const { id } = req.params;

        if (!id)
            return res.status(409).json({ error: "Falta el ID" });

        await Activity.destroy({
            where: { id }
        })

        const allActivities = await Activity.findAll();
        
        return res.status(204).json(allActivities);

    } catch(error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
