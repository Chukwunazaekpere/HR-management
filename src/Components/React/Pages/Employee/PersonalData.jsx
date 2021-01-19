import React, { useState } from "react";
import "../../Styles/PersonalData.css";


const PersonalData = () => {
    const fields = ['Lastname*', 'Firstname*', 'Other Name', 'Gender',
                    'Marital-status', 'Personal email*',
                'Phone*', 'Date of birth*', 'Nationality*',
                'Current address*', 'Permanent address*',
                'State*', 'Town*']
    
    const [formFields, setFormFields] = useState({})
    fields.forEach(field => {
        formFields[field] = ''
    })

    const handleFormChanges = (event) =>{
        const name = event.target.name
        const value = event.target.value
        const updatedFields = formFields
        updatedFields[name] = value
        setFormFields(updatedFields)
    }
    return(
        <div className='new-emp-form form-group'>
            {
                fields.map(field => (
                    <section className='emp-field' key={field}>
                        {
                            field === 'Gender' ?
                            <select className='form-control' name={field} onChange={event => handleFormChanges(event)}
                                    value={formFields[field]}>
                                <option>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            :
                            field === 'Marital-status' ?
                            <select className='form-control' name={field} onChange={event => handleFormChanges(event)}
                                    value={formFields[field]}>
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
                                value={formFields[field]}
                                placeholder={field}
                                onChange={event => handleFormChanges(event)}
                                />
                                
                        }

                    </section>
                ))
            }
        </div>
    )
}


export default PersonalData;
