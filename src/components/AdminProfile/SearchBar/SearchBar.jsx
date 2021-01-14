// Importo las dependencias necesarias
import React, { useState } from "react";
import axios from 'axios';
import { MDBCol, MDBIcon } from "mdbreact";
import * as RxIcons from 'react-icons/ri';
import Moment from 'react-moment';

// Importo los estilos
import './SearchBar.scss';


// Componente de busqueda de empleados
const SearchBar = () => {

    // Hook de busqueda de un trabajador
    const [search, setSearch] = useState({ email: '' });
    const [infoError, setInfoError] = useState('');
    const [showUser, setShowUser] = useState()


    // Evento donde recojo la informacion del input de Busqueda para eliminar empleados de la DB
    const handleSearch = e => { setSearch({ ...search, [e.target.name]: e.target.value }) }

    // Función que realiza un GET para buscar un empleado concreto y que le pasamos el valor almacenado del Hook SEARCH
    const getData = () => {

        axios.post('https://worklog-app-backend.herokuapp.com/api/user/search_one', search)

            .then(response => {
                localStorage.setItem('search_res', JSON.stringify(response.data))
                setShowUser(JSON.parse(localStorage.getItem('search_res')))
            })
            .catch(error => {
                console.log(error.response.data)
                setInfoError(error.response.data)
            })
    }

    // Función para eliminar un empleado obtenido a traves de la busqueda
    const deleteUser = () => {

        axios.delete('https://worklog-app-backend.herokuapp.com/api/admin/delete/' + showUser.id)
            .then(res => (res.data))
            .catch(error => console.log(error))
    }

    // Funcion para eliminar del Storage al empleado que obtenemos de la busqueda y cerra la venta
    const closeWindow = () => {

        setShowUser(localStorage.removeItem('search_res'))
    }

    return (
        <MDBCol className="search-bar" md="6">
            <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" name="email" placeholder="Introduce el email..." aria-label="Search" onChange={handleSearch} />
            </form>
            <div className="button-container">
                <button className="search-button" type="submit" onClick={() => getData()}>Buscar</button>
            </div>
            <div className="modal-data">
                <div className="space-container"></div>
                {showUser ?
                    <div className="data-response-search">
                        <div className="close-window">
                            <div id="close-modal-user"><RxIcons.RiCloseLine onClick={() => closeWindow()} /></div>
                        </div>
                        <div className="show-data-response-search"><b>Nombre del empleado: &nbsp;</b>{showUser?.name} {showUser?.last_name}</div>
                        <div className="show-data-response-search"><b>Departamento: &nbsp;</b>{showUser?.departments[0].department}</div>
                        <div className="show-data-response-search"><b>Jornada: &nbsp;</b>{showUser?.contract}</div>
                        <div className="show-data-response-search"><b>Antigüedad en la empresa: &nbsp;</b><Moment format="DD MMMM YYYY">{showUser?.created_at}</Moment></div>
                        <div className="show-data-response-search"><button id="delete-button" type="submit" onClick={() => deleteUser()}>Eliminar</button></div>
                    </div>
                    :
                    null}
            </div>
            <div>{
                infoError ?
                    <div id="error-search">No hay ningun empleado con ese correo electrónico</div>
                    :
                    null}</div>
        </MDBCol>
    );
}

export default SearchBar;