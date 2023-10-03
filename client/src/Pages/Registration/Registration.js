import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Registering } from "../../Actions/RegisterActions/RegisterActions";
import TextField from "../Signin/TextField.js";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);
  const { error } = userdata;

  useEffect(() => {
    if (userdata.userdetails) {
      navigate(-1);
    }
  }, [navigate, userdata.userdetails]);
  const validate = Yup.object({
    name: Yup.string().min(5, "min limit is 5").required("Enter your name"),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email")
      .max(30, "max limit is 30")
      .min(5, "min limit is 5")
      .required("Enter email "),

    password: Yup.string()
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
        "password is weak"
      )
      .min(6, "The length should be greater than 6")
      .required("Enter Password"),
    confirmpassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  if (userdata.userdetails) {
    navigate("/cart");
  }

  return (
    <>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}{" "}
        </div>
      ) : (
        ""
      )}

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values, onSubmitProps) => {
          dispatch(Registering(values.name, values.email, values.password));
        }}
      >
        {(formik) => (
          <div className="container">
            <Form>
              <main className="main4">
                <header>
                  <ul className="header-menu">
                    <li>
                      <div id="header-login-wrapper">
                        <p id="header-login-button">Register</p>
                        <span id="header-login-line"></span>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        to="/signin"
                        id="header-register-button"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Login Now{" "}
                      </NavLink>
                    </li>
                  </ul>
                </header>
                <div id="content-wrapper" style={{ marginTop: "10%" }}>
                  <TextField
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="client-info"
                  />
                  <TextField
                    name="email"
                    placeholder="email"
                    type="text"
                    className="client-info"
                  />

                  <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    className="client-info"
                  />
                  <TextField
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    type="password"
                    className="client-info"
                  />
                  <button id="signin-button" style={{ padding: "10px 15px" }}>
                    Sign up{" "}
                  </button>
                </div>
              </main>
            </Form>
          </div>
        )}
      </Formik>

      <ToastContainer />
    </>
  );
};

export default Registration;
