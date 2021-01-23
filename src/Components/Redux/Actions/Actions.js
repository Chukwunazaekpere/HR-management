import * as actions from "./ActionTypes";

export const addEmployee = (emp_details) => {
    console.log("Action called!...", emp_details)
    return({
        type: actions.ADD_EMPLOYEE,
        payload: {
            ...emp_details
        }
    })
}

export const removeEmployee = (emp_names) => {
    return({
        type: actions.ADD_EMPLOYEE,
        payload: {
            ...emp_names
        }
    })
}

export const getDBRecords = (dbRecords) =>{

    return({
        type: actions.FETCH_RECORDS,
        payload:{
            records: dbRecords
        }
    })
}