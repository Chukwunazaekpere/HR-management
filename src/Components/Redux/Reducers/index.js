import {combineReducers} from 'redux';
import employeesReducer from "../Reducers/EmployeesReducer"

export const stateReducer = combineReducers({
    employees: employeesReducer
})

export default stateReducer;