import React from "react";

// CSS
import '../../css/pagination.css'

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {

    // Crear un array, con un index de pagina segun el total de páginas 
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <div className="pagination__container">
            {/* Botón "Anterior" */}
            <button 
                className="pagination__button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>

            {/* Mapear los números de página y renderizar los botones */}
            {pageNumbers.map(pageNumber =>
                <button
                    className="pagination__button"    
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    >
                    {pageNumber}
                </button>
            )}

            {/* Botón "Siguiente" */}
            <button
                className="pagination__button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;
