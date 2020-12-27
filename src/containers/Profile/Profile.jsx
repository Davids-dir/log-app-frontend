// Importo las dependencias necesarias
import React from 'react';
import ControlPanel from '../../components/ControlPanel/ControlPanel';


// Hoja de estilos
import './Profile.scss'


// Contenedor Profile
const Profile = ( ) => {



    return (

        <div className='profileContainer'>
            <div className="nullProfile1">VACIO</div>
            <ControlPanel />
        </div>

    )
}

// Exporto el componente
export default Profile;