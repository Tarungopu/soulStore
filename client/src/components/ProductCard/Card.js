import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  var price = new Intl.NumberFormat().format(product.Price);

  return (
    <div className="singleproduct ">
      <div className="main3 bd-grid">
        <article className="card1">
          <div className="card__img">
            <img src={`${product.Img}`} className="card__img" alt="" />
          </div>
          <div className="card__name">
            <p>
              {product.Name} ({product.Category})
            </p>
          </div>

          <div className="card__precis">
            <div>
              <span className="card__preci card__preci--now">₹{price}</span>
            </div>
            <NavLink to={`/products/${product._id}`} className="card__icon">
              <ion-icon name="cart-outline"></ion-icon>Buy
            </NavLink>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Card;
