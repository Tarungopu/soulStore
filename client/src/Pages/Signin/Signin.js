import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { userlogin } from "../../Actions/UserAction/UserActions";
import { ToastContainer } from "react-toastify";
import TextField from "./TextField";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);
  const { userdetails, error } = userdata;

  useEffect(() => {
    if (userdata.userdetails) {
      navigate(-1);
    }
  }, [userdata.userdetails, navigate]);

  const redirectinghandler = () => {
    if (userdata.userdetails) {
      navigate(-1);
    }
  };
  const validate = Yup.object({
    email: Yup.string()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email")
      .max(30, "max limit is 30")
      .min(5, "min limit is 5")
      .required("Please enter email id"),

    password: Yup.string()
      .min(6, "The length should be greater than 6")
      .required("Please enter Password"),
  });

  return (
    <>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values, onSubmitProps) => {
            dispatch(userlogin(values.email, values.password));
          }}
        >
          {(formik) => (
            <>
              <div className="container">
                <Form>
                  <main className="main4">
                    <header>
                      <ul className="header-menu">
                        <li>
                          <div id="header-login-wrapper">
                            <p id="header-login-button">Log In</p>
                            <span id="header-login-line"></span>
                          </div>
                        </li>
                        <li>
                          <NavLink
                            to="/register"
                            id="header-register-button"
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            Register Now
                          </NavLink>
                        </li>
                      </ul>
                    </header>
                    <div id="content-wrapper">
                      <TextField
                        name="email"
                        placeholder="email"
                        type="text"
                        className="client-info"
                        //
                      />

                      <TextField
                        name="password"
                        type="password"
                        placeholder="password"
                        className="client-info"
                      />
                      <button
                        id="signin-button"
                        style={{ padding: "10px 15px", margin: "10px 60px" }}
                        onClick={redirectinghandler()}
                      >
                        Log In
                      </button>
                    </div>
                  </main>
                </Form>
              </div>
            </>
          )}
        </Formik>

        <ToastContainer style={{ zIndex: "200" }} />
      </div>
    </>
  );
};

export default Signin;
