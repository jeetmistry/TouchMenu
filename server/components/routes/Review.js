const express = require('express');
const { analyseReview } = require('../controller/Review');
const router = express.Router()

//post request to analyse the review positive or negative
router.post("/analyse",analyseReview);
module.exports = router;