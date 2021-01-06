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
    const ip_direction = JSON.parse(localStorage.getItem('ip_direction'));



    // Funcion cuando un empleado inicia su jornada de trabajo
    const dbStartWork = () => {

        axios.post('http://localhost:8000/api/log/start/' + user.user.id, ip_direction)

            .then((response) => {
                localStorage.setItem('start_res', JSON.stringify(response.data))
            })
            .catch(error => console.log(error))
    }

    const data_logStart = JSON.parse(localStorage.getItem('start_res'));

    return (
        <div className="user-container">
            <div className='user-panel'>
                <div className="top-panel">
                    <div className="user-name">{user.user.name} {user.user.last_name}</div>
                    <div className="user-date"><Moment format="dddd DD MMMM yyyy" /></div>
                </div>
                <div className="operation-panel">
                    <div className="left-panel-buttons">
                        {startButton ?
                            <div className="start-button-container" onClick={changeButton}>
                                <button className="start-log" type="submit" onClick={dbStartWork}>INICIO</button>
                            </div>
                            :
                            null}
                        {stopButton ?
                            <div className="working-container">
                                <div className="stop-button-container" onClick={changeButton}>
                                    <button type="submit" className="stop-log">STOP</button>
                                </div>
                                <div className="pause-button-container">
                                    <button className="pause-log">DESCANSO</button>
                                </div>
                            </div>
                            :
                            null}
                    </div>
                    <div className="info-panel">
                        <div className="data-container">
                            <div className="start-info-panel">{data_logStart ? data_logStart.message : null } a las {data_logStart ? data_logStart.hora : null }</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporto el componente
export default UserProfile;