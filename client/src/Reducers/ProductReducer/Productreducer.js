export const ProductDataReducer=(state={products:[]},action)=>{

    switch(action.type){
        case 'PRODUCT_DATA_REQUESTED':
            return {loading:true,products:[]}
            case 'PRODUCT_DATA_SUCCESS':
              
                return {loading:false,products:action.payload.data}
                case 'PRODUCT_DATA_FAIL':
                    return{loading:false,error:action.payload}
                    default:
                        return state
    }


}

export const singleproductreducer=(state={product:{}},action)=>{

    switch(action.type){
        case 'SINGLEPRODUCT_DATA_REQUESTED':
            return {loading:true,...state}
            case 'SINGLEPRODUCT_DATA_SUCCESS':
                return {loading:false,product:action.payload.data,success:true}
                case 'SINGLEPRODUCT_DATA_FAIL':
                    return{loading:false,error:action.payload}
                    case 'SINGLEPRODUCT_DATA_RESET':
                        return{}
    
                    default:
                        return state
    }


}
export const ProductDeleteReducer=(state={},action)=>{
    switch(action.type){
        case'PRODUCT_DELETE_REQUEST':
return{loading:true}
        case'PRODUCT_DELETE_SUCCESS':
        return{success:true,loading:false}
      
            case 'PRODUCT_DELETE_FAIL':
                return{error:action.payload,loading:false}
                default:
                    return state
    }

}

export const ProductNewReducer=(state={},action)=>{
    switch(action.type){
        case'PRODUCT_NEW_REQUEST':
return{loading:true}
        case'PRODUCT_NEW_SUCCESS':
        return{success:true,loading:false,product:action.payload}
      
            case 'PRODUCT_NEW_FAIL':
                return{error:action.payload,loading:false}
                case'PRODUCT_NEW_RESET':
                return{
        
                }
                default:
                    return state
    }

}
export const ProductUpdateReducer=(state={product:{}},action)=>{
    switch(action.type){
        case'PRODUCT_UPDATE_REQUEST':
return{loading:true}
        case'PRODUCT_UPDATE_SUCCESS':
        return{success:true,loading:false,product:action.payload}
      
            case 'PRODUCT_UPDATE_FAIL':
                return{error:action.payload,loading:false}
                case'PRODUCT_UPDATE_RESET':
                return{
        product:{}
                }
                default:
                    return state
    }

}

