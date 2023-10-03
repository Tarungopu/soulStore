import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const creatingorder = (order) => async (dispatch, getState) => {
  try {
    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const data = await axios.post("/orders", order, config);

    dispatch({
      type: "ORDER_SUCCESS",
      payload: data,
    });

    toast.success("order placed redirecting you to home page ");
    localStorage.removeItem("cartitems");
    localStorage.removeItem("shippingdetails");
    localStorage.removeItem("paymentmethod");
  } catch (error) {
    dispatch({
      type: "ORDER_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singleorder = (id) => async (dispatch, getState) => {
  try {
    const {
      userdata: { userdetails },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const data = await axios.get(`/orders/${id}`, config);

    dispatch({
      type: "ORDER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ORDER_DETAILS__FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const myorder = () => async (dispatch, getState) => {
  try {
    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const data = await axios.get(`/orders/myorders`, config);

    dispatch({
      type: "MY_ORDER_SUCCESS",
      payload: data,
    });

    localStorage.removeItem("cartitems");
  } catch (error) {
    dispatch({
      type: "MY-ORDER_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allorders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ALL_ORDER_REQUEST",
    });
    const {
      userdata: { userdetails },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userdetails.token}`,
      },
    };
    const { data } = await axios.get(`/orders/totalorders`, config);

    dispatch({
      type: "ALL_ORDER_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_ORDER_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteorder = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "ORDER_DELETE_REQUEST",
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
    await axios.delete(`/orders/delete/${id}`, config);
    dispatch({
      type: "ORDER_DELETE_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "ORDER_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateorder =
  ({ id, IsDelivered }) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_UPDATE_REQUEST",
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
      const data = await axios.put(
        `/orders/updateorder/${id}`,
        { IsDelivered },
        config
      );

      dispatch({
        type: `ORDER_UPDATE_SUCCESS`,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ORDER_UPDATE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
