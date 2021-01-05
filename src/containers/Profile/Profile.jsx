// Importo las dependencias necesarias
import React from 'react';
import AdminProfile from '../../components/AdminProfile/AdminProfile';
import UserProfile from '../../components/UserProfile/UserProfile';


// Hoja de estilos
import './Profile.scss'


// Contenedor Profile
const Profile = () => {

    /* Variable a la que le asigno la informacion almacenada del LOCAL STORAGE para ver si el usuario tiene permisos de Administrador */
    const admin = JSON.parse(localStorage.getItem('user'));

    return (

        <div className='profile-container'>
            <div className="control-panel">
                <div className="nullProfile1"></div>
                <div className="option-panel">

                    {/* A mostrar si el usuario que hace Login tiene permisos de Admin */}
                    {admin.user.admin ?
                        <AdminProfile />
                        /* Perfil de un usuario que no tiene permisos de Administrador */
                        :
                        <UserProfile />}
                </div>
                <div className="data-panel"></div>

            </div>

        </div>

    )
}

// Exporto el componente
export default Profile;