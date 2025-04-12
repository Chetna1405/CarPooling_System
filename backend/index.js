// Dependencies
const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");
const express = require("express");
const logger = require("./logger");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const corsOptions = {
    origin: "http://localhost:5173", // Match your frontend port
    credentials: true, // Allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());
// Route handlers
const auth_routes = require("./routes/auth.route");
const vehicle_routes = require("./routes/vehicle.route");
const ride_routes = require("./routes/ride.route");

// Configurations

app.use(cookieParser());
app.use(bodyParser.json());
require("dotenv").config();

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

app.use("/user", auth_routes);
app.use("/vehicle", vehicle_routes);
app.use("/ride", ride_routes);

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

// Initialize WebSocket (Separate Module)
const { initializeWebSocket } = require("./websocket");
initializeWebSocket(server);

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});