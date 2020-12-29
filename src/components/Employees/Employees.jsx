// Importo las dependencias necesarias
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Importo la hoja de estilos
import './Employees.scss';


// Componente para la gestion de los empleados
const Manage = ( ) => {

    // Hook para desplegar las opciones del panel de gestion de empleados
    const [ showMenu, setShowMenu ] = useState (false);
    const [ newEntry, setNewEntry ] = useState (false);
    const [ modifyEntry, setModifyEntry ] = useState (false);
    const [ deleteEntry, setDeleteEntry ] = useState (false);

    // Funcion para cambiar el estado de los HOOKS
    const eventRoster = ( ) => setShowMenu (!showMenu)
    const eventNewEntry = ( ) => setNewEntry (!newEntry)
    const eventModify = ( ) => setModifyEntry (!modifyEntry)
    const eventDelete = ( ) => setDeleteEntry (!deleteEntry)

    return (

        <div className='manageContainer' >
            <div className="buttonContainer1">
                <button className='buttonManage' type='button' onClick={ eventRoster }>Gestionar empleados</button>
            </div>
            
            {/* Panel que se muestra si el estado del HOOK de empleados pasa a TRUE */}
            { showMenu ?
            <div className="manageRoster">
                <Link to='#' onClick={ eventNewEntry }>Registrar un empleado</Link>
                <Link to='#' onClick={ eventModify }>Modificar un empleado</Link>
                <Link to='#' onClick={ eventDelete }>Dar de baja un empleado</Link>
            </div>
            : 
            <></> 
            }
            <div className="prueba2"></div>
        </div>

    )
}

// Exporto el componente
export default Manage;