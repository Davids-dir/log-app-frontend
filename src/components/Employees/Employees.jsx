// Importo las dependencias necesarias
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Importo la hoja de estilos
import './Employees.scss';


// Componente para la gestion de los empleados
const Manage = () => {

    // Hook para desplegar las opciones del panel de gestion de empleados
    const [showMenu, setShowMenu] = useState(false);
    const [newEntry, setNewEntry] = useState(false);
    const [modifyEntry, setModifyEntry] = useState(false);
    const [deleteEntry, setDeleteEntry] = useState(false);

    // Hook de registro
    const [user, setUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        department: '',
        contract: '',
    })

    // Hook de busqueda
    const [search, setSearch] = useState({ name: '' })

    // Funcion para cambiar el estado de los HOOKS
    const eventRoster = () => setShowMenu(!showMenu)
    const eventNewEntry = () => setNewEntry(!newEntry)
    const eventModify = () => setModifyEntry(!modifyEntry)
    const eventDelete = () => setDeleteEntry(!deleteEntry)

    // Evento en el DOM
    // Añado la informacion del EVENT TARGET sobre el objeto User
    const handleEvent = e => { setUser({ ...user, [e.target.name]: e.target.value }) }

    // Evento donde recojo la informacion del input de Busqueda para eliminar empleados de la DB
    const handleSearch = e => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    // Función que emplea el POST hacia la DB para registrar un nuevo empleado
    const sendData = () => {

        axios.post('http://localhost:8000/api/user/register', user)

            .then(res => res.data, { message: 'Empleado registrado correctamente' })
            .catch(error => (console.log(error)))
    };

    // Función que realiza un PUT para modificar/actualizar un empleadoe en la Base de datos
    const updateData = () => {

        axios.put('http://localhost:8000', user)

            .then(res => res.data)
            .catch(error => console.log(error))
    }

    // Función que realiza un GET para buscar un empleado concreto y que le pasamos el valor almacenado del Hook SEARCH
    const getData = () => {

        axios.post('http://localhost:8000/api/user/search_one', search)

            .then(res => res.data)
            .catch(error => console.log(error))
    }


    return (

        <div className='manageContainer' >
            <div className="buttonContainer1">
                <button className='buttonManage' type='button' onClick={eventRoster}>Gestionar empleados</button>
            </div>

            {/* Panel que se muestra si el estado del HOOK de empleados pasa a TRUE */}
            { showMenu ?
                <div className="manageRoster">

                    <Link to='#' onClick={eventNewEntry}>Registrar un empleado</Link>

                    {/* Mostramos un formulario de Registro en caso de que se quiera dar de alta un nuevo empleado */}
                    {newEntry ?
                        <div className="newEntry">
                            <form className="formEntry">
                                <label htmlFor="">Nombre</label>
                                <input type="text" name="name" onChange={handleEvent} />
                                <label htmlFor="">Apellidos</label>
                                <input type="text" name="last_name" onChange={handleEvent} />
                                <label htmlFor="">Correo electrónico</label>
                                <input type="mail" name="email" onChange={handleEvent} />
                                <label htmlFor="">Contraseña</label>
                                <input type="password" name="password" onChange={handleEvent} />
                                <label htmlFor="">Departamento</label>
                                <select id="department" name="department" onChange={handleEvent}>
                                    <option value="" defaultValue hidden>Selecciona el departamento</option>
                                    <option value="administration">Administración</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="production">Producción</option>
                                    <option value="logistics">Logística</option>
                                </select>
                                <label htmlFor="">Tipo de contrato</label>
                                <select id="contract" name="contract" onChange={handleEvent}>
                                    <option value="" defaultValue hidden>Selecciona el tipo de jornada</option>
                                    <option value="full_time">Jornada Completa - 40h/semanales</option>
                                    <option value="half_time">Media Jornada - 20h/semanales</option>
                                    <option value="practices">Practicas - 8h/semanales</option>
                                </select>
                            </form>
                            <button className="sendButton" type="submit" onClick={() => updateData()}>Enviar</button>
                        </div>
                        :
                        <></>
                    }
                    <Link to='#' onClick={eventModify}>Modificar un empleado</Link>

                    {/* Muestra nuevamente un formulario para modificar los campos del empleado si fuese necesario */}
                    {modifyEntry ?
                        <div className="newEntry">
                            <form className="formEntry">
                                <label htmlFor="">Nombre</label>
                                <input type="text" name="name" onChange={handleEvent} />
                                <label htmlFor="">Apellidos</label>
                                <input type="text" name="last_name" onChange={handleEvent} />
                                <label htmlFor="">Correo electrónico</label>
                                <input type="mail" name="email" onChange={handleEvent} />
                                <label htmlFor="">Contraseña</label>
                                <input type="password" name="password" onChange={handleEvent} />
                                <label htmlFor="">Departamento</label>
                                <select id="department" name="department" onChange={handleEvent}>
                                    <option value="" defaultValue hidden>Selecciona el departamento</option>
                                    <option value="administration">Administración</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="production">Producción</option>
                                    <option value="logistics">Logística</option>
                                </select>
                                <label htmlFor="">Tipo de contrato</label>
                                <select id="contract" name="contract" onChange={handleEvent}>
                                    <option value="" defaultValue hidden>Selecciona el tipo de jornada</option>
                                    <option value="full_time">Jornada Completa - 40h/semanales</option>
                                    <option value="half_time">Media Jornada - 20h/semanales</option>
                                    <option value="practices">Practicas - 8h/semanales</option>
                                </select>
                            </form>
                            <button className="sendButton" type="submit" onClick={() => sendData()}>Enviar</button>
                        </div>
                        :
                        <></>
                    }
                    <Link to='#' onClick={eventDelete}>Dar de baja un empleado</Link>

                    {/* Muestra una barra de busqueda para localizar el empleado que queremos dar de baja en la DB */}
                    {deleteEntry ?
                        <div className="deleteEntry">
                            <div className="searchContainer">
                                <input className="searchInput" type="text" name="name" placeholder="Introduce el nombre completo..." onChange={handleSearch} />
                                <button className="searchButton" type="submit" onClick={() => getData()}>Buscar</button>
                            </div>
                        </div>
                        :
                        <></>
                    }
                </div>
                :
                <></>
            }

        </div>

    )
}

// Exporto el componente
export default Manage;