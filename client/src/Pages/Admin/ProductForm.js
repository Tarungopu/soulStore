import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductForm.css";
import TextField from "../Signin/TextField";
import { newproduct } from "../../Actions/ProductActions/ProductActions";
import axios from "axios";
import { Formik, Form } from "formik";

import * as Yup from "yup";

const ProductForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const [uploading, setUploading] = useState(false);

  const validate = Yup.object({
    productname: Yup.string().required("Please enter Product name"),

    description: Yup.string().required("Please enter description"),
    category: Yup.string().required("Please enter category"),
    brand: Yup.string().required("Please enter Product brand"),
    price: Yup.number()
      .min(1, "price should be minimum 1")
      .max(10000, "price  should be below 10000")
      .required("price is required"),

    countinstock: Yup.number()
      .min(10, "should be greater than 10")
      .required("Count in Stock is required"),
  });

  const handleupload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="container5">
        <div className="a">
          <div className="text-center mb-3" style={{ color: "#000" }}>
            <h2>ADD PRODUCT</h2>{" "}
          </div>{" "}
          <NavLink
            to="/"
            className=" card_button3 "
            style={{ textDecoration: "none" }}
          >
            Go back
          </NavLink>
          <Formik
            initialValues={{
              price: 0,
              countinstock: 0,
              productname: "",
              category: "",
              description: "",
              brand: "",
            }}
            validationSchema={validate}
            onSubmit={(values, onSubmitProps) => {
              dispatch(
                newproduct({
                  Name: values.productname,
                  Img: image,
                  Brand: values.brand,
                  CountInStock: values.countinstock,
                  Price: values.price,
                  Description: values.description,
                  Category: values.category,
                })
              );
              onSubmitProps.resetForm(true);
              setImage("");
              setTimeout(() => {
                navigate("/allproducts");
              }, 1500);
            }}
          >
            {(formik) => (
              <Form>
                <div className="products">
                  <div className="form">
                    <TextField
                      name="productname"
                      placeholder="Product Name"
                      type="text"
                    />
                    <TextField
                      name="description"
                      placeholder="Product Description"
                      type="text"
                    />
                    <TextField
                      name="category"
                      placeholder="Product Category"
                      type="text"
                    />
                    <TextField
                      name="brand"
                      placeholder="Product Brand"
                      type="text"
                    />
                    <TextField
                      name="price"
                      placeholder="Product Price"
                      type="number"
                    />
                    <TextField
                      name="countinstock"
                      placeholder="Count In Stock"
                      type="number"
                    />

                    <div className="input_field">
                      <label>Product Image</label>
                      <input
                        type="text"
                        className="input"
                        value={image}
                        disabled
                        onChange={(e) => setImage(e.target.value)}
                      />
                    </div>
                    <div className="input_field">
                      <label>upload Image</label>

                      <input
                        type="file"
                        className="input"
                        id="img-file "
                        onChange={handleupload}
                        required
                      />
                    </div>
                    <div className="input_field">
                      <button
                        className="btn btn-dark mt-4"
                        disabled={!(formik.dirty && formik.isValid)}
                        type="submit"
                      >
                        Add product
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProductForm;
