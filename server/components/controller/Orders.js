const Orders = require("../model/Orders")
const Cart = require("../model/Cart")

exports.placeOrder = async(req,res)=>{
    const data = req.body
    const order = {
        restaurant_id:data.restaurant_id,
        table_id:data.table_id,
        total_amount:data.total_amount,
        status:"Order Placed",
        items:data.items
    }
    try{
        const response = await Cart.deleteMany({restaurant_id:data.restaurant_id,table_id:data.table_id});
    }catch(err){
        console.log(err);
        res.json({"message":"error"})
    }
    const newOrder = new Orders(order);
    const response = await newOrder.save();
    res.json(response);
}