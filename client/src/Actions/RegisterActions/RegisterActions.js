import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Registering = (name, email, password) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/users/Registration",
      { Email: email, Password: password, Name: name },
      config
    );
    dispatch({
      type: "REGISTRATION_SUCCESS",
      payload: data,
    });
    dispatch({
      type: "USER_LOGIN",
      payload: data,
    });
    localStorage.setItem("userdetails", JSON.stringify(data));
    toast.success("Registration success");
  } catch (error) {
    toast.error("registration failed");
    dispatch({
      type: "REGISTRATION_FAILED",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
