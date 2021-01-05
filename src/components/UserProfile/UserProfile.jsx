// Importo las dependencias necesarias
import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';

// Importo los estilos
import './UserProfile.scss';
import axios from 'axios';

// Establezco la zona horaria y el lenguaje en Español
Moment.globalLocale = 'es';

// Componente del perfil de usuario
const UserProfile = () => {

    // Hooks
    const [startButton, setStartButton] = useState(true);
    const [stopButton, setStopButton] = useState(false);


    // Eventos en el DOM
    const startWork = () => setStartButton(!startButton);
    const stopWork = () => setStopButton(!stopButton);


    // Función para alternar los botones que vamos a mostrar empleando los eventos
    const changeButton = () => {
        stopWork()
        startWork()
    }


    // Creo una variable cogiendo la información del LOCAL STORAGE sobre el trabajador que hace LOGIN  
    const user = JSON.parse(localStorage.getItem('user'));


    // Funcion cuando un empleado inicia su jornada de trabajo
    const dbStartWork = () => {

        axios.post('http://localhost:8000/api/log/start/' + user.user.id)

            .then(res => res.data)
            .catch(error => console.log(error))
    }



    return (
        <div className="user-container">
            <div className='user-panel'>
                <div className="top-panel">
                    <div className="user-name">Bienvenido {user.user.name} {user.user.last_name}</div>
                    <div className="user-date"><Moment format="dddd DD MMMM yyyy" /></div>
                </div>
                {startButton ?
                    <div className="start-button-container" onClick={changeButton}>
                        <button className="start-log" type="submit" onClick={dbStartWork}>INICIO</button>
                    </div>
                    :
                    null}
                {stopButton ?
                    <div onClick={changeButton}>
                        <button>STOP</button>
                    </div>
                    :
                    null}
            </div>
        </div>
    )
}

// Exporto el componente
export default UserProfile;