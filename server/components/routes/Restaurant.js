const express = require('express')
const router = express.Router()
const {registerRestaurant,loginRestaurant} = require("../controller/Restaurant");

router.post("/register",registerRestaurant);
router.post("/login",loginRestaurant);
module.exports = router