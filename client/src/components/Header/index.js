import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { userlogout } from "../../Actions/UserAction/UserActions";
import Searchbox from "../SearchBox/Searchbox";
import img from "./sport-shoe.png";
import "./index.css";
const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartdata);
  const userdata = useSelector((state) => state.userdata);

  const { userdetails } = userdata;
  const noofitems = cart.cartitems.length;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const toggle = () => {
    return setShow(!show);
  };
  const logout = () => {
    dispatch(userlogout());

    navigate("/");
    localStorage.removeItem("shippingdetails");
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo" style={{ cursor: "pointer" }}>
          <NavLink to="/">
            {" "}
            <img src={img} style={{ width: "30px", height: "30px" }} alt="" />
          </NavLink>
        </div>
        <div className="boxsearch">
          <Searchbox />
        </div>
        <div className={show ? "links active" : "links"}>
          <Link onClick={() => toggle()} to="/">
            Home
          </Link>
          <Link onClick={() => toggle()} to="/cart">
            Cart{" "}
            <i className="bx bx-shopping-bag">
              <span className="badge badge-pill ">{noofitems}</span>
            </i>
          </Link>
          <div className="searchbox2">
            <Searchbox style={{ border: "1px solid #000" }} />
          </div>

          {userdata.userdetails ? (
            <>
              <Link onClick={() => toggle()} to="/myorders">
                My Orders<i className="bx bx-package "></i>
              </Link>
              <button className="logout" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <Link onClick={() => toggle()} to="/signin">
              {" "}
              Signin <i className="bx bx-user "></i>
            </Link>
          )}

          {userdetails && userdetails.IsAdmin && (
            <>
              <div className="dropdown link ">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  style={{
                    background: "#fff",
                    color: "#000",
                    outline: "none",
                    border: "none",
                    fontSize: "14px",
                  }}
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  Admin{" "}
                </button>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu dd"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <Link onClick={() => toggle()} to="/allusers">
                    All users
                  </Link>
                  <br />
                  <Link onClick={() => toggle()} to="/allproducts">
                    All products
                  </Link>
                  <br />
                  <Link onClick={() => toggle()} to="/allorders">
                    All orders
                  </Link>
                  <br />
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={show ? "bars-button active" : "bars-button"}
          onClick={() => toggle()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
