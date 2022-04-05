const express = require('express')
const router = express.Router()
const {placeOrder}  = require("../controller/Orders");

router.post("/placeorder",placeOrder);
module.exports = router