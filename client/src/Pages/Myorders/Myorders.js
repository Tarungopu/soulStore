


import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { myorder } from '../../Actions/OrderActions/OrderActions';
import Loader from '../../components/Loader/Loader';

const Profile = () => {
  const orderuserdata=useSelector(state=>state.orderuserdata);
  const{orders,error,success}=orderuserdata;
  const dispatch=useDispatch();
      const orderupdatedata=useSelector(state=>state.orderupdatedata);
      const{success:updatesuccess}=orderupdatedata;
  
      useEffect(() => {
        dispatch( myorder())

       
      }, [updatesuccess,success,dispatch])
     
  return (
    <>
    
    <div className="container" >
      <h2 className="mb-3" style={{textAlign:"center"}}>My orders</h2>
      <NavLink to="/" className="card_button3 " style={{textDecoration:"none"}}>Go back</NavLink>

    {error ? (
      <div className="alert alert-danger" role="alert">
{error}    </div>
    ):
  (

    <div className='container'>
      <div className="table-responsive">
{orders && orders.data &&orders.data.length>=1? (
<table className="table table-hover">
  <thead>
  <tr>
    <th>Index</th>
<th> ID</th>
<th> Date</th>
<th> Paid by</th>
<th> Total Amount</th>
<th> User Id</th>
<th>Is delivered</th>

</tr>
</thead>
<tbody>
{orders.data==null 
 ? <Loader/>
 : orders.data && (orders.data.map((singleorderdetails,i)=>(
  <tr key={i}>
    <td>{i+1}</td>
<td>{singleorderdetails._id}</td>
<td>{singleorderdetails.createdAt}</td>
<td>{singleorderdetails.payment}</td>
<td>₹{(new Intl.NumberFormat().format(singleorderdetails.totalprice))}</td>
<td>{singleorderdetails.user}</td>
<td>{singleorderdetails.IsDelivered? (<span className="iconify" data-icon="bi:check-circle-fill" style={{color: "green"}}></span>) :
 (<span className="iconify" data-icon="fa-solid:ban" style={{color: "red"}}></span>)}</td>
  </tr>
)))
}
</tbody>
</table>
):(<h1>You have no orders</h1>)}
</div>
</div>

  )
}
  
  
       </div>
 </>

  )
}

export default Profile