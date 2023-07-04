import { Link } from "react-router-dom";
import "./Card.css";

function Card({ nombre, image, id, genre, rating, idApi }) {
  return (
    <>
      <Link to={`/detail/${idApi}`} className="navbar-link">
        <div className="card" key={id}>
          <img src={image} alt="Imagen del videojuego" />
          <div className="card-info">
            <h2 className="nombre">{nombre}</h2>
            <p>Género: {genre.join(", ")}</p>
            <p>Rating: {rating}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
