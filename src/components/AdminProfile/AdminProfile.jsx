// Importo las dependencias necesarias
import React, { useEffect, useState } from 'react';


// Importo la hoja de estilos
import './AdminProfile.scss';
import Register from './RegisterForm/RegisterForm';
import Modify from './ModifyForm/ModifyForm';
import SearchBar from './SearchBar/SearchBar';


// Componente para la gestion de los empleados
const AdminProfile = () => {

    // Hooks para desplegar las opciones del panel de gestion de empleados
    const [showMenu, setShowMenu] = useState(false);
    const [newEntry, setNewEntry] = useState(false);
    const [modifyEntry, setModifyEntry] = useState(false);
    const [deleteEntry, setDeleteEntry] = useState(false);
    // const [showUser, setShowUser] = useState(JSON.parse(localStorage.getItem('search_res')))


    // Eventos en el DOM
    const eventRoster = () => setShowMenu(!showMenu)
    const eventNewEntry = () => setNewEntry(!newEntry)
    const eventModify = () => setModifyEntry(!modifyEntry)
    const eventDelete = () => setDeleteEntry(!deleteEntry)
    


    // Función para eliminar a un empleado de la base de datos




    return (

        <div className='manage-container' >

            <div className="button-container">
                <button id='button-manage' type='button' onClick={eventRoster}>Gestionar empleados</button>
            </div>

            {/* Panel que se muestra si el estado del Hook de empleados pasa a TRUE */}
            {showMenu ?
                <div className="options-container">
                    <button className="button-admin" onClick={eventNewEntry} >Registrar un empleado</button>
                    <button className="button-admin" onClick={eventModify}>Modificar un empleado</button>
                    <button className="button-admin" onClick={eventDelete}>Dar de baja un empleado</button>
                </div>
                :
                null}

            {/* Bloque del registro de nuevos empleados */}
            {newEntry ?
                <div className="new-entry">
                    <Register />
                </div>
                :
                null}

            {/* Bloque para modificar un empleado */}
            {/* Primero realiza una busqueda del empelado y posteriormente muestra un formulario donde podemos actualizar los datos de un empleado */}
            { modifyEntry ?
                <div className="update-entry">
                    <Modify />
                </div>
                :
                null}


            {/* Muestra una barra de busqueda para localizar el empleado que queremos dar de baja en la DB */}
            {deleteEntry ?
                <div className="delete-entry">
                    <div className="search-container">
                        <SearchBar />
                    </div>
                </div>
                :
                null}
        </div>
    )
}

// Exporto el componente
export default AdminProfile;