import React from "react";
import { Pagination_Container, Pagination_Button } from "./PaginationStyle";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Crear un array, con un index de pagina segun el total de páginas
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );

    return (
        <Pagination_Container>
            {/* Botón "Anterior" */}
            <Pagination_Button
                $active={true}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </Pagination_Button>

            {/* Mapear los números de página y renderizar los botones */}
            {pageNumbers.map(pageNumber =>
                <Pagination_Button
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => onPageChange(pageNumber)}
                    isHovered={pageNumber === currentPage}
                    >
                    {pageNumber}
                </Pagination_Button>
            )}

            {/* Botón "Siguiente" */}
            <Pagination_Button
                $active={true}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Siguiente
            </Pagination_Button>
        </Pagination_Container>
    );
};

export default Pagination;
