import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import {
  Getsingledetails,
  updateuser,
} from "../../../Actions/UserAction/UserActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../components/Loader/Loader";
import "./Editingusers.css";

const EditingUsers = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Userdetailsdata = useSelector((state) => state.Userdetailsdata);
  const { user, error } = Userdetailsdata;
  const UserUpdatedata = useSelector((state) => state.UserUpdatedata);
  const {
    success: updatesuccess,
    loading: updateloading,
    error: updaterror,
  } = UserUpdatedata;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (updatesuccess) {
      dispatch({ type: "USER_UPDATE_RESET" });

      navigate(-1);
    } else {
      if (!user.name || user._id !== id) {
        dispatch(Getsingledetails(id));
        setEmail(user.Email || "");
        setName(user.Name || "");
        setIsAdmin(user.IsAdmin || false);
      }
    }
  }, [
    user.IsAdmin,
    user.Email,
    user.Name,
    dispatch,
    id,
    navigate,
    updatesuccess,
    user.name,
    user._id,
  ]);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (isAdmin === true || isAdmin === false) {
      dispatch(
        updateuser({ _id: id, Name: name, Email: email, IsAdmin: isAdmin })
      );
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <NavLink
        to="/"
        className=" card_button3 "
        style={{ textDecoration: "none" }}
      >
        Go back
      </NavLink>

      {updateloading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error} {updaterror}{" "}
        </div>
      ) : (
        <div className="edit">
          <div className="edit-triangle"></div>

          <h2 className="edit-header">Edit User</h2>

          <form className="edit-container" onSubmit={(e) => handlesubmit(e)}>
            <p>
              {" "}
              <input
                type="text"
                className="editfields"
                placeholder=" Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </p>

            <p>
              {" "}
              <input
                type="text"
                className="editfields"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </p>
            <div className="input_field" style={{ margin: "5% 5%" }}>
              <input
                type="checkbox"
                className="input"
                style={{ width: "15", height: "20px" }}
                checked={isAdmin}
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <label>IS ADMIN</label>
            </div>
            <button className="editfields submit">Update</button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditingUsers;
