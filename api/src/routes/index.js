const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames');
const getGenres = require('../controllers/getGenres');
const createVideogame = require('../controllers/createVideogame');
const getVideogameId = require('../controllers/getVideogameId');
const getVideogameName = require('../controllers/getVideogameName');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("", (req,res) => res.send('hi welcome') )

// ruta GET /videogames

router.get("/videogames", getVideogames)

// ruta GET de /videogames/:idVideogame
router.get("/videogames/:idVideogame", getVideogameId)
// ruta GET /videogame/name?=""
router.get("/videogame/name", getVideogameName)

// RUTA POST /vidoegames
router.post("/videogames", createVideogame)
// ruta GET /genres

router.get("/genres" , getGenres)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
  