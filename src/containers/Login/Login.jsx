// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';

// Importo la hoja de estilos
import './Login.scss';


// Logica del contenedor LOGIN
const Login = ( ) => {

    // Hook de estado
    const [ user, setUser ] = useState ({ email: '', password: '', })

    // Evento dondo asigno el valor del Input al 'user'
    const eventHandler = e => { setUser ({ ...user, [ e.target.name ]: e.target.value })}

    // Funcion para conseguir la IP del dispositivo del usuario que hace Login
    const getIP = ( ) => {

         axios.get ('https://api.ipify.org?format=json')
        
        .then (res => localStorage.setItem ('user_IP', JSON.stringify (res.data)))
        .catch (error => { console.log (error)})
        
    }

    // Funcion para el envio de datos contra la DB
    const SendData = ( ) => {

        getIP ( );

        // POST hacia el endpoint de Login
        axios.post ('http://localhost:8000/api/user/login', user)

        .then (res => {
            localStorage.setItem ('user', JSON.stringify (res.data))
        })
        .catch (error => console.log (error))
    }

    return (
        <div className="loginContainer">
            <form className="formContainer">
                <label>Correo electrónico</label>
                <input type="text" name='email' onChange={ eventHandler } />
                <label>Contraseña</label>
                <input type="password" name='password' onChange={ eventHandler } />
                <button type="button" onClick={ ( ) => SendData ( ) }>Login</button>
            </form>
        </div>
    )
}

// Exporto el contenedor
export default Login;