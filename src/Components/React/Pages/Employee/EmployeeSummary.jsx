import React, { useState, useEffect } from "react";
import "../../Styles/EmployeeSummary.css";
import { Button } from "@material-ui/core";

import {useSelector, useDispatch } from "react-redux"
import {Link} from "react-router-dom";

import { BsFillPersonPlusFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";


import PersonalData from "../Employee/PersonalData"
import FormMap from "../../Presentational/FormMap";
import axios from 'axios'
import {getDBRecords} from "../../../Redux/Actions/Actions";

const EmployeeSummary = () =>{
    const emp_menu = ['Total Employees', 'Current Employees', 'Pending Employees',
                'KGM Direct Employees', 'Temporary Employees', 'NYSC Employees',
                'Expatriate Employees', 'Consultant Employees', 'SIWES Employees']

    const [addEmp, setAddEmp] = useState(false)

    const handleAddEmp = () =>{
        setAddEmp(!addEmp)
    }
    // console.log("\n\t Emp size: ", total_emp)
    const total_emp = useSelector(state => state.employees)
    
    const fetch_records = useDispatch()
    let size = Object.keys(total_emp)
    console.log(total_emp)
    let emp_size = size.length

    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/get-employees/")
        .then(response => {
            // sieve query to eliminate duplication
            console.log('Resp: ', response.data)
            fetch_records(getDBRecords(response))
        }).catch(error => console.log(error))
       
    })
    

    return(
        <div className='summary-container'>
            {
                !addEmp ?
                <section>
                    <section className='add-emp'>
                        <Link onClick={() => handleAddEmp()} className='btn btn-primary'>Add New Employee <BsFillPersonPlusFill /></Link>
                    </section>
                    <hr/>
                    <section className='item-holder'>
                        {
                            emp_menu.map(item => (
                                <ul  key={item}>
                                    <li className='item-details'>
                                        <div> 
                                            {/* <span className='rectangle'> */}
                                            <HiUserGroup color='darkolivegreen' size='40px'/> 
                                            {/* </span> */}
                                            <span className='mb-5 text-cat'>
                                                {item} <br/>
                                                <span className='mb-4 total-emp'>{emp_size}</span>
                                            </span> 
                                        </div>
                                            <br/>
                                            <hr/>
                                            {/* <Button >Details</Button> */}
                                    </li>
                                </ul>
                            ))
                        }
                    </section>
                </section>
                :
                <section>
                    <FormMap />
                    <PersonalData />
                </section>
            }

        </div>
    )
}

export default EmployeeSummary;