// Importamos las dependencias necesarias
import React from 'react';


// Importamos los distintos iconos
import * as AiIcons from 'react-icons/ai';
import * as MoonIcons from 'react-icons/im';
import * as IonIcons from 'react-icons/io';


// Variable donde almacenamos los accesos/rutas que mostramos en el Sidebar
export const sidebarLinks = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-icons'
  },
  {
    title: 'Acceso',
    path: '/login',
    icon: <MoonIcons.ImEnter />,
    className: 'nav-icons'
  },
  {
    title: 'Servicios',
    path: '/services',
    icon: <IonIcons.IoMdCube />,
    className: 'nav-icons'
  },
  {
    title: 'Contacto',
    path: '/contactus',
    icon:  <AiIcons.AiFillMail />,
    className: 'nav-icons'
  },
]