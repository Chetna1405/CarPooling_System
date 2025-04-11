// Dependencies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Database model modules
const user_model = require("../models/user.model");
const logger = require("../logger");

// User signup controller
const signup = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const userObj = {
            name: req.body.name,
            nickname: req.body.nickname,
            username: req.body.username,
            password: hashedPassword,
            role: req.body.role,
            gender: req.body.gender,
            contact: req.body.contact,
            address: req.body.address,
        };
        const user_created = await user_model.create(userObj);
        res.status(201).send({
            message: `Thanks ${user_created.name}. You are registered successfully !`,
        });
    } catch (error) {
        logger.error("Error while registering user: ", error);
        res.status(501).send({
            error: "User Registration Failed",
        });
    }
};

// User login controller
const login = async (req, res) => {
    const user = await user_model.findOne({ username: req.body.username });
    if (user == null) {
        return res.status(401).send({
            error: "User for given username not found",
        });
    }
    try {
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                error: "Invalid username or password",
            });
        }
        const payload = { id: user._id, username: user.username, role: user.role };
        const options = { expiresIn: "30d" };
        const token = jwt.sign(payload, process.env.SECRET, options);
        
        // Set cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "Lax",
            secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 30 * 24 * 60 * 60 * 1000,
            path: "/",
        });

        // Send response with token
        res.status(200).send({
            message: "Logged In Successfully",
            token: token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role,
                name: user.name
            }
        });
    } catch (error) {
        logger.error("Error while validating password: ", error);
        res.status(500).send({
            error: "Login failed",
        });
    }
};



const changePassword = async (req, res) => {
    const user = req.user;
    const newpassword = req.body.password;
    try {
        const updation = await user_model.updateOne(
            {
                username: user.username,
            },
            {
                $set: {
                    password: bcrypt.hashSync(newpassword, 8),
                },
            }
        );
        if (updation.modifiedCount == 1) {
            res.status(201).send({
                message: "Password updated !",
                redirectTo: "/",
            });
        } else
            res.status(401).send({
                error: "Failed to update Password",
            });
    } catch (error) {
        console.log("Error while updating password: ", error);
        res.status(501).send({
            error: "Failed to update Password",
        });
    }
};

const validateToken = async (req, res) => {
    try {
        // Token is already validated by middleware (validateToken)
        const user = req.user;
        res.status(200).send({ isValid: true, role: user.role });
    } catch (error) {
        res.status(401).send({ isValid: false, error: "Invalid token" });
    }
};



module.exports = {
    signup: signup,
    login: login,
    changePassword: changePassword,
    validateToken: validateToken,
};