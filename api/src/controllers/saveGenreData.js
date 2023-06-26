const axios = require("axios");
const { Genre}= require("../db");
 const GenresPrueba = [
  { id: 4, nombre: 'Action' },
  { id: 51, nombre: 'Indie' },
  { id: 3, nombre: 'Adventure' },
  { id: 5, nombre: 'RPG' },
  { id: 10, nombre: 'Strategy' },
  { id: 2, nombre: 'Shooter' },
  { id: 40, nombre: 'Casual' },
  { id: 14, nombre: 'Simulation' },
  { id: 7, nombre: 'Puzzle' },
  { id: 11, nombre: 'Arcade' },
  { id: 83, nombre: 'Platformer' },
  { id: 59, nombre: 'Massively Multiplayer' },
  { id: 1, nombre: 'Racing' },
  { id: 15, nombre: 'Sports' },
  { id: 6, nombre: 'Fighting' },
  { id: 19, nombre: 'Family' },
  { id: 28, nombre: 'Board Games' },
  { id: 34, nombre: 'Educational' },
  { id: 17, nombre: 'Card' }
];
const getGenreData = async (req,res) => {
        try {
        // const URL = "https://api.rawg.io/api/genres?key=API_KEY"
        //   let allGenres = [];
            
        //         let apiData =  await axios(URL)
        //         const genreData = apiData.data.results.map((gen) => {
        //             return {
        //                 id: gen.id,
        //                 nombre: gen.name,
                        
                        
        //             }
        //         });

        //         allGenres = [...allGenres, ...genreData];

           
        //     return allGenres;
            return GenresPrueba
        } catch (error) {
            return {msg: error.message}
        }
};

const saveGenreData = async () =>{
    try {
        
       const allGenres =await  getGenreData();
       
        // console.log(allGenres);
        //  console.log(Genre)

       const createGenres = await Genre.bulkCreate(allGenres);
       
       
    //  console.log(createGenres[0].dataValues)
       
       return createGenres;
    } catch (error) {
        return {msg: error.message}
    }
}

module.exports = saveGenreData;