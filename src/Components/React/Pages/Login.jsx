import React, { useState } from "react";

import "../Styles/Login.css";
import { Redirect, Link } from "react-router-dom";
import "animate.css";
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


const Login = (props) => {
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

  let dashboard = false

  const handlePageRedirect = () =>{
    dashboard = true
    console.log("dash val: ", dashboard)
  }

  return (
    <>
    {
      dashboard === false ? 
      <div
        className="login-container 
        animate__animated animate__flash"
      >
        <form method='get' action='/dashboard' onSubmit={handlePageRedirect}>
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
          <p className="login-button">
            <button onClick={() => handlePageRedirect()} type='submit' className="btn btn-info" >
            Let's go
            <span className='rot-icon'>
              <SaveAltIcon /> 
            </span>
          </button>
          <Link className="mt-3 forgot">Forgot password?</Link>
          
          </p>
        </form>
          <h5 className='login-title'>Log in</h5>
        
      </div>
    :
  <Redirect to='/dashboard' /> 
  }
  </>
  );
};

export default Login;
