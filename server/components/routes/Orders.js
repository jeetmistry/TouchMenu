const express = require('express')
const router = express.Router()
const {placeOrder, getOrders}  = require("../controller/Orders");

router.post("/placeorder",placeOrder);

router.get("/getorder/:restaurant_id/:table_id",getOrders);
module.exports = router