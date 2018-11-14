
const express = require('express');
const router = express.Router();

const vehicleController = require("../controllers/VehicleController");

router.get("/vehicles", vehicleController.list);

router.get("/vehicles/:id", vehicleController.show);

router.post("/vehicles", vehicleController.create);

module.exports = router;