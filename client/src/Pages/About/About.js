import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container ">
      <h1>About us</h1>
      <hr />{" "}
      <div className="row mt-5">
        <div className="col-lg-6  col-sm-12">
          <div className="cardeee mx-auto">
            <div className="box">
              <div className="front">
                <div className="center">
                  <div className="cardeee_img">
                    <img
                      src="/Images/ironman.jpg"
                      alt=""
                      className="img-fluid me-auto"
                    />
                    <h5 className="mt-5 mb-3 title">santhosh</h5>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="row">
                  <h5>Santhosh</h5>
                  <h6>Email:querysmartshoe@gmail.com</h6>
                  <h6>Phone:+910123456780</h6>
                  <div className="social-linke mb-1 me-auto">
                    <i className="bx bxl-facebook"> </i>

                    <a href=" /#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  col-sm-12">
          <div className="cardeee mx-auto">
            <div className="box">
              <div className="front">
                <div className="center">
                  <div className="cardeee_img">
                    <img
                      src="/Images/moonknit.jpg"
                      alt=""
                      className="img-fluid me-auto"
                    />
                    <h5 className="mt-5 mb-3 title">Satya</h5>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="row">
                  <h5>Satya</h5>
                  <h6>Email:querysmartshoe@gmail.com</h6>
                  <h6>Phone:+910123456780</h6>
                  <div className="social-linke mb-1 me-auto">
                    <a href=" /#">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href=" /#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href=" /#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}

      </div>
    </div>
  );
};

export default About;
