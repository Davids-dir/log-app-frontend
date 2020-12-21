// Importo las dependencias necesarias
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';


// Importo la hoja de estilos
import './Header.scss';


// Contenedor Header
const Header = ( ) => {



    return (
        
        <div className="headerContainer">
            <div className="headerLogo"><a href="/">TIMERX</a></div>
            <div className="nullSpace1"><h1>Header</h1></div>
            <Navbar />
        </div>
    )
}

// Exporto el contenedor
export default Header;