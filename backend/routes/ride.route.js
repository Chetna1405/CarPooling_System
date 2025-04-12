const express = require("express");
const router = express.Router();
// Controllers and Middlewares
const auth_middleware = require("../middlewares/auth.middleware");
const ride_controller = require("../controllers/ride.controller");
const ride_middleware = require("../middlewares/ride.middleware");


router.post("/create", [auth_middleware.validateToken, auth_middleware.isDriver, ride_middleware.checkRideCreationRequest], ride_controller.registerRide);
router.post("/start/:ride_id", [auth_middleware.validateToken, auth_middleware.isDriver], ride_controller.startRide);
router.post("/finish/:ride_id", [auth_middleware.validateToken, auth_middleware.isDriver], ride_controller.finishRide);
router.post("/cancel/:ride_id", [auth_middleware.validateToken, auth_middleware.isDriver], ride_controller.cancelRide);
router.post("/requestRide/:ride_id", [auth_middleware.validateToken, auth_middleware.isRider], ride_controller.requestRide);
router.post("/acceptRideRequest/:ride_id/:passenger_id", [auth_middleware.validateToken, auth_middleware.isDriver], ride_controller.acceptRideRequest);
router.get("/details/:ride_id", [auth_middleware.validateToken], ride_controller.getRideDetails);

module.exports = router;