// Importo las dependencias necesarias
import React from 'react';
import * as FaIcons from "react-icons/fa";


// Importo la hoja de estilos
import './Footer.scss';


// Contenedor FOOTER
const Footer = () => {


    return (
        <div className="footer-container">
            <div className="upper-footer">
                <div id="footer-icons" className="linkedin-icon"><a href="https://www.linkedin.com/in/david-pitarch" target="_blank" rel="noreferrer"><FaIcons.FaLinkedinIn /></a></div>
                <div id="footer-icons" className="github-icon"><a href="https://github.com/Davids-dir" target="_blank" rel="noreferrer"><FaIcons.FaGithub /></a></div>
            </div>
            <div className="lower-footer"><span>Creado por David Pitarch Gonzalez 2021 ©</span></div>
        </div>
    )
}

// Exporto el contenedor
export default Footer;