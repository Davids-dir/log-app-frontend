// Parte del componente en el que podemos agregar mas secciones en el NavBar
// Importo las dependencias necesarias
import React, { useState } from 'react';
import axios from 'axios';

// Importo la hoja de estilos
import './Navbar.scss';
import { useHistory } from 'react-router-dom';


const NavbarData = () => {

    // Hook para modificar el estado del Navbar
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    // Array con los enlaces
    const menuData = [
        {
            title: 'Acceso',
            path: '/login'
        },
        {
            title: 'Galeria',
            path: '/media'
        },
    ]

    const menuDataUser = [
        {
            title: 'Cerrar sesion',
            path: '#'
        },
        {
            title: 'Galeria',
            path: '/media'
        },
    ]

    const redirect = useHistory();

    // Funcion de Logout
    const logout = () => {

        // POST para revocar el token del usuario
        axios.post('http://localhost:8000/api/user/logout', user.user, { 
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(response => {
                localStorage.clear('user')
                console.log(response.data)

                setTimeout(() => {
                    redirect.push('/')
                    // window.location.href="/";
                }, 1200);

            })
            .catch(error => console.log(error))
    }

    return (

        <div className="nav-link-container">{
            !user ?
                menuData.map((item, indexItem) => {
                    return (
                        <a key={indexItem} className="navItem-data" href={item.path}>
                            {item.title}
                        </a>
                    )
                })
                :
                menuDataUser.map((item, indexItem) => {
                    return (
                        <a key={indexItem} className="navItem-data" href={item.path} onClick={logout}>
                            {item.title}
                        </a>
                    )
                })}
        </div>
    )

}

// Exporto el componente
export default NavbarData;

