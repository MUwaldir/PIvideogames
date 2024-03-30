// Importa los modelos y la conexión de Sequelize
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
// const getGamesData = require('./saveVideoGameData');
const fs = require("fs");
const games = require("../../games");

// Función para insertar datos en las tablas
const URL = "https://api.rawg.io/api/games";

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
    // console.log(dataG)
    return dataG;
  } catch (error) {
    console.error(
      `Error al obtener la descripción del juego con ID ${id}:`,
      error
    );
    return "Sin descripción";
  }
};

const insertData = async () => {
  try {
    // Insertar datos en la tabla Videogame

    // let allGames = [];
    // for (let i = 1; i < 6; i++) {
    //   let apiData =  await axios(URL+`?key=${API_KEY}&page=${i}`)

    //   const pageGames = await Promise.all(apiData.data.results.map(async (gam,index) => {

    //             const descripcion = await getGameDescription(gam.id);
    //             const dataGenres = await getDataGenres(gam.id);
    //         return {
    //              id:index,
    //             idApi: gam.id,
    //             nombre: gam.name,
    //             descripcion: descripcion,
    //             plataformas:gam.platforms?.[0]?.platform.name || "Sin plataforma",
    //             imagen:gam.background_image,
    //             fecha_de_lanzamiento: gam.released,
    //             rating:gam.rating,
    //             genre: dataGenres,

    //           }

    //       }));

    //       allGames = [...allGames, ...pageGames];

    // }
    // const fileContent = `const games = ${JSON.stringify(allGames, null, 2)};\n\nmodule.exports = games;`;

    // fs.writeFile('games.js', fileContent, (err) => {
    //     if (err) {
    //     console.error('Error al guardar el archivo:', err);
    //     } else {
    //     return console.log('Archivo guardado exitosamente: games.js dejjj');
    //     }
    // });

    // return allGames;
    // const videogames = allGames;
    // const videogames = games;

    // const createdVideogames = await Videogame.bulkCreate(videogames);
    // const createdVideogames = await Videogame.bulkCreate(games);

    // Insertar datos en la tabla Genre
    const genres = [
      { id: 4, nombre: "Action" },
      { id: 51, nombre: "Indie" },
      { id: 3, nombre: "Adventure" },
      { id: 5, nombre: "RPG" },
      { id: 10, nombre: "Strategy" },
      { id: 2, nombre: "Shooter" },
      { id: 40, nombre: "Casual" },
      { id: 14, nombre: "Simulation" },
      { id: 7, nombre: "Puzzle" },
      { id: 11, nombre: "Arcade" },
      { id: 83, nombre: "Platformer" },
      { id: 59, nombre: "Massively Multiplayer" },
      { id: 1, nombre: "Racing" },
      { id: 15, nombre: "Sports" },
      { id: 6, nombre: "Fighting" },
      { id: 19, nombre: "Family" },
      { id: 28, nombre: "Board Games" },
      { id: 34, nombre: "Educational" },
      { id: 17, nombre: "Card" },
    ];

    const createdGenres = await Genre.bulkCreate(genres);
    // await Genre.bulkCreate(genres)
    // Crear varios videojuegos
    const createdVideogames = await Promise.all(
      games.map(async (videogameData) => {
        // Extraer los datos del videojuego
        const { genre, ...videogameDetails } = videogameData;

        // Crear el videojuego en la base de datos
        const createdVideogame = await Videogame.create(videogameDetails);

        // Crear o encontrar los géneros y asociarlos al videojuego
        if (genre && genre.length > 0) {
          const createdGenres = await Promise.all(
            genre.map(async (genreName) => {
              // Buscar el género en la base de datos
              let foundGenre = await Genre.findOne({
                where: { nombre: genreName },
              });

              // Si no se encuentra, se crea
              if (!foundGenre) {
                foundGenre = await Genre.create({ nombre: genreName });
              }

              return foundGenre;
            })
          );

          // Asociar los géneros al videojuego
          await createdVideogame.addGenres(createdGenres);
        }

        return createdVideogame;
      })
    );

    // Asociar los géneros a los videojuegos

    // Obtener los IDs de los registros creados en Videogame y Genre
    // const videogameIds = createdVideogames.map((videogame) => videogame.id);
    // const genreIds = createdGenres.map((genre) => genre.id);
    // console.log(videogameIds, genreIds);
    // // Asociar los registros en la tabla intermedia
    // await Promise.all(
    //   videogameIds.map((videogameId) => {
    //     return Videogame.findByPk(videogameId).then((videogame) => {
    //       const genresToAdd = createdGenres.filter((genre) =>
    //         videogame.genre.includes(genre.nombre)
    //       );
    //       return videogame.addGenres(genresToAdd);
    //     });
    //   })
    // );

    return console.log("Datos insertados correctamente");
  } catch (error) {
    console.error("Error al insertar los datos:", error);
  }
};

module.exports = insertData;
