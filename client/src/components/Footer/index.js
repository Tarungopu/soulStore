
import React from 'react'
import {GoLocation} from 'react-icons/go'
import './index.css'

const Footer  =  () => {
  return (
<footer >
    <hr />
    <div className="container">
<div className="footer" >
    <div className="row-footer">
        <div className=" col-lg-12 col-md-12 mx-auto col-xl-12 col-sm-12">
              <div className="row">
                  <div className=" col-lg-3 col-md-6 col-sm-12">
                      <h2>Find a Store</h2>
                      <ul>
                          <li><a href="/#">BECOME A MEMBER</a></li>
                          <li><a href="/#">SIGN UP FOR EMAIL </a></li>
                          <li><a href="/#">STUDENT DISCOUNTS</a></li>
                          <li><a href="/#">SEND US FEEDBACK</a></li>
                      </ul>

                  </div>
                  <div className=" col-lg-3 col-md-6 col-sm-12">
                      <h2>GET HELP</h2>
                      <ul>
                          <li><a href="/#">Order status</a></li>
                          <li><a href="/#">Delivery</a></li>
                          <li><a href="/#">Payment Options</a></li>
                          <li><a href="/#">Contact us on www.enquiryshoe.com </a></li>
                      </ul>

                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                      <h2>ABOUT US</h2>
                      <ul>
                          <li><a href="/#">News</a></li>
                          <li><a href="/#">Careers</a></li>
                          <li><a href="/#">Investors</a></li>
                          <li><a href="/#">Sustainability</a></li>
                      </ul>

                  </div>
                  <div className=" col-lg-3 col-md-6 col-sm-12  ">
                  <div className="row ">
                   <div className=" col-xl-12 col-sm-12 col-lg-12 col-md-12 icons">
                   <a href="/#"><i className='bx bxl-twitter'></i></a>

                          <a href="/#"> <i className='bx bxl-facebook'></i></a>
                        <a href="/#"><i className='bx bxl-youtube'></i></a>
                          <a href="/#"><i className='bx bxl-instagram' ></i></a>
                      </div>
                      </div>
                  </div>

           </div>
        </div>
    </div>
  
</div>
<div style={{marginBottom:"10px"}}>
           <hr />
<p  className='text-center py-2'> <span style={{color:"#000"}}> <GoLocation style={{color:"#000"}}/>India   </span> &copy;  All Rights Reserved
</p>
</div>
</div>

</footer>  )

}

export default  Footer