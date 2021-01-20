// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';
import { MDBCol, MDBIcon } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

// Estilos
import './ShowLogs.scss';


const ShowLogs = () => {

    // Hook para realizar la busqueda
    const [search, setSearch] = useState({ email: ''});

    // Hook para almacenar el resultado de la busqueda
    const [searchRes, setSearchRes] = useState();

    // Evento donde recojo la información del input de Busqueda para buscar el empleado de la DB
    const handleSearch = e => { setSearch({ ...search, [e.target.name]: e.target.value }) }
    
    // Funcíón para la busqueda del empleado
    const getData = () => {

        axios.post('https://worklog-app-backend.herokuapp.com/api/log/showone', search)

            .then(response => {
                localStorage.setItem('search_log_response', JSON.stringify(response.data))
                setSearchRes(JSON.parse(localStorage.getItem('search_log_response')))
            })
            .catch(error => console.log(error.response))
    }


    return (
        <div className="show-logs-container">
            <MDBCol md="6">
                <form className="form-inline mt-4 mb-4">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75" type="email" name="email" placeholder="Introduce el email" aria-label="Search" onChange={handleSearch} />
                </form>
                <div className="button-container">
                    <button className="search-button" type="submit" onClick={() => getData()}>Buscar</button>
                </div>
            </MDBCol>
            <div className="null-space"></div>
            <div>
                {searchRes ?
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th>Hora de entrada</th>
                                <th>Hora de salida</th>
                                <th>Dirección IP</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                searchRes.logs.map((element, index) => {
                                    return (
                                        console.log(element.start_time),
                                        <tr key={index}>
                                            <td >{element.start_time}</td>
                                            <td >{element.end_time}</td>
                                            <td >{element.ip}</td>
                                        </tr>
                                    )
                                })
                            }
                        </MDBTableBody>
                    </MDBTable>
                    :
                    null}
            </div>
        </div>
    );
}

// Exporto el componente
export default ShowLogs;