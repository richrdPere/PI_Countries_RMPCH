const {User} = require("../../db");

exports.postUsers = async (req, res) => {
    try{
        const { email, password, nombres, lastName, country, continent} = req.body;
        
        if(!email || !password || !nombres || !lastName || !country || !continent  ) 
            return res.status(400).json({error: "Faltan datos"});

        const user = await User.create({
            email,
            password, 
            nombres,
            lastName,
            country,
            continent
        });

        console.log(user);
    

        // if(!created){
        //     return res.status(409).json({error: "El email ya esta registrado"})
        // }
        return res.status(200).json({ created: "sucess", user});

    } catch(error) {
        return res.status(500).json({error: error.message});
    }
}