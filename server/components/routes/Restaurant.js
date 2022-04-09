const express = require('express')
const router = express.Router()
const {registerRestaurant,loginRestaurant, listRestaurants} = require("../controller/Restaurant");

router.post("/register",registerRestaurant);
router.post("/login",loginRestaurant);

//list all the restaurants 
router.get("/showRestaurants",listRestaurants);
module.exports = router