import axios from "axios";

export const cartad = (id, qty) => async (dispatch, getState) => {
  const carddetails = await axios.get(`/ECON1/PRODUCTS/${id}`);
  //getting by id -the details of singleproduct

  dispatch({
    type: "CART-ADDING",
    payload: {
      product: carddetails.data._id,
      Name: carddetails.data.Name,
      Img: carddetails.data.Img,
      Price: carddetails.data.Price,
      CountInstock: carddetails.data.CountInStock,
      qty: Number(qty),
    },
  });
  localStorage.setItem(
    "cartitems",
    JSON.stringify(getState().cartdata.cartitems)
  );
};
export const cartdelete = (id) => async (dispatch, getState) => {
  await axios.get(`/ECON1/PRODUCTS/${id}`);

  dispatch({ type: "CART-REMOVE", payload: id });

  localStorage.setItem(
    "cartitems",
    JSON.stringify(getState().cartdata.cartitems)
  );
};
export const shippingaddress = (data) => async (dispatch) => {
  dispatch({
    type: "SHIPPING_ADDRESS",
    payload: data,
  });
  localStorage.setItem("shippingdetails", JSON.stringify(data));
};
export const removeshippingaddress = () => async (dispatch) => {
  dispatch({
    type: "SHIPPING_ADDRESS_REMOVE",
  });
  localStorage.removeItem("shippingdetails");
};
export const paymentmethod = (data) => async (dispatch) => {
  dispatch({
    type: "PAYMENT_METHOD",
    payload: data,
  });
  localStorage.setItem("paymentmethod", JSON.stringify(data));
};
