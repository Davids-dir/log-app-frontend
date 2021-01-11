// Importo las dependencias necesarias
import React, { useEffect, useState } from 'react';
import * as RxIcons from 'react-icons/ri';
import Moment from 'react-moment';


// Importo la hoja de estilos
import './AdminProfile.scss';
import Register from './RegisterForm/RegisterForm';
import Modify from './ModifyForm/ModifyForm';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';


// Componente para la gestion de los empleados
const AdminProfile = () => {

    // Hooks para desplegar las opciones del panel de gestion de empleados
    const [showMenu, setShowMenu] = useState(false);
    const [newEntry, setNewEntry] = useState(false);
    const [modifyEntry, setModifyEntry] = useState(false);
    const [deleteEntry, setDeleteEntry] = useState(false);

    // Hook para mostrar el recuadro de perfil y eliminar un empleado
    const [showUser, setShowUser] = useState(JSON.parse(localStorage.getItem('search_res')))

    // Eventos en el DOM
    const eventRoster = () => setShowMenu(!showMenu)
    const eventNewEntry = () => setNewEntry(!newEntry)
    const eventModify = () => setModifyEntry(!modifyEntry)
    const eventDelete = () => setDeleteEntry(!deleteEntry)

    // Función para eliminar a un empleado de la base de datos
    const deleteUser = () => {

        axios.delete('http://localhost:8000/api/admin/delete/' + showUser.id)
            .then(res => (res.data))
            .catch(error => console.log(error))
    }

    

    return (

        <div className='manage-container' >

            <div className="button-container">
                <button id='button-manage' type='button' onClick={eventRoster}>Gestionar empleados</button>
            </div>

            {/* Panel que se muestra si el estado del HOOK de empleados pasa a TRUE */}
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
                    {showUser ?
                        <div className="data-response-search">
                            <div className="close-window">
                                <div id="close-modal-user"><RxIcons.RiCloseLine onClick={() => localStorage.removeItem('search_res')} /></div>
                            </div>
                            <div className="show-data-response-search"><b>Nombre del empleado: &nbsp;</b>{showUser.name} {showUser.last_name}</div>
                            <div className="show-data-response-search"><b>Departamento: &nbsp;</b>{showUser.departments[0].department}</div>
                            <div className="show-data-response-search"><b>Jornada: &nbsp;</b>{showUser.contract}</div>
                            <div className="show-data-response-search"><b>Antigüedad en la empresa: &nbsp;</b><Moment format="DD MMMM YYYY">{showUser.created_at}</Moment></div>
                            <div className="show-data-response-search"><button id="delete-button" type="submit" onClick={() => deleteUser()}>Eliminar</button></div>
                        </div>
                        :
                        null}
                </div>
                :
                null}
        </div>
    )
}

// Exporto el componente
export default AdminProfile;