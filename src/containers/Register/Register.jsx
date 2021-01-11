// Importo las dependencias necesarias que voy a emplear
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Importo la hoja de estilos
import './Register.scss';


// Creo el contenedor Register
const Register = ( ) => {

    // Hook de registro
    const [ user, setUser ] = useState ({
        name: '',
        last_name: '',
        email: '',
        password: '',
        department: '',
        contract: '',
    })

    // Evento en el DOM
    // Añado la informacion del EVENT TARGET sobre el objeto User
    const handleEvent = e => { setUser ({ ...user, [ e.target.name ]: e.target.value })}
    
    const redirect = useHistory ( );

    // Función que emplea el POST hacia la DB
    const sendData = ( ) => {

        axios.post ('https://worklog-app-backend.herokuapp.com/api/user/register', user)

        .then (res => {
            setTimeout (( ) => {
                redirect.push ('/')
            }, 1500)
        })
        .catch (error => (console.log (error)))
    };


    return (
        <div className="registerContainer">
            <form className="formContainer">
                <label>Nombre</label>
                <input type="text" name="name" onChange={ handleEvent } />
                <label>Apellidos</label>
                <input type="text" name="last_name" onChange={ handleEvent } />
                <label>Correo electrónico</label>
                <input type="mail" name="email" onChange={ handleEvent } />
                <label>Contraseña</label>
                <input type="password" name="password" onChange={ handleEvent } />
                <label>Departamento</label>
                <select id="department" name="department" onChange={ handleEvent }>
                    <option value="" defaultValue hidden>Selecciona el departamento</option>
                    <option value="administration">Administración</option>
                    <option value="marketing">Marketing</option>
                    <option value="production">Producción</option>
                    <option value="logistics">Logística</option>
                </select>
                <label>Tipo de jornada</label>
                <select id="contract" name="contract" onChange={ handleEvent }>
                    <option value=""  defaultValue hidden>Selecciona el tipo de jornada</option>
                    <option value="full_time">Jornada Completa - 40h/semanales</option>
                    <option value="half_time">Media Jornada - 20h/semanales</option>
                    <option value="practices">Practicas - 8h/semanales</option>
                </select>
                <button type='button' onClick={ ( ) => sendData ( )  }>Registrar</button>
            </form>
        </div>
    )
}

// Exporto el contenedor
export default Register;