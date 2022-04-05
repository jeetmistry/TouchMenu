const express = require('express')
const router = express.Router()
const {addMenu,showMenu,showCategory} = require("../controller/Menu");

//add item to menu
router.post("/add/:id",addMenu);

//show all items 
router.get("/show/:id",showMenu);

//show menu items by category 
router.get("/show/:id/:type",showCategory);
module.exports = router