import React, { useState } from "react";
import "../../Styles/PersonalData.css";

import FormMap from "../../Presentational/FormMap";

import BankPension from "../Employee/BankPension";
import "animate.css"

import {Redirect} from "react-router-dom";


const OtherData = (props) => {
    console.log("In other data:", props)
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
                        <span className="next-buttons">
                            <button className='btn btn-info' type="submit"  onClick={() => {
                                handleAddEmp('next');
                            }}>
                                {'<< Previous'}

                            </button>
                        </span>
                        <span className="next-buttons">
                            <button className='btn btn-info' type="submit" 
                            onClick={() => {handleAddEmp('submit', true)}
                            }>
                                {'Add New Employee'}
                            </button>
                        </span>
                </section>
                :
                <section>
                    <FormMap />
                    {
                        pageSection === 'previous' ?
                        <BankPension /> :
                        pageSection === 'submit' ?
                        <Redirect children={{formData: [props.formData, {otherData: formFields}]}} to="/confirmation" /> :
                        pageSection === false
                    }
                </section>
            }
        </div>
    )
}

export default OtherData;
