const express = require('express');

const home_controller = require("../controllers/home_controller");

const router = express.Router();

console.log("Router loaded ");

router.get('/',home_controller.home);

router.post('/create-item',home_controller.homepost);

router.post('/delete-item',home_controller.homedelete);

module.exports = router;