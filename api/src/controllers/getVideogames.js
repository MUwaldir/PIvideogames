const {Videogame} = require("../db")

const getVideogames = async (req,res) => {

    try {
        // const allVideogames = await Videogame.findAll({
        //     attributes: ['id','nombre']
        //   })
          const allVideogames = await Videogame.findAll()
        console.log(allVideogames)

        res.status(200).json(allVideogames);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }

}


module.exports = getVideogames;