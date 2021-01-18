import React, { useState } from "react";
import "../Styles/Login.css";


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
        <div>
            <input type="text" name="username"
                value={formFields['username']}
                onChange={event => handleFormChanges(event)}
            />
            <input type="password" name="password"
                value={formFields['password']}
                onChange={event => handleFormChanges(event)}
            />
        </div>
    )
}

export default Login;