const {User} = require("../../db");

exports.postUsers = async (req, res) => {
    try{
        const { email, password, nombres, lastName, countryUser, continent} = req.body;
        
        if(!email || !password || !nombres || !lastName || !countryUser || !continent  ) 
            return res.status(400).json({error: "Faltan datos"});

        const [user, created] = await User.findOrCreate({
            where: { email},
            defaults: {
                password, 
                nombres,
                lastName,
                countryUser,
                continent
            }
        });

        // console.log(user);

        // Sise proporciona un email, buscar si ya esiste
    

        if(!created){
            return res.status(409).json({error: "El email ya esta registrado"})
        }
        return res.status(200).json({ created: "sucess", user});

    } catch(error) {
        return res.status(500).json({error: error.message});
    }
}