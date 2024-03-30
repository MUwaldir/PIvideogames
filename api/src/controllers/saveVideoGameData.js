const axios = require("axios");
const { Videogame  }= require("../db");
const games= require("../../games")
const fs = require('fs');

const getGamesData = async (req,res) => {
        try {
            const URL = "https://api.rawg.io/api/games?key=API_KEY"

            // let allGames = [];
            // for (let i = 1; i < 6; i++) {
            //     let apiData =  await axios(URL+`&page=${i}`)
            //     const pageGames = apiData.data.results.map((gam) => {
            //         return {
            //             idApi: gam.id,
            //             nombre: gam.name,
            //             descripcion: gam.description,
            //             plataformas:gam.platforms?.[0]?.platform.name || "Sin plataforma",
            //             imagen:gam.background_image,
            //             fecha_de_lanzamiento: gam.released,
            //             rating:gam.rating,
                        
            //         }
            //     });

            //     allGames = [...allGames, ...pageGames];
                
            // }
            // const fileContent = `const games = ${JSON.stringify(allGames, null, 2)};\n\nmodule.exports = games;`;

            // fs.writeFile('games.js', fileContent, (err) => {
            //     if (err) {
            //     console.error('Error al guardar el archivo:', err);
            //     } else {
            //     console.log('Archivo guardado exitosamente: games.js');
            //     }
            // });
            
            // return allGames;
           
            return games;
        } catch (error) {
            return {msg: error.message}
        }
};

const saveGamesData = async () =>{
    try {
        
    //    const allGames =await  getGamesData();
       
        // console.log(allGames);
       
        //  console.log(Genre)
        // console.log(games)
// const createVideogames =  await Videogame.create(games[0]);
       const createVideogames = await Videogame.bulkCreate(games).then().catch(error => console.log(error));
       return createVideogames;
    } catch (error) {
        return {msg: error.message}
    }
}

module.exports = saveGamesData ;