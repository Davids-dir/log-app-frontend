// Importo las dependecias necesarias
import React, { useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

// Acceso al fichero donde estan las funciones del componente
import './ControlPanelFunctions';

// Hoja de estilos
import './ControlPanel.scss';


// Logica del componente
const ControlPanel = () => {

    // Recojo la informacion del Local Storage sobre el usuario que ha realizado Login
    const user = JSON.parse(localStorage.getItem('user'))

    // Hook de estado
    const [ toggle, setToggle ] = useState (false)
    const [ prueba, setPrueba ] =useState (false)

    // Manejo el estado del Hook
    const showSelection= ( ) => setToggle (!toggle)

    return (
        <div className="panelContainer">
            <div className="infoContainer">
                <div className="panelName">Hola {[user.user.name, " ", user.user.last_name]}</div>
                <div className="panelDate">
                    <Moment id="dateInfo" format="dddd DD MMMM YYYY HH:mm:ss"></Moment>
                </div>
            </div>
            {/* Parte visible en caso de Login de un usuario con el rol de Administrador */}
            { user.user.admin ?
            <div className="adminPanel">
                <div className="adminOptions">
                    <div className="employeesPanel" onClick={ showSelection }>Administrar empleados</div>
                    <div className="workPanel">Jornada</div>
                </div>
                { toggle ?
                <div className="selectPanel" >OPCIONES
                    <li>
                        <ul><a href="/register">Registrar un nuevo empleado</a></ul>
                        <ul>Buscar un empleado</ul>
                    </li>
                </div>
                : 
                <div className="prueba"></div>
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