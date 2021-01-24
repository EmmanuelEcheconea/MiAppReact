import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {

    const onChange = () => {

    }

    return(
        <div className="form-usuario">
            <h1>Iniciar Sesion</h1>

            <form>
                <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" mame="email" placeholder="Tu Email" onChange={onChange}></input>
                </div>

                <div className="campo-form">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" mame="password" placeholder="Tu password" onChange={onChange}></input>
                </div>

                <div className="campo-form">

                    <Button  variant="outline-primary" size="lg">mandar</Button>

                </div>
            </form>
        </div>
    );
}

export default Login;