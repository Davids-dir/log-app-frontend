// Importo las dependencias necesarias
import React, { useState } from 'react';
import * as RxIcons from "react-icons/ri";

// Importo los datos que contiene el componente
import NavbarData from './NavbarData';

// Importo la hoja de estilos
import './Navbar.scss';


// Componente Navbar
const Navbar = () => {

    // Hook para cambiar el estado del Menu
    const [menu, setMenu] = useState(false);

    // Logica para abrir o cerrar el Menu
    const showMenu = () => setMenu(!menu);

    return (

        <div className="navContainer">
            <div className="navLogo-open">
                <RxIcons.RiMenu3Line onClick={showMenu} />
            </div>

            {/* Contenido condicional a mostrar dependiendo de si el estado de 'MENU' es True o False */}
            <div className={menu ? 'navMenu-active' : 'navMenu'}>
                <div className="navLogo-close">
                    <RxIcons.RiCloseFill onClick={showMenu} />
                </div>
                <div className="navItems">
                    <NavbarData />
                </div>
            </div>
            <div className="navDesktop">
                <NavbarData />
            </div>
        </div>

    )
}

// Exporto el componente
export default Navbar;