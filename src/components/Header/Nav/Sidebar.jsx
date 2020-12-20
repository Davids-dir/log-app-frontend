// Importamos las dependencias necesarias
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { sidebarLinks } from './SidebarData';


// Importamos los iconos que vamos a emplear
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


// Importamos otros archivos
// import { SidebarData } from './SidebarData';
import './Sidebar.scss';


// Logica del componente
const Sidebar = ( ) => {

  // Hook de estado
  const [ sidebar, setSidebar ] = useState (false);

  // Funcion para cambiar el estado a 'true' del Sidebar
  const showSidebar = ( ) => setSidebar ( !sidebar );

  return (
    <>
      <IconContext.Provider value={{ color: '#000000' }}>
        <div className='sidebar-container'>
          <Link to='#' className='sidebar-icon'>
            <FaIcons.FaBars onClick={ showSidebar } />
          </Link>
        </div>
        <nav className={ sidebar ? 'sidebar-menu active' : 'sidebar-menu' }>
          <ul className='sidebar-menu-items' onClick={ showSidebar }>
            <li className='sidebar-toggle'>
              <Link to='#' className='sidebar-icon-active'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {/* Mapeo de los datos del SidebarData */}
            { sidebarLinks.map (( item, index ) => {
              
              return (
                <li key={ index } className={ item.className }>
                  <Link to={ item.path }>
                    { item.icon }
                    <span>{ item.title }</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

// Exportamos el componente para su uso
export default Sidebar;