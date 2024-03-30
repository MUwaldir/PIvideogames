const { Router } = require("express");
const getVideogames = require("../controllers/getVideogames");
const getGenres = require("../controllers/getGenres");
const createVideogame = require("../controllers/createVideogame");
const getVideogameId = require("../controllers/getVideogameId");
const getVideogameName = require("../controllers/getVideogameName");
const getDatabd = require("../controllers/getDatabd");
const getVideogameByGenre = require("../controllers/getVideogameByGenre");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.get("", (req, res) => res.send("hi welcome"));

// ruta GET /videogames

router.get("/videogames", getVideogames);
// ruta GET /videogames/databd

router.get("/videogames/databd", getDatabd);

// ruta GET de /videogames/:idVideogame
router.get("/videogames/:idVideogame", getVideogameId);
// ruta GET /videogame/name?=""
router.get("/videogame/name", getVideogameName);
// get videogame por genre
router.get("/videogamebygenre/:genreId ", getVideogameByGenre);


// RUTA POST /vidoegames
router.post("/videogames", createVideogame);
// ruta GET /genres

router.get("/genres", getGenres);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
