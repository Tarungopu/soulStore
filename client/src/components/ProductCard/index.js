import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "@material-ui/core/Slider";

import Card from "./Card";
import { productsdata } from "../../Actions/ProductActions/ProductActions";
import "./index.css";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ProductCard = () => {
  const { words } = useParams();
  const [display, setDisplay] = useState(true);
  const [price, setPrice] = useState([0, 10000]);
  const pricehandler = (e, newPrice) => {
    setPrice(newPrice);
  };
  const dispatch = useDispatch();
  const Productdata = useSelector((state) => state.Productdata);
  const { loading, error, products } = Productdata;

  useEffect(() => {
    dispatch(productsdata(words, price));
  }, [dispatch, words, price]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div>
          {display && (
            <div className="aboutus">
              <NavLink to="/about" style={{ color: "white" }}>
                <i className="bx bx-store" style={{ fontSize: "18px" }}></i>
                About Us
              </NavLink>
              <i
                className="bx bx-x cancel"
                onClick={() => setDisplay(false)}
              ></i>
            </div>
          )}
          <marquee className="mt-4 bg-dark " style={{ color: "white" }}>
            {" "}
            LAUNCH DAY OFFER Get upto 70%off on nike jordan by ordering today.Offer expires
            tomorrow   {" "}
          </marquee>
          <div className="row  gx-5 mx-4 my-3">
            <div className=" col-sm-12 col-md-6 col-lg-6">
              <img
                src={require("./undraw_Profile_details_re_ch9r.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className=" col-sm-12 col-md-6 col-lg-6 mt-4">
              <h1 className="good">LOOKS GOOD </h1>
              <h1 className="good">RUNS GOOD </h1>
              <h1 className="good">FEELS GOOD </h1>
              <p className="movetozero">
                Move to zero is nike's journey towards zero carbon and zero
                waste to help protect the future of sport. follow each step in
                our journey and discover new ways we can move to zero together
              </p>
            </div>
          </div>
          <div className="container">
            <h1 style={{ marginBottom: "50px" }}>Latest Products</h1>
          </div>
          <Slider
            size="large"
            marks
            value={price}
            onChange={pricehandler}
            aria-labelledby="range-slider"
            valueLabelDisplay="on"
            min={0}
            step={500}
            max={10000}
            style={{ width: "300px", marginLeft: "10%", color: "#000" }}
          />
          <div className="container">
            <div className="row">
              {products.map((product, i) => (
                <div key={i} className="col-sm-12 col-lg-4 col-xl-4 col-md-6">
                  <Card key={i} product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
