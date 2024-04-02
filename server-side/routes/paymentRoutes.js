const express = require("express");
const router = express.Router();
const paymentFiveController = require("../controllers/paymentFive-controller");


router.route("/").get(paymentFiveController.index);



module.exports = router;