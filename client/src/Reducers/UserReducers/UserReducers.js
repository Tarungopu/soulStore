export const UserDataReducer=(state={},action)=>{
    switch(action.type){
        case'USER_LOGIN':
        return{userdetails:action.payload}
        case 'USER_LOGOUT':
            return{}
            case 'USER_LOGIN_FAIL':
                return{error:action.payload}
                default:
                    return state
    }

}

export const UserDetailsReducer=(state={user:{}},action)=>{
    switch(action.type){
        case'USER_DETAILS_SUCCESS':
        return{user:action.payload}
        case 'USER_DETAILS_REQUEST':
            return{...state,loading:true}
            case 'USER_DETAILS_FAIL':
                return{error:action.payload}
                default:
                    return state
    }

}
export const UserListReducer=(state={allusers:[]},action)=>{
    switch(action.type){
        case'USER_LIST_REQUEST':
return{loading:true}
        case'USER_LIST_SUCCESS':
        return{allusers:action.payload,loading:false}
      
            case 'USER_LIST_FAIL':
                return{error:action.payload,loading:false}
                default:
                    return state
    }

}

export const UserDeleteReducer=(state={},action)=>{
    switch(action.type){
        case'USER_DELETE_REQUEST':
return{loading:true}
        case'USER_DELETE_SUCCESS':
        return{success:true,loading:false}
      
            case 'USER_DELETE_FAIL':
                return{error:action.payload,loading:false}
                default:
                    return state
    }

}
export const UserUpdateReducer=(state={user:{}},action)=>{
    switch(action.type){
        case'USER_UPDATE_REQUEST':
return{loading:true}
        case'USER_UPDATE_SUCCESS':
        return{success:true,loading:false}
      
            case 'USER_UPDATE_FAIL':
                return{error:action.payload,loading:false}
                case 'USER_UPDATE_RESET':
                    return{user:{}}

                default:
                    return state
    }

}
