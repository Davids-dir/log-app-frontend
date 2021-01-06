// Importo las dependencias necesarias
import React, { useState } from 'react';
import * as RxIcons from "react-icons/ri";

// Importo los datos que contiene el componente
import  { menuData }  from './NavbarData';

// Importo la hoja de estilos
import './Navbar.scss';


// Componente Navbar
const Navbar = ( ) => {

    // Hook para cambiar el estado del Menu
    const [ menu, setMenu ] = useState (false);

    // Hook en caso de que se haga Login con el rol de Administrador
    const [ admin, setAdmin ] = useState (JSON.parse (localStorage.getItem ('user')));

    // Logica para abrir o cerrar el Menu
    const showMenu = ( ) => setMenu (!menu);

    return (

        <div className="navContainer">
            <div className="navLogo-open">
                <RxIcons.RiMenu3Line onClick={ showMenu } />
            </div>

            {/* Contenido condicional a mostrar dependiendo de si el estado de 'MENU' es True o False */}
            <div className={ menu ? 'navMenu-active' : 'navMenu' }>
                <div className="navLogo-close">
                    <RxIcons.RiCloseFill onClick={ showMenu} />
                </div>
                <div className="navItems">
                    { menuData.map ((item, indexItem) => {
                        return (
                            <a key={ indexItem } className="navItem-data" href={ item.path }>{ item.title }</a>
                        )
                    })}
                </div>
            </div>
            <div className="navDesktop">
            { menuData.map ((item, indexItem) => {
                        return (
                            <a key={ indexItem } className="navItem-data" href={ item.path }>{ item.title }</a>
                        )
                    })}
            </div>
        </div>
                
    )
}

// Exporto el componente
export default Navbar;