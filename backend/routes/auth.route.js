const express = require("express");
const router = express.Router();
// Controllers and Middlewares
const auth_controller = require("../controllers/auth.controller");
const auth_middleware = require("../middlewares/auth.middleware");

// Authentication Routes

router.post("/signup", [auth_middleware.verifySignUpbody], auth_controller.signup);
router.post("/login", [auth_middleware.verifySignInBody], auth_controller.login);
router.post("/changePassword", [auth_middleware.verifyChangePasswordBody], auth_controller.changePassword);

module.exports = router;