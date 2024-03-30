import { useState } from "react";
import "./SearchBar.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByNombre } from "../../redux/actions";

export default function SearchBar(props) {
 const dispatch = useDispatch()
   const [nombre, setNombre] = useState("");
   const [error, setError] = useState("");

   const handleChange = (e) => {
     setNombre(e.target.value);
   };
   useEffect(() => {
        dispatch(filterByNombre(nombre))
   },[nombre])
 
   const handleSearch = () => {
     if (nombre.trim() === "") {
       setError("EL CAMPO ESTA VACIO");
     } else if (!/^[a-zA-Z]+$/.test(nombre)) {
       setError("EL CAMPO DEBE CONTENER SOLO LETRAS");
     } else {
       props.onSearch(nombre);
       setNombre("");
       setError("");
     }
   };
   const handleInputClick = () => {
      setError("");
    };

   return (
      <div className="container">
         <input
            type="text"
            name="search"
            id="search"
            value={nombre}
            onChange={handleChange}
            onClick={handleInputClick}
            className={error ? "input-error" : ""}

         />
         {error && <p className="error-message">{error}</p>}
         <button onClick={handleSearch}>Buscar</button>
      </div>
   );
}
