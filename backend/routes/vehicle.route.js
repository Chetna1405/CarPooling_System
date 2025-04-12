const express = require("express");
const router = express.Router();
// Controllers and Middlewares
const vehicle_controller = require("../controllers/vehicle.controller");
const auth_middleware = require("../middlewares/auth.middleware");
const vehicle_middleware = require("../middlewares/vehicle.middleware");

// Vehicle Routes
router.post("/register", [auth_middleware.validateToken, auth_middleware.isDriver, vehicle_middleware.validateVehicleRegistrationBody], vehicle_controller.registerVehicle);
router.put("/update/:id", [auth_middleware.validateToken, auth_middleware.isDriver, vehicle_middleware.validateVehicleUpdateBody], vehicle_controller.updateVehicle);

module.exports = router;