import React from 'react'
import { NavLink } from 'react-router-dom'
import './Checkout.css'

const Checkout = ({step1,step2,step3,step4}) => {
  return (
    <nav className='nav justify-content-center mb-1'>
<div className='nav-link'>{step1 ? (
<NavLink to="/signin" className="steps " >signin</NavLink>
):(
    <NavLink to="/" ><button className="buttonstep" disabled> Sign in </button></NavLink>
)}
</div>
<div className='nav-link '>{step2 ? (
<NavLink to="/shipping"  className="steps ">shipping</NavLink>
):(
    <NavLink to="/"  ><button className="buttonstep" disabled>  Shipping</button></NavLink>
)}
</div>
<div className='nav-link'>{step3 ? (
<NavLink to="/payment" className="steps " >payment</NavLink>
):(
    <NavLink to="/" ><button className="buttonstep " disabled> Payment </button></NavLink>
)}
</div>
<div className='nav-link'>{step4 ? (
<NavLink to="/placeorder" className="steps " > Order</NavLink>
):(
    <NavLink to="/" ><button className="buttonstep " disabled>  order</button></NavLink>
)}
</div>
    </nav>
  )
}

export default Checkout