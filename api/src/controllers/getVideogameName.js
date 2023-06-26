
// const { Op } = require("sequelize");
const {Videogame ,sequelize} = require("../db")

const getVideogameName = async (req,res) => {
        const { nombre } = req.query;
        console.log(nombre)

    try {
        const vigame = await Videogame.findAll({
            // where: {
            // //   nombre:  nombre
            //   nombre :{
            //     [Op.like]: `%${nombre}%`,
            //   },
            // },
            where: sequelize.where(
                sequelize.fn('LOWER', sequelize.col('nombre')),
                'LIKE',
                `%${nombre.toLowerCase()}%`
              ),

              limit:1,
          });
          console.log(vigame)
          if (!vigame) {
            return res.status(404).json({ msg: 'Videojuegos no encontrados' });
          }
      
          res.status(200).json(vigame);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }

}


module.exports = getVideogameName;