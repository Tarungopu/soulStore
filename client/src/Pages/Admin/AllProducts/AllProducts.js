import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./AllProducts.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteproduct,
  productsdata,
} from "../../../Actions/ProductActions/ProductActions";
import Loader from "../../../components/Loader/Loader";

const AllProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Productdata = useSelector((state) => state.Productdata);
  const { loading, success: getsuccess, error, products } = Productdata;
  const userdata = useSelector((state) => state.userdata);
  const { userdetails } = userdata;
  const Productnewdata = useSelector((state) => state.Productdeletedata);
  const {
    loading: loadingcreate,
    success: successcreate,
    error: errorcreate,
    product: createdproduct,
  } = Productnewdata;

  useEffect(() => {
    dispatch({
      type: "PRODUCT_NEW_RESET",
    });
    if (!userdetails.IsAdmin) {
      navigate("/");
    }

    dispatch(productsdata());
  }, [
    dispatch,
    successcreate,
    getsuccess,
    createdproduct,
    navigate,
    userdetails.IsAdmin,
  ]);

  const deleting = (id) => {
    dispatch(deleteproduct(id));
  };
  const handleadd = () => {
    navigate("/productform");
  };
  return (
    <div className="container my-3">
      <NavLink
        to="/"
        className=" card_button3 "
        style={{ textDecoration: "none" }}
      >
        Go back
      </NavLink>
      {loadingcreate && <Loader />},
      {errorcreate && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <h1 className="Allproducts text-center">ALL Products</h1>
      <button
        className="btn btn createproduct"
        style={{ backgroundColor: "#000", color: "#fff" }}
        onClick={() => handleadd()}
      >
        Create Product
      </button>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="container">
          <div className="table-responsive-lg">
            {products && products.length >= 1 ? (
              <table
                className="table table-striped table-hover  "
                style={{ marginTop: "40px" }}
              >
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Product_id</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Price(₹)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((singleproduct, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{singleproduct._id}</td>
                      <td>{singleproduct.Name}</td>
                      <td>{singleproduct.Brand}</td>
                      <td>
                        ₹{new Intl.NumberFormat().format(singleproduct.Price)}
                      </td>

                      <td>
                        <NavLink to={`/edit/${singleproduct._id}`}>
                          <span
                            className="iconify"
                            data-icon="akar-icons:edit"
                            style={{ color: "black" }}
                          ></span>
                        </NavLink>
                      </td>
                      <td>
                        {" "}
                        <i
                          className="bx bxs-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleting(singleproduct._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2>No products</h2>
            )}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default AllProducts;
