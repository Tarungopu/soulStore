import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const productsdata =
  (words = "", price = [0, 10000]) =>
  async (dispatch) => {
    try {
      dispatch({ type: "PRODUCT_DATA_REQUESTED" });
      const products = await axios.get(
        `/ECON1/PRODUCTS/?words=${words}&Price[gte]=${price[0]}&Price[lte]=${price[1]} `
      );
      dispatch({ type: "PRODUCT_DATA_SUCCESS", payload: products });
    } catch (error) {
      dispatch({
        type: "PRODUCT_DATA_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const singleproductdata = (id) => async (dispatch) => {
  try {
    const singleproduct = await axios.get(`/ECON1/PRODUCTS/${id}`);
    dispatch({ type: "SINGLEPRODUCT_DATA_SUCCESS", payload: singleproduct });
  } catch (error) {
    dispatch({
      type: "SINGLEPRODUCT_DATA_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteproduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_DELETE_REQUEST",
    });

    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    await axios.delete(`/econ1/products/delete/${id}`, config);
    dispatch({
      type: "PRODUCT_DELETE_SUCCESS",
    });
    toast.error("Product deleted");
  } catch (error) {
    dispatch({
      type: "PRODUCT_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const newproduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_NEW_REQUEST",
    });

    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const { data } = await axios.post(
      `/econ1/products/create`,
      product,
      config
    );
    dispatch({
      type: "PRODUCT_NEW_SUCCESS",
      payload: data,
    });

    toast.success("Product Added");
  } catch (error) {
    dispatch({
      type: "PRODUCT_NEW_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateproduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "PRODUCT_UPDATE_REQUEST",
    });

    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const { data } = await axios.put(
      `/econ1/products/update/${product._id}`,
      product,
      config
    );
    dispatch({
      type: "PRODUCT_UPDATE_SUCCESS",
      payload: data,
    });
    toast.success("Product Updated");
  } catch (error) {
    dispatch({
      type: "PRODUCT_UPDATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
