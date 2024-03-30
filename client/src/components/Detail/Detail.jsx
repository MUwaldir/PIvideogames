import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { getDetailID } from "../../redux/actions";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const dataApi = useSelector((state) => state.VideoGames);
  // const dataBD = useSelector((state) => state.dataBD);
  // const videogame = [...dataApi, ...dataBD].find((v) => v.idApi === Number(id));
  const videogame = useSelector((state) => state.selectVideogame);
  // if (!videogame) {
  //   return (
  //     <div className="containerNoseencontroDetail">
  //       {" "}
  //       <p>No se encontró el videojuego con ID {id}</p>{" "}
  //     </div>
  //   );
  // }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(getDetailID(id));
  }, []);
console.log(videogame)
  return (
    <>
    { videogame ? (

      <div className="detail-container">
        <div className="detail-image">
          <img src={videogame.imagen} alt={videogame.nombre} />
        </div>
        <div className="detail-content">
          <h1 className="detail-title">{videogame.nombre}</h1>
          <p
            className="detail-description"
            dangerouslySetInnerHTML={{ __html: videogame.descripcion }}
          ></p>
          <div className="detail-info">
            <p>
              <strong>Fecha de lanzamiento:</strong>{" "}
              {videogame.fecha_de_lanzamiento}
            </p>
            <p>
              <strong>Géneros:</strong>
            {videogame.genres && videogame.genres.map(genre => (
              <p> {genre.nombre}</p>
              ))}
              </p>
            <p>
              <strong>Plataformas:</strong> {videogame.plataformas}
            </p>
            <p>
              <strong>Rating:</strong> {videogame.rating}
            </p>
          </div>
        </div>
      </div>

    ):(
      <p>Cargando ...</p>
    )}
    </>
  );
}

export default Detail;
