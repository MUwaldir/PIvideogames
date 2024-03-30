import axios from "axios";
import { useState } from "react";
import "./Form.css";
import { validarNombre } from "../actions";
import { validateForm } from "./validaciones";
import { useSelector } from "react-redux";
function FormVideogame() {
  const [errors, setErrors] = useState({});
  const genres = useSelector((state) => state.genres);
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [plataformas, setPlataformas] = useState("");
  const [fecha_de_lanzamiento, setFechaLanzamiento] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenres] = useState([]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarNombre(nombre)) {
      alert("Por favor, Nombre no permitido.");
      return;
    }
    if (nombre === "") {
      alert("Por favor, ingresa el nombre del videojuego.");
      return;
    }

    if (rating <= 0 || rating > 10) {
      alert("El rating debe estar entre 1 y 10.");
      return;
    }

    // Crear el nuevo videojuego con los datos ingresados
    const nuevoVideojuego = {
      nombre,
      imagen,
      descripcion,
      plataformas,
      fecha_de_lanzamiento,
      rating: +rating,
      genre,
    };

    // antes de enviar validar
    const validationErrors = validateForm(nuevoVideojuego);
    console.log(validationErrors);
    console.log(nuevoVideojuego);
    if (Object.keys(validationErrors).length === 0) {
      // No hay errores, puedes continuar con el envío del formulario

      try {
        const response = await axios.post(
          "http://localhost:3001/videogames",
          nuevoVideojuego
        );

        // Verificar el estado de la respuesta
        if (response.status === 200) {
          alert("¡El nuevo videojuego ha sido creado!");
        }
      } catch (error) {
        // Error en la conexión o al procesar la respuesta
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          alert(error.response.data.message);
        } else {
          alert(
            "Hubo un error al conectar con el servidor. Por favor, inténtalo nuevamente."
          );
        }
      }
      // Reiniciar los campos del formulario después de enviar
      setNombre("");
      setImagen("");
      setDescripcion("");
      setPlataformas("");
      setFechaLanzamiento("");
      setRating("");
      setGenres([]);
    } else {
      // Se encontraron errores de validación, actualiza el estado con los errores
      setErrors(validationErrors);
    }
  };

  // Función para manejar la selección de géneros
  const handleGeneroChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setGenres(selectedOptions);
  };

  return (
    <>
      <div className="ContainerForm">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errors.nombre && <p className="error-message">{errors.nombre}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen:</label>
            <input
              type="text"
              id="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
            {errors.imagen && <p className="error-message">{errors.imagen}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripción:</label>
            {errors.descripcion && (
              <p className="error-message">{errors.descripcion}</p>
            )}
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="plataformas">Plataformas:</label>
            {errors.plataformas && (
              <p className="error-message">{errors.plataformas}</p>
            )}
            <input
              type="text"
              id="plataformas"
              value={plataformas}
              onChange={(e) => setPlataformas(e.target.value)}
            />
          </div>
          <div className="boxfecharating">
            <div className="form-group">
              <label htmlFor="fecha-lanzamiento">
                Fecha de <br></br> lanzamiento:
              </label>
              {errors.fechaLanzamiento && (
                <p className="error-message">{errors.fechaLanzamiento}</p>
              )}
              <input
                type="date"
                id="fecha-lanzamiento"
                value={fecha_de_lanzamiento}
                onChange={(e) => setFechaLanzamiento(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <br></br>
              {errors.rating && (
                <p className="error-message">{errors.rating}</p>
              )}
              <input
                type="number"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="generos">Géneros:</label>
            {errors.genre && <p className="error-message">{errors.genre}</p>}
            <p className="instructions">
              (Mantén presionada la tecla Ctrl/Cmd para seleccionar varias
              opciones)
            </p>
            <select
              multiple
              id="generos"
              value={genre}
              onChange={handleGeneroChange}
            >
              {genres.map((g) => (
                <option key={g.id} value={g.nombre}>
                  {g.nombre}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Crear nuevo videojuego</button>
        </form>
      </div>
    </>
  );
}

export default FormVideogame;
