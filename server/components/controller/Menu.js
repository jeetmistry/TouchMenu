const Cart = require("../model/Cart");
const Menu = require("../model/Menu");

//add new item in the menu with a particular restaurant id
exports.addMenu = async(req,res)=>{
    id = req.params.id;
    data = req.body;
    const menu = {
        restaurant_id : id,
        item_name : data.item_name,
        item_description : data.item_description,
        item_rating:0,
        total_item_rating : 0,
        item_type : data.item_type,
        item_image : data.item_image,
        item_price : data.item_price
    }

    const newItem = new Menu(menu);
    const response  = await newItem.save();
    context = {"mesaage" : "New Item Added"};
    res.json(context);
}

//get all items of a particular restaurant
exports.showMenu = async(req,res) =>{
    try{
        console.log(req.params.id)
        const data = await Menu.find({restaurant_id : req.params.id});
        if(data){
            console.log("Showing Menu items");
            res.json(data);
        }else{
            context = {"message" : "No Menu Items found"}
            res.json()
        }
    }catch(err){
        console.log(err);
        context = {"message" : "No restaurant found"};
        res.json(context)
    }
}

//get veg/non veg menu items 
//get all items of a particular restaurant
exports.showCategory = async(req,res) =>{
    try{
        console.log(req.params.id)
        const data = await Menu.find({restaurant_id : req.params.id,item_type: req.params.type});
        if(data){
            console.log("Showing Menu items");
            res.json(data);
        }else{
            context = {"message" : "No Menu Items found"}
            res.json()
        }
    }catch(err){
        console.log(err);
        context = {"message" : "No restaurant found"};
        res.json(context)
    }
}


//delete particular menu item from restaurant, it will be a put req
exports.deleteMenuItem = async(req,res)=>{
    try{
        const id = req.params.id;
        await Cart.deleteMany({item_id:id});
        const response = await Menu.findByIdAndDelete({_id:id});
        console.log(response);
        const context= {"message" :"Menu Item Deleted Successfully"};
        res.json(context);
    }catch(err){
        console.log(err);
    }
}