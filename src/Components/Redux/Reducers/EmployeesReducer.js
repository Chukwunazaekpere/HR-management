import * as actions from "../Actions/ActionTypes";


const employeesReducer = (state=[], action) => {
    switch(action.type){
        case actions.ADD_EMPLOYEE:
            console.log(action.payload.formFields)
            return([
                ...state,
                {...action.payload.formFields}
            ])

        case actions.FETCH_RECORDS:
            console.log("Trasfferring records",action.payload.records['data'])
            return({
                ...action.payload.records['data']
            })

        default:
            return state
    }
}

export default employeesReducer;