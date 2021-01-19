import React, { useState } from "react";
import "../../Styles/PersonalData.css";

import {Button} from "@material-ui/core";
import FormMap from "../../Presentational/FormMap";

import BankPension from "../Employee/BankPension";
import PersonalData from "../Employee/PersonalData"




const EmployeeInfo = () => {    
    const [formFields, setFormFields] = useState({
        'Staff ID*': '',
        'Official Email*': '',
        'Employment Type*': '',
        'Employee Designation*': '',
        'Employee Department': '',
        'Employee Status*': '',
        'Employee Confirmation*': '',
        'Employee Location*': '',
        'Gross Salary': '',
        'Set Date Of Employment*': '',
        'Set Date Of Leavnig*': ''
    })
    const fields = Object.keys(formFields)
    
    const handleFormChanges = (event) =>{
        const fieldName = event.target.name
        const fieldValue = event.target.value
        let updatedFields = formFields
        updatedFields[fieldName] = fieldValue
        setFormFields(updatedFields)
    }

    const values = Object.values(formFields)

    const [pageSection, setPageSection] = useState(false)

    const handleAddEmp = (section) =>{
        setPageSection(section)
    }

    return(
        <div className='animate__animated animate__heartBeat'>
            {
            !pageSection ?
                <section className='new-emp-form form-group'>
                    <h4>Employee Info:</h4>
                    {
                        fields.map(field => (
                            <section className='emp-field' key={field}>
                                <label >{field}</label>
                                {
                                    <input className='form-control' 
                                    type={field === 'Official email*' ? 'email'  : 
                                        field === 'Set Date Of Employment*' ? 'date' : field === 'Set Date Of Leaving*' ? 'date' 
                                            : 'text'}
                                    name={field} 
                                    value={formFields['field']}
                                    onChange={event => handleFormChanges(event)}
                                    />
                                    
                                }

                            </section>
                    
                        ))
                    }
                    <Button variant='constrained' color='primary' onClick={() => {handleAddEmp('previous')}}
                    disabled={false}>{'<< Previous'}</Button>

                    <Button variant='constrained' className='next-btn' onClick={() => {handleAddEmp('next')}}
                    disabled={false}>{'Next>>'}</Button>
                </section>
                :
                <section>
                    <FormMap />
                    {
                        pageSection === 'next' ?
                        <BankPension /> :
                        pageSection === 'previous' ?
                        <PersonalData /> :
                        pageSection === false
                    }
                </section>
            }
           
        </div>
    )
}


export default EmployeeInfo;
