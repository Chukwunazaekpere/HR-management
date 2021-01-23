import React, { useState } from "react";
import "../../Styles/PersonalData.css";

import {Button} from "@material-ui/core";
import FormMap from "../../Presentational/FormMap";

import OtherData from "../Employee/OtherData";
import EmployeeInfo from "../Employee/EmplyeeInfo"



const BankPension = (props) => {
    console.log("in bank and Pen: ", props.formData)
    const [formFields, setFormFields] = useState({
        'Bank Name*': '',
        'Account Number*': '',
        'Bank Verification Number*': '',
        'Pension Manager*': '',
        'Pension Number*': ''
    })
    const fields = Object.keys(formFields)

    const handleFormChanges = (event) =>{
        const name = event.target.name
        const value = event.target.value
        const updatedFields = formFields
        updatedFields[name] = value

        setFormFields(updatedFields)
    }

    const [pageSection, setPageSection] = useState(false)

    const handleAddEmp = (section) =>{
        setPageSection(section)
    }

    return(
        <div className='animate__animated animate__swing'>
            {
            !pageSection ?
                <section className='new-emp-form form-group'>
                    <h4>Bank & Pension:</h4>
                    {
                        fields.map(field => (
                            <section className='emp-field' key={field}>
                                {
                                    
                                    <input className='form-control' 
                                    type={field === 'Pension Manager*' ? 'text' : 
                                          field === 'Bank Name*' ? 'text' : 'number'}
                                    name={field} 
                                    value={formFields['field']}
                                    placeholder={field}
                                    onChange={event => handleFormChanges(event)}
                                    />
                                    
                                }

                            </section>
                    
                        ))
                    }
                <span className="next-buttons">
                    <button className='btn btn-info' type="submit"  onClick={() => {
                        handleAddEmp('previous');
                    }}>
                        {'<< Previous'}
                    </button>

                </span>
                <span className="next-buttons">
                    <button className='btn btn-info' type="submit"  onClick={() => {
                        handleAddEmp('next');
                    }}>
                        {`Next >>`}
                    </button>
                </span>
                </section>
                :
                <section>
                    <FormMap />
                    {
                        pageSection === 'next' ?
                        <OtherData formData={{formData: [props.formData, {bankPension: formFields}]}} /> :
                        pageSection === 'previous' ?
                        <EmployeeInfo /> :
                        pageSection === false
                    }
                </section>
            }
           
        </div>
    )
}


export default BankPension;
