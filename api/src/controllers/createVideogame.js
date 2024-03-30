const { Videogame, Genre } = require("../db");

const createVideogame = async (req, res) => {
  const {
    nombre,
    descripcion,
    plataformas,
    imagen,
    fecha_de_lanzamiento,
    rating,
    genre,
  } = req.body;
console.log(req.body);
  // const genre = ['uno','dos','tres']
  try {
    //  se utiliza el método findOne de Sequelize para buscar un videojuego existente
    const existingVideogame = await Videogame.findOne({
      where: { nombre: nombre.toLowerCase() },
    });
    if (existingVideogame) {
      return res
        .status(400)
        .json({ message: `El videojuego con el nombre "${nombre}" ya existe` });
    }

    const newVideogame = await Videogame.create({
     
      nombre,
      descripcion,
      plataformas,
      imagen,
      fecha_de_lanzamiento,
      rating,
    });
    const createdGenres = await Promise.all(
      genre.map((genreName) =>
        // Genre.create({
        //   nombre: genreName,
        // })
        {
          return Genre.findOrCreate({ where: { nombre: genreName } });
        }
      )
    );

    // Obtener los IDs de los géneros creados
    const genreIds = createdGenres.map((genre) => genre[0].id);

    // 3. Asociar los géneros al videojuego

    await newVideogame.addGenres(genreIds);

    res.status(200).json(newVideogame);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
};

module.exports = createVideogame;
