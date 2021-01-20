import React, { useEffect } from "react";
import { HiCheck } from "react-icons/hi";
import { Redirect } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";

const Confirmation = (props) => {
  const path = props.match.path;
  const store = useSelector((state) => state);

    let redirectStat = false
  const saveState = (storeData) => {
    axios
      .post("http://127.0.0.1:8000/add-employee/", storeData)
      .then((response) => {
        console.log(response.data);
        redirectStat = true
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
      <HiCheck className="conf-icon" size="70px" />
      <h4>A new employee has been added...</h4>

      { redirectStat ?
        setTimeout(() => <Redirect path="/" />, 4000)
        : redirectStat === false
    }
    </div>
  );
};

export default Confirmation;
