import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const userlogin = (email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/users/loginuser",
      { Email: email, Password: password },
      config
    );
    dispatch({
      type: "USER_LOGIN",
      payload: data,
    });
    localStorage.setItem("userdetails", JSON.stringify(data));
    toast.success("logged in");
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.warning("Login failed");
  }
};
export const userlogout = () => async (dispatch) => {
  localStorage.removeItem("userdetails");
  localStorage.removeItem("shippingdetails");

  dispatch({
    type: "USER_LOGOUT",
  });

  dispatch({
    type: "MY_ORDERS_RESET",
  });
};

export const Totalusers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_LIST_REQUEST",
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
    const { data } = await axios.get("/users/allusers", config);
    dispatch({
      type: "USER_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    toast.warning("something went wrong");
  }
};

export const deleteusers = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_DELETE_REQUEST",
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
    await axios.delete(`/users/delete/${id}`, config);
    dispatch({
      type: "USER_DELETE_SUCCESS",
    });
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateuser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_UPDATE_REQUEST",
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
    const data = await axios.put(`/users/updateuser/${user._id}`, user, config);

    dispatch({
      type: "USER_UPDATE_SUCCESS",
    });
    dispatch({
      type: `USER_DETAILS_SUCCESS`,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_UPDATE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Getsingledetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_DETAILS_REQUEST",
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
    const { data } = await axios.get(`/users/singleuser/${id}`, config);
    dispatch({
      type: "USER_DETAILS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "USER_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
