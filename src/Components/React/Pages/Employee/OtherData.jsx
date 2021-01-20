import React, { useState } from "react";
import "../../Styles/PersonalData.css";

import {Button} from "@material-ui/core";
import FormMap from "../../Presentational/FormMap";

import BankPension from "../Employee/BankPension";
import "animate.css"

import {Redirect} from "react-router-dom";


const OtherData = () => {
    const [formFields, setFormFields] = useState({
        'Firstname*': '',
        'Lastname*': '',
        'Phone*': '',
        'Email address*': '',
        'Number of Children*': '',
        'Firstname_*': '',
        'Lastnam_*': '',
        'Phone1*': '',
        'Address*': '',
        'Email address_*': '',
        'Relationship*': '',
        'Emergency Name1*': '',
        'Emergency Address1': '',
        'Emergency Phone1*': '',
        'Emergency Name2*': '',
        'Emergency Address2': '',
        'Emergency Phone2*': ''
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

    const handleAddEmp = (section, option) =>{
        setPageSection(section)
       
    }
    return(
        <div className='animate__animated animate__swing'>
            {
            !pageSection ?
                <section className='new-emp-form form-group'>
                    {
                        fields.map(field => (
                            <section className='emp-field' key={field}>
                                {
                                    <input className='form-control' type={field === 'Personal email*' ? 'email' : 
                                                field === 'Phone*' ? 'tel' : 
                                            field === 'Date of birth*' ? 'date': 'text'}
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
                    <Button variant='constrained' className='next-btn' color='primary' onClick={() => {handleAddEmp('submit', true)}}
                    disabled={false}>{'Add New Employee'}</Button>
                </section>
                :
                <section>
                    <FormMap />
                    {
                        pageSection === 'previous' ?
                        <BankPension /> :
                        pageSection === 'submit' ?
                        <Redirect to="/confirmation" /> :
                        pageSection === false
                    }
                </section>
            }
           
        </div>
    )
}


export default OtherData;
