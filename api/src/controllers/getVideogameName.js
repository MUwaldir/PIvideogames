// const { Op } = require("sequelize");
const axios = require("axios");
const { Videogame, Genre, VideogameGenre, sequelize } = require("../db");
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games";
const games = require("../../games");

const getVideogameName = async (req, res) => {
  const { nombre } = req.query;
  console.log(nombre);

  try {
    // const vigame = await Videogame.findAll({

    //     where: sequelize.where(
    //         sequelize.fn('LOWER', sequelize.col('nombre')),
    //         'LIKE',
    //         `%${nombre.toLowerCase()}%`

    //       ),

    //       limit:15,
    //   });
    //   console.log(vigame)

    // ******codigo que trae todos los videogames de la BD
    const allVideogamesBD = await Videogame.findAll({
      include: {
        model: Genre,
        through: {
          model: VideogameGenre,
        },
      },
    });
    console.log(allVideogamesBD);
    // codigo para traer todo la data desde la api
    // 'https://api.rawg.io/api/games?search={Grand Theft Auto V}?key=522b33a944064beaa8cfff977da271d0'
    // let VideogameName =  await axios(URL+`?search=${nombre}?key=${API_KEY}`)
    // funciones para completar los objetos description y generos
    const getGameDescription = async (id) => {
      try {
        const response = await axios(`${URL}/${id}?key=${API_KEY}`);
        return response.data.description;
      } catch (error) {
        console.error(
          `Error al obtener la descripción del juego con ID ${id}:`,
          error
        );
        return "Sin descripción";
      }
    };

    const getDataGenres = async (id) => {
      try {
        const response = await axios(`${URL}/${id}?key=${API_KEY}`);
        const dataGenres = response.data.genres;
        const dataG = dataGenres.map((ge) => {
          return ge.name;
        });

        return dataG;
      } catch (error) {
        console.error(
          `Error al obtener la descripción del juego con ID ${id}:`,
          error
        );
        return "Sin descripción";
      }
    };

    let allGamesApi = games;
    // let allGamesApi = [];
    //     for (let i = 1; i < 6; i++) {
    //       let apiData =  await axios(URL+`?key=${API_KEY}&page=${i}`)

    //       const pageGames = await Promise.all(apiData.data.results.map(async (gam,index) => {

    //                 const descripcion = await getGameDescription(gam.id);
    //                 const dataGenres = await getDataGenres(gam.id);
    //             return {
    //                 id:index,
    //                 idApi: gam.id,
    //                 nombre: gam.name,
    //                 descripcion: descripcion,
    //                 plataformas:gam.platforms?.[0]?.platform.name || "Sin plataforma",
    //                 imagen:gam.background_image,
    //                 fecha_de_lanzamiento: gam.released,
    //                 rating:gam.rating,
    //                 genre: dataGenres,

    //               }

    //           }));

    //           allGamesApi = [...allGamesApi, ...pageGames];

    //     }

    let dataAll = [...allGamesApi, ...allVideogamesBD];
    // codigo para seleccionar los 15 primeros
    const name = nombre.toLowerCase();

    const filteredData = dataAll.filter((obj) =>
      obj.nombre.toLowerCase().includes(name)
    );
    const first15Results = filteredData.slice(0, 15);
    if (!first15Results) {
      return res.status(404).json({ msg: "Videojuegos no encontrados" });
    }
    // console.log(first15Results)
    res.status(200).json(first15Results);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = getVideogameName;
