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
    const [inPauseButton, setInPauseButton] = useState(false);

    // Hooks para los registro de los empleados
    const [startDataWork, setStartDataWork] = useState();
    const [stopDataWork, setStopDataWork] = useState();
    const [pauseDataStart, setPauseDataStart] = useState();
    const [pauseDataStop, setPauseDataStop] = useState();

    // Eventos en el DOM
    const startWork = () => setStartButton(!startButton);
    const stopWork = () => setStopButton(!stopButton);
    const startPause = () => setInPauseButton(!inPauseButton);

    // Función para alternar los botones que vamos a mostrar empleando los eventos
    const changeButton = () => {
        stopWork()
        startWork()
    }

    const inWorkButtons = () => {
        stopWork()
        startPause()
    }



    // Creo una variable cogiendo la información del LOCAL STORAGE sobre el trabajador que hace LOGIN  
    const user = JSON.parse(localStorage.getItem('user'));
    const ip_direction = JSON.parse(localStorage.getItem('ip_direction'));



    // Funcion cuando un empleado inicia su jornada de trabajo
    const dbStartWork = () => {

        axios.post('https://worklog-app-backend.herokuapp.com/api/log/start/' + user.user.id, ip_direction)

            .then((response) => {
                setStartDataWork(response.data)
            })
            .catch(error => console.log(error))
    }

    // Función para pausar la jornada de un empleado
    const dbPauseWork = () => {

        axios.put('https://worklog-app-backend.herokuapp.com/api/log/update.startpause/' + user.user.id)

            .then((response) => {
                setPauseDataStart(response.data)
                inWorkButtons()

            })
            .catch(error => console.log(error))
    }

    // Función para reanudar la pausa de un empleado
    const dbPauseEnd = () => {

        axios.put('https://worklog-app-backend.herokuapp.com/api/log/update.endpause/' + user.user.id)

            .then((response) => {
                setPauseDataStop(response.data)
                inWorkButtons()
            })
            .catch(error => console.log(error))
    }

    // Función para terminar la jornada de un empleado
    const dbStopWork = () => {

        axios.put('https://worklog-app-backend.herokuapp.com/api/log/update.stop/' + user.user.id)

            .then((response) => {
                setStopDataWork(response.data)
            })
            .catch(error => console.log(error))
    }


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
                                    <button type="submit" className="stop-log" onClick={() => dbStopWork()}>STOP</button>
                                </div>
                                <div className="pause-button-container">
                                    <button className="pause-log" onClick={() => dbPauseWork()}>Inicio descanso</button>
                                </div>
                            </div>
                            :
                            <div>
                                {inPauseButton ?
                                    <div className="pause-button-container-alt">
                                        <button className="pause-log" onClick={() => dbPauseEnd()}>Finalizar descanso</button>
                                    </div>
                                    :
                                    null}
                            </div>}
                    </div>
                    <div className="info-panel">
                        <div className="data-container">
                            <div className="start-info-panel">{startDataWork ? startDataWork.message : null} {startDataWork ? startDataWork.hora : null}</div>
                            <div className="start-info-panel">{pauseDataStart ? pauseDataStart.message : null} {pauseDataStart ? pauseDataStart.hora : null}</div>
                            <div className="start-info-panel">{stopDataWork ? stopDataWork.message : null} {stopDataWork ? stopDataWork.hora : null}</div>
                            <div className="start-info-panel">{pauseDataStop ? pauseDataStop.message : null} {pauseDataStop ? pauseDataStop.hora : null}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Exporto el componente
export default UserProfile;