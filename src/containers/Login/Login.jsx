// Importo las dependencias necesarias
import React from 'react';


// Importo la libreria de MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Importo la hoja de estilos
import './Login.scss';
import FormLogin from '../../components/Form/FormLogin';


// Logica del contenedor LOGIN
const Login = () => {

    return (
        <div className="loginContainer">
            <form className="formContainer">
                <FormLogin />
            </form>
        </div>
    )
}

// Exporto el contenedor
export default Login;