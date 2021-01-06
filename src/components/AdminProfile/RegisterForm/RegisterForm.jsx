import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import axios from 'axios';
import { useHistory } from "react-router-dom";

// Estilos
import './RegisterForm.scss';

const Register = () => {

    // Hook de registro
    const [user, setUser] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        department: '',
        contract: '',
    })

    const redirect = useHistory();

    // Evento en el DOM
    // Añado la informacion del EVENT TARGET sobre el objeto User
    const handleEvent = e => { setUser({ ...user, [e.target.name]: e.target.value }) }

    // Función que emplea el POST hacia la DB para registrar un nuevo empleado
    const sendData = () => {

        axios.post('http://localhost:8000/api/user/register', user)

            .then(res => {

                setTimeout(() => {
                    redirect.push('/')
                }, 1500)

            })
            .catch(error => (console.log(error)))
    };

    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="12">
                    <form id="register-form" className="register-form">
                        <p id="form-title" className="h5 text-center mb-4">Nuevo empleado</p>
                        <label htmlFor="name" className="grey-text">Nombre</label>
                        <input type="text" name="name" id="defaultFormRegisterNameEx" className="form-control" onChange={handleEvent} />
                        <br />
                        <label htmlFor="last_name" className="grey-text">Apellidos</label>
                        <input type="text" name="last_name" id="defaultFormRegisterEmailEx" className="form-control" onChange={handleEvent} />
                        <br />
                        <label htmlFor="email" className="grey-text">Correo electrónico</label>
                        <input type="email" name="email" id="defaultFormRegisterConfirmEx" className="form-control" onChange={handleEvent} />
                        <br />
                        <label htmlFor="password" className="grey-text">Contraseña</label>
                        <input type="password" name="password" id="defaultFormRegisterPasswordEx" className="form-control" onChange={handleEvent} />
                        <br />
                        <label htmlFor="department" className="grey-text">Departamento</label>
                        <select type="text" name="department" id="defaultFormRegisterPasswordEx" className="form-control" onChange={handleEvent}>
                            <option value="" defaultValue hidden>Selecciona un departamento</option>
                            <option value="administration">Administración</option>
                            <option value="production">Producción</option>
                            <option value="quality">Calidad</option>
                            <option value="logistic">Logistica</option>
                        </select>
                        <br />
                        <label htmlFor="contract" className="grey-text">Tipo de jornada</label>
                        <select type="password" name="contract" id="defaultFormRegisterPasswordEx" className="form-control" onChange={handleEvent}>
                            <option value="" defaultValue hidden>Selecciona la jornada</option>
                            <option value="full-time">Jornada Completa - 40h/semanales</option>
                            <option value="half-time">Media Jornada - 20h/semanales</option>
                            <option value="practice">Practicas - 8h/semanales</option>
                        </select>
                    </form>
                    <div className="text-center mt-4">
                        <button className="register-button" type="submit" onClick={() => sendData()}>Registrar</button>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;