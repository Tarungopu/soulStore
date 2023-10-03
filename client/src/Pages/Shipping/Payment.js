import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paymentmethod } from "../../Actions/CartAction/CartAction";
import Checkout from "./Checkout";

const Payment = () => {
  const dispatch = useDispatch();

  const [paymenttype, setPaymenttype] = useState("cod");
  const cart = useSelector((state) => state.cartdata);
  const navigate = useNavigate();
  const { shippingdetails } = cart;
  if (!shippingdetails) {
    navigate("/shipping");
  }
  const handleshipping = (e) => {
    e.preventDefault();
    dispatch(paymentmethod({ paymenttype }));
    navigate("/placeorder");
  };

  return (
    <>
      <Checkout step1 step2 step3 />

      <div className="container my-3">
        <h1 className="my-3 mx-2 payment">Payment</h1>
        <form onSubmit={(e) => handleshipping(e)}>
          <div className="login__field">
            <h3 className="cod">
              <input
                type="radio"
                value="cod"
                id="cod"
                name="paymenttype"
                onChange={(e) => setPaymenttype(e.target.value)}
                checked
              />
              Cash On Delivery(cod) <i className="bx bx-money"></i>
            </h3>
          </div>

          <div className="login__field">
            <button className="steps mx-3 my-1">Continue</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Payment;
