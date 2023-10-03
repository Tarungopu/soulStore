import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import { BsCheck2All } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  allorders,
  deleteorder,
  myorder,
  updateorder,
} from "../../../Actions/OrderActions/OrderActions";
const Allorders = () => {
  const dispatch = useDispatch();

  const orderalldata = useSelector((state) => state.orderalldata);
  const { error, orders, loading } = orderalldata;
  const orderdelete = useSelector((state) => state.orderDeletedata);
  const { success: deletesuccess } = orderdelete;
  const orderupdatedata = useSelector((state) => state.orderupdatedata);
  const { success: updatesuccess } = orderupdatedata;
  useEffect(() => {
    dispatch(allorders());
    dispatch(myorder());
  }, [dispatch, deletesuccess, updatesuccess]);

  const deleting = (id) => {
    dispatch(deleteorder(id));
    toast.error("order deleted");
  };
  const markasdelivered = (id) => {
    dispatch(updateorder({ id, IsDelivered: true }));
  };
  const markasnotdelivered = (id) => {
    dispatch(updateorder({ id, IsDelivered: false }));
  };

  return (
    <div className="container ">
      <h1 className="text-center">ALL Orders</h1>
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
        <div className="container">
          <div className="table-responsive-lg">
            {orders && orders.length >= 1 ? (
              <table className="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Order_id</th>
                    <th>Total Price</th>
                    <th>Is Paid</th>
                    <th>Is Delivered</th>
                    <th colSpan="2">Mark as delivered</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((singleorder, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{singleorder._id || ""}</td>
                      <td>
                        ₹
                        {new Intl.NumberFormat().format(
                          singleorder.totalprice
                        ) || ""}
                      </td>

                      <td>
                        {singleorder.IsPaid === true ? (
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
                        {singleorder.IsDelivered === true ? (
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
                        <BsCheck2All
                          style={{
                            color: "green",
                            fontSize: "32px",
                            cursor: "pointer",
                          }}
                          onClick={() => markasdelivered(singleorder._id)}
                        />
                      </td>
                      <td>
                        <MdCancel
                          style={{
                            color: "red",
                            fontSize: "32px",
                            cursor: "pointer",
                          }}
                          onClick={() => markasnotdelivered(singleorder._id)}
                        />
                      </td>
                      <td>
                        <i
                          className="bx bxs-trash"
                          style={{ cursor: "pointer" }}
                          onClick={() => deleting(singleorder._id)}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h2>No Orders</h2>
            )}
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Allorders;
