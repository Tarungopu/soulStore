import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension';
import {ProductDataReducer, ProductDeleteReducer, ProductNewReducer, ProductUpdateReducer, singleproductreducer} from './Reducers/ProductReducer/Productreducer.js'
import { cartreducer } from './Reducers/CartReducer.js/Cartreducer.js';
import { UserDataReducer, UserDeleteReducer, UserDetailsReducer,UserListReducer, UserUpdateReducer } from './Reducers/UserReducers/UserReducers.js';
import { RegisteringDataReducer } from './Reducers/RegisteringReducers/RegisteringReducers.js';
import { OrderallDataReducer, OrderDataReducer, OrderDeleteReducer, OrderDetailsDataReducer, OrderUpdateReducer, OrderUserDataReducer } from './Reducers/OrderReducer/OrderReducers.js';
const cartitemsfromstorage=localStorage.getItem('cartitems') ? JSON.parse(localStorage.getItem('cartitems')) :[]
const userdetailsfromstorage=JSON.parse(localStorage.getItem('userdetails')) ;
const shippingdetailsfromstorage=localStorage.getItem('shippingdetails')  ? JSON.parse(localStorage.getItem('shippingdetails')) :"";
const initialstate={

    cartdata:{cartitems:cartitemsfromstorage,shippingdetails:shippingdetailsfromstorage},
    userdata:{userdetails:userdetailsfromstorage}
};
const reducers=combineReducers({
Productdata:ProductDataReducer,
Singleproductdata:singleproductreducer,
Productdeletedata:ProductDeleteReducer,
Productnewdata:ProductNewReducer,
Productupdatedata:ProductUpdateReducer,
cartdata:cartreducer,
userdata:UserDataReducer,
Registerdata:RegisteringDataReducer,
Userdetailsdata:UserDetailsReducer,
UserListdata:UserListReducer,
UserDeletedata:UserDeleteReducer,
UserUpdatedata:UserUpdateReducer,
orderdata:OrderDataReducer,
orderdetailsdata:OrderDetailsDataReducer,
orderuserdata:OrderUserDataReducer,
orderalldata:OrderallDataReducer,
orderDeletedata:OrderDeleteReducer,
orderupdatedata:OrderUpdateReducer




});
const middleware=[thunk]

const store=createStore(reducers,initialstate,composeWithDevTools(applyMiddleware(...middleware)));


export default store;
