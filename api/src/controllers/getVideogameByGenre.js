const Videogame = require("../models/Videogame");
const Genre = require("../models/Genre");
const getVideogameByGenre = async (req, res) => {
    const {genreId} = req.params
  const videoGamesByGenre = await Videogame.findAll({
    include: [
      {
        model: Genre,
        where: { id: genreId }, // Filtrar por el ID del género deseado
      },
    ],
  });

  res.status(200).json(videoGamesByGenre);
};

module.exports = getVideogameByGenre;
