export const OrderDataReducer=(state={},action)=>{
switch(action.type){
    case'ORDER_SUCCESS':
    return{
        order:action.payload,
        success:true
    }
    case'ORDER_FAILED':
    return{
        error:action.payload
    }
    default:
        return state;
}
}

export const OrderDetailsDataReducer=(state={OrderedList:[],Shippingaddress:{}},action)=>{
    switch(action.type){
        case'ORDER_DETAILS_SUCCESS':
        return{
            order:action.payload,
            success:true
        }
        case'ORDER_DETAILS__FAILED':
        return{
            error:action.payload
        }
        default:
            return state;
    }
    }
    
export const OrderUserDataReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case'MY_ORDER_SUCCESS':
        return{
orders:action.payload,
            success:true
        }
        case'MY-ORDER_FAILED':
        return{
            error:action.payload
        }
        case'MY_ORDER_RESET':
        return{
            orders:[]

        }
        default:
            return state;
    }
    }


    export const OrderallDataReducer=(state={orders:[]},action)=>{
        switch(action.type){
            case'ALL_ORDER_REQUEST':
            return{loading:true}
            case'ALL_ORDER_SUCCESS':
            return{
    orders:action.payload,
                success:true
            }
            case'ALL_ORDER_FAILED':
            return{
                error:action.payload
            }
          
            default:
                return state;
        }
        }
    
    

        export const OrderDeleteReducer=(state={},action)=>{
            switch(action.type){
                case'ORDER_DELETE_REQUEST':
        return{loading:true}
                case'ORDER_DELETE_SUCCESS':
                return{success:true,loading:false}
              
                    case 'ORDER_DELETE_FAIL':
                        return{error:action.payload,loading:false}
                        default:
                            return state
            }
        
        }
        

        export const OrderUpdateReducer=(state={},action)=>{
            switch(action.type){
                case'ORDER_UPDATE_REQUEST':
        return{loading:true}
                case'ORDER_UPDATE_SUCCESS':
                return{success:true,loading:false}
              
                    case 'ORDER_UPDATE_FAIL':
                        return{error:action.payload,loading:false}
                        case 'ORDER_UPDATE_RESET':
                            return{}
        
                        default:
                            return state
            }
        
        }
        