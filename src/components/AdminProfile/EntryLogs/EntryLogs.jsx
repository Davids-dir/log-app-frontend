// Importo las dependencias necesarias
import React, { useEffect, useState } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

// Estilos
import './EntryLogs.scss'

// Componente
const ShowLogs = () => {

    const [logs, setLogs] = useState([]);

    // Hook de useEffect para que se ejecute al montar el DOM
    useEffect(() => {
        axios.get('https://worklog-app-backend.herokuapp.com/api/log/showall')
            .then(response => {
                setLogs(response.data)
            })
            .catch(error => console.log(error.response))
    },[])

const data = {
    columns: [
        {
            label: 'Nombre',
            field: 'name',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Apellidos',
            field: 'last_name',
            sort: 'asc',
            width: 270
        },
        {
            label: 'Departamento',
            field: 'department',
            sort: 'asc',
            width: 200
        },
        {
            label: 'Día',
            field: 'día',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Hora de entrada',
            field: 'start_time',
            sort: 'asc',
            width: 150
        },
        {
            label: 'Hora de salida',
            field: 'end_time',
            sort: 'asc',
            width: 100
        },
        {
            label: 'Dirección IP',
            field: 'ip',
            sort: 'asc',
            width: 150
        }
    ],
    rows: logs
};

return (
    <MDBDataTable
        striped
        bordered
        small
        data={data}
    />
);
}

export default ShowLogs;

