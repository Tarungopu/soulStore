import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteusers,
  Totalusers,
} from "../../../Actions/UserAction/UserActions";
import Loader from "../../../components/Loader/Loader";
import "./Allusers.css";
const Allusers = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserListdata);
  const { loading, error, allusers } = user;
  const userdelete = useSelector((state) => state.UserDeletedata);
  const { success } = userdelete;
  useEffect(() => {
    dispatch(Totalusers());
  }, [success, dispatch]);
  const deleting = (id) => {
    dispatch(deleteusers(id));
  };

  return (
    <div className="container ">
      <NavLink
        to="/"
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
        <div className="container mt-3">
          <div className="table-responsive-lg">
            <h1 className="text-center">ALL USERS</h1>

            {allusers && allusers.length >= 1 ? (
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>User_Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>IsAdmin</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {allusers.map((singleuser, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{singleuser._id}</td>
                      <td>{singleuser.Name}</td>
                      <td>{singleuser.Email}</td>
                      <td>
                        {singleuser.IsAdmin === true ? (
                          <span
                            className="iconify"
                            data-icon="bi:check-circle-fill"
                            style={{ color: "green" }}
                          ></span>
                        ) : (
                          <span
                            className="iconify"
                            data-icon="fa-solid:ban"
                            style={{ color: "red" }}
                          ></span>
                        )}
                      </td>
                      <td>
                        <NavLink to={`/users/${singleuser._id}`}>
                          <span
                            className="iconify"
                            data-icon="akar-icons:edit"
                            style={{ color: "black" }}
                          ></span>
                        </NavLink>
                      </td>
                      <td>
                        {" "}
                        <i
                          className="bx bxs-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleting(singleuser._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2>No users</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Allusers;
