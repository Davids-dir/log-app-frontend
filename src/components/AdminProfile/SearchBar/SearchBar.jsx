// Importo las dependencias necesarias
import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

// Importo los estilos
import './SearchBar.scss';

const SearchBar = () => {
    return (
        <MDBCol classname="search-container" md="6">
            <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            </form>
            <div className="button-container">
                <button className="search-button">Buscar</button>
            </div>
        </MDBCol>
    );
}

export default SearchBar;