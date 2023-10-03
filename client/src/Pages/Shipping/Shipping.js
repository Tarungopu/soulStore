import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {   useNavigate } from 'react-router-dom';
import { shippingaddress } from '../../Actions/CartAction/CartAction';
import Checkout from './Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from "../Signin/TextField.js";
import * as Yup from "yup";
import { Formik, Form} from "formik";


const Shipping = () => {
    const dispatch=useDispatch();
    const cart=useSelector((state)=>state.cartdata);

    const{shippingdetails}=cart;
    const navigate=useNavigate()
   
    const validate = Yup.object({
        name:Yup.string()
  .required("please provide your name"),
     
      state:Yup.string()
.required("please provide State"),
        address: Yup.string()
          .required("Please enter address"),
          city: Yup.string()
          .required("Please enter city & zipcode"),
          zipcode: Yup.number()

          .required("Please enter phone number")


      });
    
   
  
  return (
    <>
            <Checkout step1  step2  /> 

    <div className="container mx-4 my-3">
        <ToastContainer/>
        <h1 className='shippinge'>Shipping</h1>
        <Formik
      initialValues={{
        name:shippingdetails.name || "",
        city:shippingdetails.city || "",
        address: shippingdetails.address || "",
        state: shippingdetails.states || "",
        zipcode :shippingdetails.zipcode || "",
      }}
      validationSchema={validate}
      onSubmit={(values,onSubmitProps) => {
            dispatch(shippingaddress({name:values.name,address:values.address,city:values.city,states:values.state,zipcode:values.zipcode}))
            if( !Formik.isValid){
navigate("/payment")}

            }      }
    >
  
      {(formik) => (

        <Form        >
        <div className="login__field">
                <i className="login__icon bx bx-user"></i>
                    <TextField
                          name="name"
                          placeholder="name"
                          type="text"
                          className="login__input"
                          /> 
            	</div>
		<div className="login__field">
                <i className="login__icon bx bx-home"></i>
                <TextField
                          name="address"
                          placeholder="address"
                          type="text"
                          className="login__input"
                          />
                    
            	</div>
                <div className="login__field">
                <i className="login__icon bx bxs-city"></i>
                <TextField
                          name="city"
                          placeholder="City"
                          type="text"
                          className="login__input"
                          />                    
            	</div>
                <div className="login__field">
                <i className="login__icon bx bx-location-plus"></i>
                <TextField
                          name="state"
                          placeholder="state and zip code"
                          type="text"
                          className="login__input"
                          />                    
            	</div>
                <div className="login__field">
                <i className="login__icon bx bx-code-alt"></i>
                <TextField
                          name="zipcode"
                          placeholder="phone number"
                          type="number"
                          className="login__input"
                          />                    
            	</div>
              
                <div className="login__field">
<button
                  className="steps  mx-3 my-4"
                //    disabled={!( formik.isValid)}
                  type="submit"
                >
                  Continue
                </button>              
            	</div>

        </Form>

)}
</Formik>

    </div>
    </>
    
  )
}

export default Shipping