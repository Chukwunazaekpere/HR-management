import React, { useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import axios from "axios";

import "../Styles/Confirmation.css";
import { useSelector } from "react-redux";


const Confirmation = (props) => {
  const path = props.match.path;
  console.log("In confirmation: ", props.formData)
  const store = useSelector((state) => state);

  const saveState = (storeData) => {
    axios
      .post("http://127.0.0.1:8000/add-employee/", storeData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (path === "/confirmation") {
    saveState(store);
  }
  
  return (
    <div className="confirmation animate__animated animate__flash">
      <section className='text-section'>
        <h3>A new employee has been added...</h3>
        <span className="conf-icon">
          <HiCheck size="80px" />
        </span>

        { 
          setTimeout(() => (props.history.push('/dashboard')), 7000)
        }
        <h5>Redirecting to dashboard... Please wait.</h5> 
      </section>
    </div>
  );
};

export default Confirmation;
