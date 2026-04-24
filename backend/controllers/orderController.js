import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing orders using COD method

const placeOrder = async (req,res)=>{

    try {
        
        const {userId, items , amount, address} = req.body;
         const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
         }

         const newOrder = new orderModel(orderData);
         await newOrder.save();

         await userModel.findByIdAndUpdate(userId, {cartData:{}});

         res.json({success:true, message:"Order Placed Successfully"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})   
        
    }
      
}

// All Orders data for Admin Panel
const allOrders = async (req, res)=>{


}

//   User Orders Data for Frontend
const userOrders = async (req,res) =>{
          
    try {

        const { userId } = req.body;
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

}

//  Update order status from Admin panel
 const updateStatus = async (req, res) =>{


 }

 export {placeOrder, allOrders, userOrders, updateStatus}