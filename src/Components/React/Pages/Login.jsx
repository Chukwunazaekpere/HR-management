import React, { useState } from "react";

import "../Styles/Login.css";
import { Link } from "react-router-dom";
import "animate.css";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


const Login = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
  });

  const handleFormChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedForm = formFields;
    updatedForm[name] = value;
    setFormFields(updatedForm);
  };

  return (
    <div
      className="login-container 
      animate__animated animate__flash"
    >
            <form method="post">
        <label>User ID:</label>
        <input
          className="form-control"
          type="text"
          name="username"
          required={true}
          onChange={(event) => handleFormChanges(event)}
          />
        <br />
        <label>Password:</label>
        <input
          className="form-control"
          type="password"
          name="password"
          required={true}
          onChange={(event) => handleFormChanges(event)}
          />

      </form>
      <p className="login-button">
    <h5 className='login-title'>Log in</h5>

        <Link className="btn btn-info" to="/dashboard">
          Let's go
         
          <span className='rot-icon'>
          <SaveAltIcon /> 

          </span>
        </Link>
        <Link className="forgot">Forgot password?</Link>
      </p>
    </div>
  );
};

export default Login;
