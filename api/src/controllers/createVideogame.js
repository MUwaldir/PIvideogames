const {Videogame} = require("../db")

const createVideogame = async (req,res) => {
    const {nombre,descripcion,plataformas,imagen,fecha_de_lanzamiento,rating} = req.body;

    try {
       const newVideogame = await Videogame.create({
        nombre,descripcion,plataformas,imagen,fecha_de_lanzamiento,rating,
       })
        res.status(200).json(newVideogame);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }

}


module.exports = createVideogame;