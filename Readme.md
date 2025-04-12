# 🚘 CarPooling System Backend

## 📖 Overview
The **CarPooling System** is designed to make ride-sharing easy and efficient. Users can offer rides, search for available ones based on location and time, and manage their carpooling activities—all from a single platform.

Whether you're a driver looking to fill empty seats or a passenger searching for a ride, this system connects people to help save time, money, and the environment.

---

## ✨ Features

- 🔐 **User Registration and Authentication**  
  Secure sign-up/login with session or token-based authentication.

- 🚗 **Ride Offering**  
  Drivers can post rides with details like date, time, route, available seats, etc.

- 🔍 **Ride Searching**  
  Search for rides by source, destination, time, and preferences.

- 📅 **Ride Requests**  
  As a Rider , Request for rides and driver will approve or reject the ride.

- 🔔 **Real-Time Rides Availability**  
  Get instant updates on ride bookings, confirmations, and changes.

- 💬 **WebSocket-based Ride Matching**  
  Real-time ride suggestions and updates based on live criteria.

---

## 🛠️ Technologies Used

### Backend
- **Node.js** with **Express.js**
- **MongoDB** for NoSQL database
- **WebSocket** for real-time ride matching
- **Winston** for structured logging

### Others
- JWT or OAuth for auth
- [Optional] **Docker** for containerization
- **Mongoose** for MongoDB object modeling

---

## 📁 Project Directory Structure
<pre> CarPooling_System/ ├── backend/ │ ├── controllers/ │ │ ├── auth.controller.js │ │ ├── ride.controller.js │ │ └── vehicle.controller.js │ │ │ ├── logs/ │ │ ├── error.log │ │ └── server.log │ │ │ ├── middlewares/ │ │ ├── auth.middleware.js │ │ ├── ride.middleware.js │ │ └── vehicle.middleware.js │ │ │ ├── models/ │ │ ├── ride.model.js │ │ ├── user.model.js │ │ └── vehicle.model.js │ │ │ ├── routes/ │ │ ├── auth.route.js │ │ ├── ride.route.js │ │ └── vehicle.route.js │ │ │ ├── .env │ ├── .gitignore │ ├── index.js │ ├── package.json │ ├── websocket.js │ └── README.md </pre>
## 🚀 Installation & Setup

### 📦 Prerequisites
- Node.js
- MongoDB

### 🔧 Steps to Run

1. **Clone the repository**  
    ```bash
    git clone https://github.com/your-username/CarPooling_System.git
    ```

2. **Navigate into the directory**  
    ```bash
    cd CarPooling_System
    ```

3. **Install backend dependencies**  
    ```bash
    npm install
    ```

4. **Start the backend server**  
    ```bash
    npm start
    ```

> 💡 You can add a `.env` file for environment variables (e.g., MONGODB_URI, JWT_SECRET).

---

## 💻 Usage Guide

1. **Register or Log In** to access the dashboard.
2. **Offer a Ride** by entering trip details.
3. **Search for Rides** based on your pickup/drop location and time.
4. **Book a Ride** and receive updates via notifications.
5. **Manage Bookings** in your profile.

---

## 🧪 Future Improvements

- Payment Integration (e.g., Razorpay, Stripe)
- Route Optimization using Google Maps API
- Admin Dashboard for system moderation
