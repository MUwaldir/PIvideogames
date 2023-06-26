const {Videogame,Genre, VideogameGenre} = require("../db")

const getVideogameId = async (req,res) => {
        const {idVideogame} = req.params;
    try {

        let game = await Videogame.findByPk(idVideogame, {
            include: {
              model: Genre,
              attributes: ['nombre'],
              through: { model: VideogameGenre, attributes: ['genreId'] }, // Especificar el modelo de la tabla intermedia
            },
        })
        // const game = await Videogame.findByPk(idVideogame);
      
          if (!game) {
            return res.status(404).json({ msg: 'Videojuego no encontrado' });
          }
      
          res.status(200).json(game);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }

}


module.exports = getVideogameId;