export const RegisteringDataReducer=(state={},action)=>{
    switch(action.type){
        case'REGISTRATION_SUCCESS':
        return{registeringdetails:action.payload}
            case 'REGISTRATION_FAILED':
                return{error:action.payload}
                default:
                    return state
    }

}