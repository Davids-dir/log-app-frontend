import React, { useState } from "react";
import { MDBInput } from "mdbreact";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Estilos
import './FormLogin.scss';


const FormLogin = () => {

    // Hook de estado
    const [user, setUser] = useState({ email: '', password: '', })

    // Evento donde asigno el valor del Input al 'user'
    const eventHandler = e => { setUser({ ...user, [e.target.name]: e.target.value }) }

    const redirect = useHistory();

    // Funcion para conseguir la IP del dispositivo del usuario que hace Login
    const getIP = () => {

        axios.get('https://api.ipify.org?format=json')

            .then(res => localStorage.setItem('ip_direction', JSON.stringify(res.data)))
            .catch(error => { console.log(error) })

    }

    // Funcion para el envio de datos contra la DB
    const SendData = () => {

        getIP();

        // POST hacia el endpoint de Login
        axios.post('https://worklog-app-backend.herokuapp.com/api/user/login', user)

            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))

                setTimeout(() => {
                    redirect.push('/user/profile')
                    // window.location.href="/user/profile"
                }, 1000)

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="form-group">
            <div className="inside-form">
                <h4>Inicia sesión</h4>
                <div id="form-login" className="email-label">
                    <MDBInput label="Correo electrónico" size="lg" name="email" type="text" onChange={eventHandler} />
                </div>
                <div id="form-login" className="password-label">
                    <MDBInput label="Contraseña" size="lg" name="password" type="password" onChange={eventHandler} />
                </div>
                
                <button id="form-button" type="button" onClick={() => SendData()}>Login</button>
            </div>
        </div>
    );
}

export default FormLogin;