import { createStore, compose } from "redux";
import stateReducer from '../Reducers'


const globalState = {
    employees: [
        {
            'Personal data':{},
            'Employee info': {},
            'Bank and Pension': {},
            'Other data': {}
        }
         
    ],

    admin: {
        name: ""
    }
}

const store = createStore(
    stateReducer,
    globalState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
    )

export default store;

