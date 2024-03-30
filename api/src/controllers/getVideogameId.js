const { Videogame, Genre, VideogameGenre } = require("../db");

const getVideogameId = async (req, res) => {
  const { idVideogame } = req.params;
  try {
    // let game = await Videogame.findByPk(idVideogame, {
    //     include: {
    //       model: Genre,
    //       attributes: ['nombre'],
    //       through: { model: VideogameGenre, attributes: ['genreId'] }, // Especificar el modelo de la tabla intermedia
    //     },
    // })
    let game = await Videogame.findAll({
      // where: {
      //   idApi: idVideogame,
      // },
      where: {
        id: idVideogame,
      },
      include: {
        model: Genre,
        attributes: ["nombre"],
        through: { model: VideogameGenre, attributes: ["genreId"] }, // Especificar el modelo de la tabla intermedia
      },
    });
    // const game = await Videogame.findByPk(idVideogame);
console.log(game)
    if (!game) {
      return res.status(404).json({ msg: "Videojuego no encontrado" });
    }

    res.status(200).json(game);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = getVideogameId;
