// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';


// Importo la hoja de estilos
import './AdminProfile.scss';
import Register from './RegisterForm/RegisterForm';
import Modify from './ModifyForm/ModifyForm';
import SearchBar from './SearchBar/SearchBar';


// Componente para la gestion de los empleados
const AdminProfile = () => {

    // Hook para desplegar las opciones del panel de gestion de empleados
    const [showMenu, setShowMenu] = useState(false);
    const [newEntry, setNewEntry] = useState(false);
    const [modifyEntry, setModifyEntry] = useState(false);
    const [deleteEntry, setDeleteEntry] = useState(false);

    // Hook de busqueda
    const [search, setSearch] = useState({ name: '' })

    // Funcion para cambiar el estado de los HOOKS
    const eventRoster = () => setShowMenu(!showMenu)
    const eventNewEntry = () => setNewEntry(!newEntry)
    const eventModify = () => setModifyEntry(!modifyEntry)
    const eventDelete = () => setDeleteEntry(!deleteEntry)


    // Evento donde recojo la informacion del input de Busqueda para eliminar empleados de la DB
    const handleSearch = e => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    // Función que realiza un GET para buscar un empleado concreto y que le pasamos el valor almacenado del Hook SEARCH
    const getData = () => {

        axios.post('http://localhost:8000/api/user/search_one', search)

            .then(res => res.data)
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
                    <button className="button-admin" onClick={eventNewEntry}>Registrar un empleado</button>
                    <button className="button-admin" onClick={eventModify}>Modificar un empleado</button>
                    <button className="button-admin" onClick={eventDelete}>Dar de baja un empleado</button>
                </div>
                :
                <></>
            }



            {/* DIV del registro de empleados */}
            {newEntry ?
                <div className="new-entry">
                    <Register />
                </div>
                :
                <></>
            }

            {/* Muestra nuevamente un formulario para modificar los campos del empleado si fuese necesario */}
            {
                modifyEntry ?
                    <div className="update-entry">
                        <Modify />
                    </div>
                    :
                    <></>
            }


            {/* Muestra una barra de busqueda para localizar el empleado que queremos dar de baja en la DB */}
            {
                deleteEntry ?
                    <div className="delete-entry">
                        <div className="search-container">
                            <SearchBar />
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    )
}

// Exporto el componente
export default AdminProfile;