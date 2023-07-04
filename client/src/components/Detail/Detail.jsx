import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Detail.css";
function Detail() {
  const { id } = useParams();

  const dataApi = useSelector((state) => state.VideoGames);
  const dataBD = useSelector((state) => state.dataBD);
  const videogame = [...dataApi, ...dataBD].find((v) => v.idApi === Number(id));
  if (!videogame) {
    return (
      <div className="containerNoseencontroDetail">
        {" "}
        <p>No se encontró el videojuego con ID {id}</p>{" "}
      </div>
    );
  }
  return (
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
            <strong>Género:</strong> {videogame.genre.join(", ")}
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
  );
}

export default Detail;
