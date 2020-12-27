// Importo las dependecias necesarias
import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';


// Hoja de estilos
import './ControlPanel.scss';


// Logica del componente
const ControlPanel = () => {

    // Recojo la informacion del Local Storage sobre el usuario que ha realizado Login
    const user = JSON.parse(localStorage.getItem('user'))

    // Hook de estado
    const [ toggle, setToggle ] = useState (false)

    // Manejo el estado del Hook
    const showSelection= ( ) => setToggle (!toggle)

    return (
        <div className="panelContainer">
            <div className="infoContainer">
                <div className="panelName">Hola { [user.user.name, " ", user.user.last_name] }</div>
                <div className="panelDate">
                    <Moment id="dateInfo" format="dddd DD MMMM YYYY HH:mm:ss"></Moment>
                </div>
            </div>
            { user.user.admin ?
            <div className="adminPanel">
                <div className="optionsPanel" onClick={ showSelection }>Opciones</div>
                { toggle ?
                <div className="selectPanel" >
                    <li>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>
                    </li>
                </div>
                : 
                <div>No select</div>
                }
            </div>
                :
                <div className="notAdminPanel">NO SOY ADMIN
                
                </div>
            }

        </div>
    )
}

// Exporto el componente
export default ControlPanel;