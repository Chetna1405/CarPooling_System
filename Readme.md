# 🚘 MoveInSync - CarPooling System Solution

## 📖 Overview
The **CarPooling System** is designed to make ride-sharing easy and efficient. Users can offer rides, search for available ones based on location and time, and manage their carpooling activities—all from a single platform.

Whether you're a driver looking to fill empty seats or a passenger searching for a ride, this system connects people to help save time, money, and the environment.

---
## ✍ Documentation
Here is the detailed documentation of the carpooling system along with the working of API's and the MongoDB structure models .

[View Documentation With API Workings](https://docs.google.com/document/d/1AgXR6Tzj5yzekjiPyvJRCDdce5YGDsTo0Qvj-uFnf4A/edit?pli=1&tab=t.0)

## 🎥 Video Demonstration
Here is the link for the video demonstration of the working of the Carpooling system using postman API.

[Video Demonstration of working of System](https://drive.google.com/drive/u/0/folders/16zzaOLPw2MAoyG6MDrmAc_cvbvHtzKgO)

---

## ✨ Features

- 🔐 **User Registration and Authentication**  
  Secure sign-up/login with token-based authentication.

- 🚗 **Ride Offering**  
  Drivers can post rides with details like date, time, preferences, available seats, etc.

- 🔍 **Ride Searching**  
  Search for rides by route matching percentage using latitude , longitude and preferences.

- 📅 **Ride Requests**  
  As a Rider , Request for rides and driver will approve or reject the ride.

- 🔔 **Real-Time Rides Availability**  
  Get instant updates on ride status, requests and availability.

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
- **JWT** for auth
- **Mongoose** for MongoDB object modeling

---

## 📁 Project Directory Structure
```
CarPooling_System/
├── backend
    ├── controllers/
    │   ├── auth.controller.js
    │   ├── ride.controller.js        
    │   └── vehicle.controller.js     
    │
    ├── logs/
    │   ├── error.log 
    │   └── server.log
    |
    ├── middlewares/
    │   ├── auth.middleware.js 
    │   ├── ride.middleware.js
    │   └── vehicle.middleware.js
    │
    ├── models/
    │   ├── ride.model.js         
    │   ├── user.model.js              
    │   └── vehicle.model.js          
    │
    ├── routes/
    │   ├── auth.route.js     
    │   ├── ride.route.js       
    │   └── vehicle.route.js     
    |
    ├── .env                  
    ├── .gitignore           
    ├── index.js 
    ├── package.json 
    ├── websocket.js
    └── README.md   
```

## 🚀 Installation & Setup


- Node js 

- Mongodb 


### 🔧 Steps to Run

1. **Clone the repository**  
    ```bash
    git clone https://github.com/your-username/CarPooling_System.git
    ```

2. **Navigate into the directory**  
    ```bash
    cd backend
    ```

3. **Install backend dependencies**  
    ```bash
    npm install
    ```

4. **Start the backend server**  
    ```bash
    npm start
    ```

---
## ⚙️ Environment Variables

Create a `.env` file in your project in backend folder and add the following variables:

```env
# Application Config
PORT=8080

# Database
MONGODB_URL="mongodb://localhost:27017/database_name"

# Authentication
SECRET=Your_JWT_Secret_key
```

---

## 📚 Resources

- [Node.js ](https://nodejs.org/en/docs/)
- [Express.js ](https://expressjs.com/)
- [MongoDB ](https://www.mongodb.com/docs/)
- [Mongoose ](https://mongoosejs.com/docs/)
- [WebSocket ](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Winston Logger](https://github.com/winstonjs/winston)
