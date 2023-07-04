import React from "react";

import Card from "../Card/Card";
import "./Pagination.css";
function Pagination({ data, currentPage, setCurrentPage }) {
  const ArrayData = data;

  // const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 15;
  const totalPages = Math.ceil(ArrayData.length / cardsPerPage);

  // Calcular el índice de inicio y fin para las tarjetas de la página actual
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToDisplay = ArrayData.slice(startIndex, endIndex);

  // Función para cambiar a una página específica
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Generar los botones de página
  const pageButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    pageButtons.push(
      <button
        className="btnPagination"
        key={i}
        onClick={() => goToPage(i)}
        disabled={currentPage === i}
      >
        {i}
      </button>
    );
  }

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      <div className="pagination">
        <button
          className="btnPagination"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageButtons}
        <button
          className="btnPagination"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="containerVideogames">
        {cardsToDisplay.map((el, index) => (
          <Card
            key={index}
            nombre={el.nombre}
            image={el.imagen}
            id={el.id}
            genre={el.genre ? el.genre : []}
            rating={el.rating}
            idApi={el.idApi}
          />
        ))}
      </div>
      <div className="pagination2">
        <button
          className="btnPagination"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageButtons}
        <button
          className="btnPagination"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
