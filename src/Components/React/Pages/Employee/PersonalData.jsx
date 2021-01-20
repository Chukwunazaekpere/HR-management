import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import "../../Styles/PersonalData.css";

import {Button} from "@material-ui/core";
import EmployeeInfo from "../Employee/EmplyeeInfo"
import FormMap from "../../Presentational/FormMap";

import {addEmployee} from "../../../Redux/Actions/Actions"

const PersonalData = () => {    
    const [formFields, setFormFields] = useState({
        'Lastname*': '',
        'Firstname*': '', 
        'Other Name': '', 
        'Gender': '',
        'Marital-status': '',
        'Personal email*': '',
        'Phone*': '',
        'Date of birth*': '',
        'Nationality*': '',
        'Current address*': '',
        'Permanent address*': '',
        'State*': '',
        'Town*': ''
    })
    const fields = Object.keys(formFields)
    const values = Object.values(formFields)
    console.log('values: ', values)

    const handleFormChanges = (event) =>{
        let updatedFields = formFields
        const fieldName = event.target.name
        const fieldValue = event.target.value
        updatedFields[fieldName] = fieldValue

        setFormFields({...updatedFields})
    }


    const dispatch = useDispatch()
    const [addNext, setAddNext] = useState(false)

    const handleAddEmp = () =>{
        setAddNext(!addNext)
    }
    
    return(
        <div className='animate__animated animate__swing'>
            {
                !addNext ?
                <section className='new-emp-form form-group'>
                    <h4 className='emp-form-title'>Personal Data:</h4>
                        {
                            fields.map(field => (
                                <section className='emp-field' key={field}>
                                    {
                                        field === 'Gender' ?
                                        <select className='form-control' name={field} required={true}
                                        value={formFields['field']} onChange={event => handleFormChanges(event)}>
                                            <option>Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        :
                                        field === 'Marital-status' ?
                                        <select className='form-control' name={field} required={true}
                                        value={formFields['field']} onChange={event => handleFormChanges(event)}>
                                            <option>Select marital status</option>
                                            <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        </select>
                                    :
                                        <input className='form-control' type={field === 'Personal email*' ? 'email' : 
                                        field === 'Phone*' ? 'tel' : 
                                        field === 'Date of birth*' ? 'date': 'text'}
                                        name={field} 
                                        value={formFields['field']}
                                        placeholder={field}
                                        required={true}
                                        onChange={event => handleFormChanges(event)}
                                        />
                                    }
                                </section>
                    
                            ))
                        }
                    {
                        values.forEach(value => {
                            let count = 0
                            if(value !== ""){
                                count++
                            }
                            if(count === values.length){
                                <span className='next-buttons'>
                                    <Button variant='constrained' className='next-btn btn btn-primary' onClick={() => {handleAddEmp(dispatch(addEmployee({formFields})))}}
                                disabled={false}>{'Next>>'}</Button>
                                </span>
                            }else{
                                <span className='next-buttons'>
                                    <Button variant='constrained' className='next-btn btn btn-primary' onClick={() => {handleAddEmp(dispatch(addEmployee({formFields})))}}
                                    disabled={true}>{'Next>>'}</Button>
                                </span>
                            }
                        })
                        
                    }
                </section>
                :

                <section>
                    <FormMap />
                    <EmployeeInfo />
                </section>
            }
        
           
        </div>
    )
}


export default PersonalData;
