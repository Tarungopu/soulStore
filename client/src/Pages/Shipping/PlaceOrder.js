import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { creatingorder } from "../../Actions/OrderActions/OrderActions.js";
import Checkout from "./Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartdata);
  const orderdetailsdata = useSelector((state) => state.orderdetailsdata);
  const { error } = orderdetailsdata;

 

  const { shippingdetails } = cart;

  cart.cartitemsprice = cart.cartitems.reduce(
    (total, s) => total + s.qty * s.Price,
    0
  );
  cart.shippingprice = Number(cart.cartitemsprice > 10000 ? 600 : 30);
  cart.tax = Number(cart.cartitemsprice > 15000 ? 500 : 18);
  cart.totalprice = Number(cart.cartitemsprice + cart.shippingprice + cart.tax);
  const checkouthandler = () => {
    dispatch(
      creatingorder({
        OrderedList: cart.cartitems,
        Shippingaddress: shippingdetails,
        payment: cart.paymentmethod.paymenttype,
        tax: cart.tax,
        shippingprice: cart.shippingprice,
        totalprice: cart.totalprice,
        itemsprice: cart.cartitemsprice,
      })
    );

    cart.cartitems.map((i) => {
      let v = i.product;
      let r = i.CountInstock - i.qty;

      axios.put(`/ECON1/PRODUCTS/edit/${v}`, { CountInStock: r });
    });

    setTimeout(function () {
      navigate("/");
      window.location.reload();
    }, 3500);
  };

  return (
    <>
      <Checkout step1 step2 step3 step4 />

      <ToastContainer />
      <div className="container my-3">
        <div className="row">
          <div className="row">
            <div className="col-6">
              <h1 className="address">Address</h1>
              <p className="miniaddress">
                Name:{shippingdetails.name},<br />
                Addrress:
                {shippingdetails.address},<br />
                City:{shippingdetails.city},<br />
                State:{shippingdetails.states},<br />
                ZipCode:{shippingdetails.zipcode}
              </p>{" "}
            </div>
            <div className="col-6">
              <h2 className="order">Order summary</h2>
              <p className="miniorder">
                Price=₹{new Intl.NumberFormat().format(cart.cartitemsprice)}
              </p>
              <p className="miniorder">ShippingPrice=₹{cart.shippingprice}</p>
              <p className="miniorder">Customs tax=₹{cart.tax}</p>
              <p className="miniorder">
                TotalPrice=₹{new Intl.NumberFormat().format(cart.totalprice)}
              </p>
              <div>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <button
                  onClick={checkouthandler}
                  disabled={cart.cartitems.length === 0}
                  className="steps mx-3 my-2"
                >
                  checkout
                </button>
              </div>
              <div></div>
            </div>
          </div>

          <hr />

          <h2>Ordered Items</h2>
          {cart.cartitems.length === 0 ? (
            <p key={cart.cartitems}>Your Cart is empty</p>
          ) : (
            cart.cartitems.map((singleitem, index) => (
              <div key={index}>
                <div className="container" key={index}>
                  <div
                    className="card my-3"
                    style={{ boxShadow: "  0 .5rem 1rem #D1D9E6" }}
                  >
                    <div className="row my-2">
                      <div className="col-3 my-2">
                        <img
                          src={`${singleitem.Img}`}
                          style={{
                            marginLeft: "20%",
                            width: "30px",
                            height: "30px",
                          }}
                          className="img-fluid "
                          alt=""
                        />
                      </div>
                      <div className="col-4">
                        <NavLink
                          to={`/products/${singleitem.product}`}
                          style={{ textDecoration: "none", color: "#000" }}
                          className="smallcart"
                        >
                          {singleitem.Name}
                        </NavLink>
                      </div>
                      <div className="col-5 mt-3 smallcart">
                        {singleitem.qty} x{" "}
                        {new Intl.NumberFormat().format(singleitem.Price)}={" "}
                        {new Intl.NumberFormat().format(
                          singleitem.qty * singleitem.Price
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
