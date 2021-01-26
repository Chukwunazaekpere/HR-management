import React, { useState, useEffect } from "react";

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

  const handlePageRedirect = () => {
      const formValues = Object.values(formFields)
      let count = 0
      formValues.forEach(value => {
        if(value !== ""){
          count++
        }
      })
      if(count === formValues.length){
        dashboard = true
        console.log("dash vals: ", dashboard)
      }

      return dashboard
  }

  return (
    <>
    {
      dashboard === true ?
      <Redirect to="/dashboard" />
      :
      <div
        className="login-container 
        animate__animated animate__flash"
      >
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
            <Link to={() => handlePageRedirect() ? "/dashboard" : "/"}  type='submit' className="btn btn-info" >
            Onwards
            <span className='ml-4 rot-icon'>
              <SaveAltIcon /> 
            </span>
          </Link>
          <Link className="mt-3 forgot">Forgot password?</Link>
          
          </p>
          <h5 className='login-title'>Log in</h5>
      </div>
    
    }
  </>

  );
};

export default Login;
