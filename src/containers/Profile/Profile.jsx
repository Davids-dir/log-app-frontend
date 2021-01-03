// Importo las dependencias necesarias
import React from 'react';
import Manage from '../../components/Employees/Employees';


// Hoja de estilos
import './Profile.scss'


// Contenedor Profile
const Profile = ( ) => {



    return (

        <div className='profileContainer'>
              <div className="controlPanel">
                <Manage />
            </div>
            {/*<div className="nullProfile1"></div>*/}
          
        </div>

    )
}

// Exporto el componente
export default Profile;