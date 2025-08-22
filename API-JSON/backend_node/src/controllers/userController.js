const User = require("../models/userModel");

exports.getUser = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error("Error obtenido usuarios: ", error);
        res.status(500).send("Error obteniendo usuarios");
    }
}; 

exports.getUserById = async (req, res) => {
    const userId = req.params.id;
    try{
        const user = await User.findByPk(userI);
        if (!user) {
            return res.status(404).send("usuario no encontrado");
        }
        res.json(user);
    } catch (error) {
        console.error("Error obtenido usuario: ", error);
        res.status(500).send("Error obtenido usuario");
    }
}; 
