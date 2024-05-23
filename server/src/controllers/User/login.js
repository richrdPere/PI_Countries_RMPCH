const { User } = require("../../db");
 
exports.login = async (req, res) => {
    const { email, password } = req.query;

    
    try {
        if (!email || !password)
            return res.status(409).json({ error: "El email ya esta registrado" });

        const user = await User.findOne({
            where: { email }
        });

        console.log(`es ${user}`)

        if (!user) 
            return res.status(404).json({ error: "Usuario no encontrado" });

        return user.password === password 
        ? res.status(200).json({access: true})
        : res
            .status(403)
            .json({error: "Contraseña incorrecta"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: error.message});
    }
};