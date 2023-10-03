import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader.js";
import "../ProductForm.css";
import {
  productsdata,
  updateproduct,
} from "../../../Actions/ProductActions/ProductActions.js";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Productupdatedata = useSelector((state) => state.Productupdatedata);
  const { product, error, loading } = Productupdatedata;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [countinstock, setCountinstock] = useState(0);

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    axios.get(`/ECON1/PRODUCTS/${id}`).then((res) => {
      setBrand(res.data.Brand);
      setCategory(res.data.Category);
      setCountinstock(res.data.CountInStock);
      setDescription(res.data.Description);
      setImage(res.data.Img);
      setName(res.data.Name);
      setPrice(res.data.Price);
    });
  }, [id]);

  const handlesubmitter = (e) => {
    e.preventDefault();

    dispatch(
      updateproduct({
        _id: id,
        Name: name,
        Img: image,
        Brand: brand,
        CountInStock: countinstock,
        Price: price,
        Description: description,
        Category: category,
      })
    );

    setName("");
    setImage("");
    setBrand("");
    setCountinstock(0);
    setPrice(0);
    setDescription("");
    setCategory("");

    setTimeout(() => {
      navigate("/allproducts");
    }, 1500);
  };
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
    <div className="container">
      <NavLink
        to="/allproducts"
        className=" card_button3 "
        style={{ textDecoration: "none" }}
      >
        Go back
      </NavLink>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="container5">
          <div className="a">
            <div className="text-center mb-3" style={{ color: "#000" }}>
              <h2>UPDATE PRODUCT</h2>{" "}
            </div>{" "}
            <div className="form">
              <form onSubmit={(e) => handlesubmitter(e)}>
                <div className="input_field">
                  <label>Product Name</label>
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input_field">
                  <label>Product Image</label>
                  <input
                    type="text"
                    className="input"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </div>
                <div className="input_field">
                  <label>upload Image</label>

                  <input
                    type="file"
                    className="input"
                    id="img-file "
                    onChange={(e) => handleupload(e)}
                  />
                </div>
                {uploading && <Loader />}

                <div className="input_field">
                  <label>Brand</label>
                  <input
                    type="text"
                    className="input"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    required
                  />
                </div>

                <div className="input_field">
                  <label> Count In Stock</label>
                  <input
                    type="number"
                    className="input"
                    value={countinstock}
                    onChange={(e) => setCountinstock(e.target.value)}
                    required
                  />
                </div>

                <div className="input_field">
                  <label>Price</label>
                  <input
                    type="number"
                    id="points"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="points"
                    step="100"
                    min="1000"
                    max="10000"
                    required
                  />
                </div>

                <div className="input_field">
                  <label>Description</label>
                  <input
                    type="text"
                    className="input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="input_field">
                  <label>Category</label>
                  <input
                    type="text"
                    className="input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>

                <div className="input_field">
                  <button className="btn">Update Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EditProduct;
