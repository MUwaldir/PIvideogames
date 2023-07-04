const { Genre } = require("../db");

const getGenres = async (req, res) => {
  try {
    const allGenres = await Genre.findAll();
    // console.log(allGenres)
    res.status(200).json(allGenres);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = getGenres;
