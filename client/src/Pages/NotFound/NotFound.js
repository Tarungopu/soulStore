import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2 className="text-center notfound">
        We can't find the page you are looking for.
        <br />
        Sorry for the incovenience
      </h2>
      <NavLink
        to="/"
        className="text-center Homenotfound"
        style={{
          textDecoration: "none",

          color: "#fff",
          background: "#000",
          padding: "10px 20px",
        }}
      >
        {" "}
        Home
      </NavLink>
    </div>
  );
};

export default NotFound;
