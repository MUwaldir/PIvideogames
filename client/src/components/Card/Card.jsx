function Card() {
    return ( <>
    
    <div className="card" key={el.id}>
          <img src={el.imagen} alt="Imagen del videojuego" />
          <div className="card-info">
            <h2>{el.nombre}</h2>
            <p>Género: {el.genero}</p>
          </div>
        </div>
    </> );
}

export default Card;