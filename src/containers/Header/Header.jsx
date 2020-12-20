// Importamos las dependencias necesarias
import React from 'react';
import Sidebar from '../../components/Header/Nav/Sidebar';


// Importo los estilos
import './Header.scss';

// Creamos el componente Header
const Header = ( ) => {

    return (
        <div className="headerContainer">
            <Sidebar/>
        </div>
    )

};

// Exportamos el componente
export default Header;