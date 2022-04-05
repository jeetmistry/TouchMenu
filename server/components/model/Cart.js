const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    restaurant_id : {
        type : mongoose.Types.ObjectId
    },
    item_id : {
        type : mongoose.Types.ObjectId
    },
    table_id : {
        type : Number
    },
    quantity : {
        type : Number
    },
    total_amount : {
        type : Number
    }
});

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;