import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination";
import SearchBar from "../searchBar/SearchBar";
import {
  DeleteFilteredDataGenre,
  filterGenre,
  getDataBD,
  getVideogame,
} from "../../redux/actions";

import { getdataName } from "../../redux/actions";

function Home({ currentPage, setCurrentPage }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const dataAll = useSelector((state) => state.dataVideogames);
  const dataFilterGenre = useSelector((state) => state.filterVidegameByGenre);
  const dataFilterNombre = useSelector((state) => state.filterName);

  const dataBd = useSelector((state) => state.dataBD);
  const datName = useSelector((state) => state.dataName);
  const genres = useSelector((state) => state.genres);

  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [sortRating, setSortRating] = useState("");
  const [sortOrigen, setSortOrigen] = useState("");
  useEffect(() => {
    dispatch(getVideogame())
  }, []);

  useEffect(() => {
    if (dataFilterNombre) {
      setSortedData(dataFilterNombre);
    }
  },[dataFilterNombre])

  useEffect(() => {
    console.log("hi");
    // setSortedData([...dataAll, ...dataBd]);
    setSortedData(dataAll);

    setIsLoading(false);
  }, [dataAll]);

  const handleShowAll = () => {
    setSortedData(dataAll);
    dispatch(DeleteFilteredDataGenre());
    setIsLoading(false);
  };

  const searchName = (name) => {
    // const filteredData = dataAll.filter((item) =>
    //   item.nombre.toLowerCase().includes(name.toLowerCase())
    // );
    dispatch(getdataName(name));
  };

  useEffect(() => {
    if (dataFilterGenre) {
      setSortedData(dataFilterGenre);
    }
  }, [dataFilterGenre]);

  useEffect(() => {
    setSortedData(datName);
    console.log(datName);
  }, [datName]);

  // codigo para ordenar alfabeticamente
  const sortData = () => {
    console.log(sortOrder);
    const sorted = [...sortedData].sort((a, b) => {
      if (sortOrder === "desc") {
        return a.nombre.localeCompare(b.nombre);
      } else if (sortOrder === "asc") {
        return b.nombre.localeCompare(a.nombre);
      }
      return 0;
    });
    setSortedData(sorted);
  };
  const handleChangeOrdenar = (e) => {
    const order = e.target.value;
    setSortOrder(order);
  };

  useEffect(() => {
    sortData();
    setIsLoading(false);
  }, [sortOrder]);

  // codigo para traer los vidoegames de la BD

  const handleChangeTraer = (e) => {
    const order = e.target.value;
    setSortOrigen(order);
    console.log(sortOrigen);
  };
  console.log(dataAll);
  console.log(dataFilterGenre)
  const Origen = () => {
    console.log(sortOrigen);
    if (sortOrigen === "api") {
      setSortedData(dataAll);
    } else if (sortOrigen === "bd") {
      if (dataBd.length === 0) {
        alert("La base de  datos no tiene elementos");
        setSortedData(sortedData);
      } else {
        setSortedData(dataBd);
      }
    }
  };

  useEffect(() => {
    dispatch(getDataBD());
    setIsLoading(false);
    Origen();
  }, [sortOrigen]);

  // COdigo para filtrar por rating
  const sortRatin = () => {
    if (sortRating === "asc") {
      const dataRating = [...sortedData].sort((a, b) => a.rating - b.rating);
      setSortedData(dataRating);
    } else if (sortRating === "desc") {
      const dataRating = [...sortedData].sort((a, b) => b.rating - a.rating);
      setSortedData(dataRating);
    }
  };

  const handleChangeRating = (e) => {
    const order = e.target.value;

    setSortRating(order);
  };

  useEffect(() => {
    sortRatin();
    setIsLoading(false);
  }, [sortRating]);

  // filtro por genero
  const [selectedGenre, setSelectedGenre] = useState("");
  useEffect(() => {
    // filterGenre();
    dispatch(filterGenre(selectedGenre));
    setIsLoading(false);
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    console.log(event.target.value);
  };

  // const filterGenre = () => {
  //   const filteredGames = selectedGenre
  //     ? [...dataAll, ...dataBd].filter((game) =>
  //         game.genre.includes(selectedGenre)
  //       )
  //     : [...dataAll, ...dataBd];

  //   if (filteredGames.length !== 0) {
  //     setSortedData(filteredGames);
  //   } else if (filteredGames.length === 0 && selectedGenre !== "") {
  //     alert(`no existe videjuego con el genero ${selectedGenre}`);
  //     setSortedData(sortedData);
  //   }
  // };
  // console.log(genres)
  return (
    <div>
      <div>
        <SearchBar  />
      </div>
      <div className="all">
        <button onClick={handleShowAll}>Mostrar Todo</button>
      </div>
      <div>
        <h2>FILTRO</h2>
        <div className="boxFiltro">
          {/* html para el origen de la api o la bd */}
          <div className="origen">
            <select onChange={handleChangeTraer}>
              <option value="">Origen</option>
              <option value="api">Api</option>
              <option value="bd">BD</option>
            </select>
          </div>
          {/* para filtrar por el rating */}
          <div className="rating">
            <select onChange={handleChangeRating}>
              <option value="">Rating</option>
              <option value="asc">Rating Asc</option>
              <option value="desc">Rating Desc</option>
            </select>
          </div>

          {/* para ordenar de forma alafabetica */}
          <div className="ordenar">
            <select onChange={handleChangeOrdenar}>
              <option value="">Alfabetico</option>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>

          {/* <div className="generos">
            <select id="generos" onChange={handleGenreChange}>
              <option value="">Generos</option>
              <option value="Action">Action</option>
              <option value="Indie">Indie</option>
              <option value="Adventure">Adventure</option>
              <option value="RPG">RPG</option>
              <option value="Strategy">Strategy</option>
              <option value="Shooter">Shooter</option>
              <option value="casual">Casual</option>
              <option value="Simulation">Simulation</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Arcade">Arcade</option>
              <option value="Platformer">Platformer</option>
              <option value="Massively Multiplayer">
                Massively Multiplayer
              </option>
              <option value="Racing">Racing</option>
              <option value="Sports">Sports</option>
              <option value="Fighting">Fighting</option>
              <option value="Family">Family</option>
              <option value="Board Games">Board Games</option>
              <option value="Educational">Educational</option>
              <option value="Card">Card</option>
            </select>
          </div> */}
          <div className="generos">
            <select name="genres" id="genres" onChange={handleGenreChange}>
              {genres.map((genre) => (
                <option value={genre.nombre}>{genre.nombre}</option>
              ))}
            </select>
          </div>
        </div>
        <h1 className="title_videogames">LISTA DE VIDEOJUEGOS</h1>
      </div>
      <div className="card-list">
        {isLoading ? (
          <Spinner />
        ) : (
          <Pagination
            data={sortedData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
