import React, { useState } from "react";
import "../../Styles/PersonalData.css";

import {Button} from "@material-ui/core";
import FormMap from "../../Presentational/FormMap";

import OtherData from "../Employee/OtherData";
import EmployeeInfo from "../Employee/EmplyeeInfo"



const BankPension = () => {
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
                                    type={field === 'Account Number*' || 'Bank Verification Number*' || 'Pension Number*' ? 
                                    'number' : 'text'}
                                    name={field} 
                                    value={formFields['field']}
                                    placeholder={field}
                                    onChange={event => handleFormChanges(event)}
                                    />
                                    
                                }

                            </section>
                    
                        ))
                    }

                    <Button variant='constrained' color='primary' onClick={() => {handleAddEmp('previous')}}
                    disabled={false}>{'<< Previous'}</Button>

                    <span className='next-buttons'>

                        <Button variant='constrained' className='next-btn btn btn-primary' onClick={() => {handleAddEmp('next')}}
                        disabled={false}>{'Next>>'}</Button>
                    </span>
                </section>
                :
                <section>
                    <FormMap />
                    {
                        pageSection === 'next' ?
                        <OtherData /> :
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
