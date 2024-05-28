const { Country, Activity } = require("../../db");

exports.updateActivity = async (req, res) => {

    // Obtenemos el id de params y de body
    const { id } = req.params;
    const { name, type, difficulty, duration, season} = req.body;

    // Verificar si los campos existen
    
    try{
        
        // Crear la actividad turistica en la Base de datos
        const activity = await Activity.create({
            name,
            type,
            difficulty,
            duration,
            season,
        });

        const newActivity = await Activity.findByPk(id);

        newActivity.name = name;
        newActivity.type = type;
        newActivity.difficulty = difficulty;
        newActivity.duration = duration;
        newActivity.season = season;

        await newActivity.save()

        return res.json(newActivity)

    } catch(error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
}
