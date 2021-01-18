import React, { useState } from "react";



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
        <div>
            {
                fields.map(field => (
                    <section key={field}>
                        <label>{field}:</label>
                        {
                            field === 'Gender' ?
                            <select name={field} onChange={event => handleFormChanges(event)}
                                    value={formFields[field]}>
                                <option>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            :
                            field === 'Marital-status' ?
                            <select name={field} onChange={event => handleFormChanges(event)}
                                    value={formFields[field]}>
                                <option>Select marital status</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                            </select>
                            :
                            <input type={field === 'Personal email*' ? 'email' : 
                                        field === 'Phone*' ? 'tel' : 
                                        field === 'Date of birth*' ? 'date': 'text'}
                                name={field} id=""
                                value={formFields[field]}
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
