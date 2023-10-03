import React, { useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartad, cartdelete } from "../../Actions/CartAction/CartAction";

const Cart = () => {
  const { id } = useParams();
  const { qty } = useParams();

  const cart = useSelector((state) => state.cartdata);
  const userdata = useSelector((state) => state.userdata);

  const allitems = cart.cartitems;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(cartad(id, qty));
    }
  }, [dispatch, id, qty]);
  const handlecheckout = () => {
    if (userdata.userdetails) {
      navigate("/shipping");
    } else {
      navigate("/signin");
    }
  };
  const handleplusqty = (s) => {
    dispatch(cartad(s.product, s.qty + 1));
  };

  const handleminusqty = (s) => {
    const singleid = s.product;
    dispatch(cartad(s.product, s.qty - 1));
  };
  let d;
  const handledelete = (singlecartitem) => {
    dispatch(cartdelete(singlecartitem.product));
  };
  const display = (singlecartitem, i) => (
    <div className="row " key={i}>
      <div className="col-12" style={{ marginTop: "20px" }}>
        <div
          className="card "
          style={{ margin: "5% 4%", marginTop: "5%", marginBottom: "1%" }}
        >
          <div className="row">
            <div className="col-2">
              <div className="card-img mx-2 ">
                <img
                  src={`${singlecartitem.Img}`}
                  style={{ marginLeft: "20%" }}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-4 offset">
              <div className="card-body offset-1">
                <p className="cartitemname">{singlecartitem.Name}</p>

                <p className="cartitemname">
                  {" "}
                  <br />₹{new Intl.NumberFormat().format(singlecartitem.Price)}
                </p>
              </div>
            </div>

            <div className=" col-sm-6 mt-4 col-4  addbuttons">
              <button
                className="btn btn-dark mx-1 smallbtns  btn-sm"
                onClick={() => handleminusqty(singlecartitem)}
                disabled={singlecartitem.qty <= 1}
              >
                -
              </button>
              {singlecartitem.qty}

              <button
                className="btn btn-dark mx-1 btn-sm smallbtns"
                onClick={() => handleplusqty(singlecartitem)}
                disabled={singlecartitem.qty === singlecartitem.CountInstock}
              >
                +
              </button>
            </div>
          </div>
          <div className="col">
            <i
              className="bx bxs-trash trashcan"
              onClick={() => handledelete(singlecartitem)}
              style={{ fontSize: "18px", cursor: "pointer", marginTop: "30px" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );

  const n = allitems.reduce((total, s) => total + s.qty * s.Price, 0);

  return (
    <>
      {allitems.length > 0 ? (
        <div className="container ">
          <NavLink
            to="/"
            className=" card_button3 "
            style={{ textDecoration: "none" }}
          >
            Go back
          </NavLink>

          <div className="row mx-4 my-4">
            <div className="col-6 col-sm-12">
              <h4
                className="subtotal"
                style={{ textAlign: "center", marginLeft: "25%" }}
              >
                Subtotal{" "}
                <span style={{ color: "#000" }}>
                  ₹{new Intl.NumberFormat().format(n)}
                </span>
              </h4>
            </div>
            <div className="col-4 col-sm-12"></div>
          </div>
          <div className="row">
            <div className="col-12 mx-3 mt-3">
              {allitems.map((singlecartitem, i) => display(singlecartitem, i))}
              <h4>
                <button className="btn btn check" onClick={handlecheckout}>
                  Checkout
                </button>
              </h4>

              <ToastContainer />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h1>The Cart is Empty ,We got some good stuff you could buy</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
