// Importo las dependencias necesarias
import React from 'react';
import Manage from '../../components/Employees/Employees';


// Hoja de estilos
import './Profile.scss'


// Contenedor Profile
const Profile = () => {



    return (

        <div className='profile-container'>
            <div className="control-panel">
                <div className="nullProfile1"></div>
                <div className="option-panel">
                <Manage />
                </div>
                <div className="data-panel"></div>
                
            </div>

        </div>

    )
}

// Exporto el componente
export default Profile;