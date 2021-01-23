import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/PersonalData.css";

import EmployeeInfo from "../Employee/EmplyeeInfo";
import FormMap from "../../Presentational/FormMap";


const PersonalData = () => {
  const [formFields, setFormFields] = useState({
    "Lastname*": "",
    "Firstname*": "",
    "Other Name": "",
    Gender: "",
    "Marital-status": "",
    "Personal email*": "",
    "Phone*": "",
    "Date of birth*": "",
    "Nationality*": "",
    "Current address*": "",
    "Permanent address*": "",
    "State*": "",
    "Town*": "",
  });
  const fields = Object.keys(formFields);
  const values = Object.values(formFields);

  const handleFormChanges = (event) => {
    let updatedFields = formFields;
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    updatedFields[fieldName] = fieldValue;

    setFormFields({ ...updatedFields });
  };

  const [addNext, setAddNext] = useState(false);

  const handleAddEmp = () => {
    setAddNext(!addNext);
  };


  return (
    <div className="personal-data animate__animated animate__swing">
      {!addNext ? (
        <section className="new-emp-form form-group">
          <h4 className="emp-form-title">Personal Data:</h4>
          {fields.map((field) => (
            <form className="emp-field" key={field}>
              {field === "Gender" ? (
                <select
                  className="form-control"
                  name={field}
                  required={true}
                  value={formFields["field"]}
                  onChange={(event) => handleFormChanges(event)}
                >
                  <option>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : field === "Marital-status" ? (
                <select
                  className="form-control"
                  name={field}
                  required={true}
                  value={formFields["field"]}
                  onChange={(event) => handleFormChanges(event)}
                >
                  <option>Select marital status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              ) : (
                <input
                  className="form-control"
                  type={
                    field === "Personal email*"
                      ? "email"
                      : field === "Phone*"
                      ? "tel"
                      : field === "Date of birth*"
                      ? "date"
                      : "text"
                  }
                  name={field}
                  value={formFields["field"]}
                  placeholder={field}
                  required={true}
                  onChange={(event) => handleFormChanges(event)}
                />
              )}
            </form>
          ))}
              <span className="next-buttons">
                <button className='btn btn-info' type="submit"  onClick={() => {
                    handleAddEmp({ formFields });
                  }}>{`Next >>`}</button>
              </span>
        </section>
      ) : (
        <section>
          <FormMap />
          <EmployeeInfo formData={{personalData: formFields}}/>
        </section>
      )}
    </div>
  );
};

export default PersonalData;
