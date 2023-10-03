import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { singleproductdata } from "../../Actions/ProductActions/ProductActions";
const SingleProduct = () => {
  const [qtyy, setQtyy] = useState(1);
  const { id } = useParams();

  const dispatch = useDispatch();

  const singleproduct = useSelector((state) => state.Singleproductdata);
  const { product } = singleproduct;
  const Productdata = useSelector((state) => state.Productdata);
  const { products } = Productdata;

  const single = product;
  useEffect(() => {
    if (!products._id || products._id !== id) {
      dispatch(singleproductdata(id));
    }
  }, [dispatch, id, products._id]);

  const discount = Math.round(single.Price / 4);

  const cartminus = () => {
    setQtyy(qtyy - 1);
  };
  const cartplus = () => {
    setQtyy(qtyy + 1);
  };
  var price = new Intl.NumberFormat().format(single.Price);

  return (
    <>
      <div className="container ">
        <NavLink
          to="/"
          className="card_button3"
          style={{ textDecoration: "none" }}
        >
          Go back
        </NavLink>
        <div className="row mx-2 ">
          <div
            className=" rounded-2 img-container col-lg-5  col-md-12 col-sm-12 "
            style={{ marginTop: "3rem", borderRadius: "50px" }}
          >
            <div className="overlay rounded-2"></div>

            <img src={`${single.Img}`} alt="" className="img-fluid" />

            <div className="buttoncarto">
              <NavLink to={`/cart/${id}/${qtyy}`} className="text-dark ">
                <button
                  className="carticon mb-3 "
                  disabled={single.CountInStock >= 1 ? false : true}
                >
                  Add to Cart
                </button>
              </NavLink>
            </div>
            <p className="pinned">
              <i className="bx bxs-star"></i> Highly rated{" "}
            </p>
            <p className="pinned2">
              {single.CountInStock >= 1 ? "in stock" : "out of stock"}
            </p>
          </div>

          <div
            className="  col-lg-5 col-md-12 col-sm-12"
            style={{ marginTop: "2.5rem" }}
          >
            <h1>
              {single.Name}({single.Brand})
            </h1>
            <strong style={{ marginTop: "30px" }}>{single.Category}</strong>
            <p style={{ marginTop: "10px" }}>{single.Description}</p>
            <div className="quantity my-4 ">
              <button
                className="btn btn-dark btn-sm mx-4 "
                onClick={() => cartminus()}
                disabled={qtyy === 0}
              >
                -
              </button>
              {qtyy}

              <button
                className="btn btn-dark btn-sm mx-4 "
                onClick={() => cartplus()}
                disabled={qtyy >= single.CountInStock}
              >
                +
              </button>
            </div>
            <h3>₹{price} </h3>
            <span>
              4 No-cost Emi starts from ₹
              {new Intl.NumberFormat().format(discount)} with extra
            </span>{" "}
            <span style={{ color: "green" }}>
              30% off<p style={{ color: "black" }}> on Maestro card</p>
            </span>
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
