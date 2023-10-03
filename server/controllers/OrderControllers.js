import Order from '../models/Ordermodel.js';
const creatingOrder=async(req,res)=>{
const {OrderedList,Shippingaddress,payment,tax,shippingprice,totalprice,cartitemsprice}=req.body;


if(OrderedList && OrderedList.length==0){
    res.status(400)
    throw new Error("No items ordered")
    return ;
}
else{
    const order=new Order({
        OrderedList,
        user:req.user._id,
        Shippingaddress,
        payment
        ,tax
        ,shippingprice
        ,totalprice,
        cartitemsprice
    })
    const neworder=await order.save()
    res.status(201).json(order)
}
}

const singleorder=async(req,res)=>{
    

   const order=await Order.findById(req.params.id).populate('user' ,  'Name')
   if(order){
       res.json(order)
   }else{
       res.status(400).json("order not found");
       throw new Error("order not found")
   }
    }
   
    const myorders=async(req,res)=>{
        const orders=await Order.find({user:req.user._id})
res.json(orders)
    }
    const totalorders =async(req,res)=>{
        const order=await Order.find({}).populate('user','id ');
        res.json(order)
       
        }
        const deleteorders =async(req,res)=>{
            const order=await Order.findByIdAndDelete(req.params.id);
            res.json(order)
           
            }



const updatingorder =async(req,res)=>{
    const order=await Order.findById(req.params.id)
    if(order){
        order.IsDelivered=req.body.IsDelivered;
    
const updatedorder=await order.save()
res.json({
  
  updatedorder
})
    }
    else{
        res.json("order not found").status(400)
    }
    }



export {creatingOrder,singleorder,myorders,totalorders,deleteorders,updatingorder}
