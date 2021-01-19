import React, { useState } from "react";

import "../Styles/Login.css";
import { Link } from "react-router-dom";
import "animate.css";


const Login = () => {
    const [formFields, setFormFields] = useState({
        username: "",
        password: "",
    })

    const handleFormChanges = (event) => {
        const name = event.target.name
        const value = event.target.value

        const updatedForm = formFields
        updatedForm[name] = value
        setFormFields(updatedForm)
    }

    return(
        <div className='login-container form-group
                animate__animated animate__flash'>
            <h3 className='login-title'>Log in</h3>
            <form  method="post">
                <label className='log-label'>User ID:</label>
                <input className="form-control" type="text" name="username"
                    required={true}
                    onChange={event => handleFormChanges(event)}
                />
                <br/>
                <label className='log-label'>Password:</label>
                <input className="form-control" type="password" name="password"
                    required={true}
                    onChange={event => handleFormChanges(event)}
                />
            </form>
            <p className='login-button'>
                <Link className='btn btn-info' to="/dashboard">Let's go</Link>
                <Link className='forgot'>Forgot password?</Link>
            </p>
        </div>
    )
}

export default Login;