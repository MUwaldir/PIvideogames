import { Link } from "react-router-dom";
import "./Card.css";
import { useSelector } from "react-redux";

function Card({ nombre, image, id, genres, rating, idApi }) {
  const genreFilter = useSelector((state) => state.genrefilter);
 
  return (
    <>
      <Link to={`/detail/${id}`} className="navbar-link">
        <div className="card" key={id}>
          <img src={image} alt="Imagen del videojuego" />
          <div className="card-info">
            <h2 className="nombre">{nombre}</h2>
            <p>
              Género:{genres.map((g) => (
                  <span className={g.nombre === genreFilter ? "accion" : ""}>
                    {g.nombre}
                  </span>
                ))
                .reduce((prev, curr) => [prev, ", ", curr])}
            </p>
            <p>Rating: {rating}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
