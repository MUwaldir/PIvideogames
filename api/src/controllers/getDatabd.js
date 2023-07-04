const { Videogame, Genre, VideogameGenre } = require("../db");

const getDatabd = async (req, res) => {
  try {
    //   const allVideogamesBD = await Videogame.findAll()
    // console.log(allVideogamesBD)

    const allVideogamesBD = await Videogame.findAll({
      include: {
        model: Genre,
        through: {
          model: VideogameGenre,
        },
      },
    });

    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(allVideogamesBD);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = getDatabd;
