# Mini Chat App 
Realtime chat app built with:
- Node.js
- Express
- MongoDB
- PostgreSQL
- Socket.IO
- JWT Authentication

## Features
- RESTful APIs
- MongoDB message storage
- PostgreSQL user management
- JWT authentication
- Realtime messaging

## Project Structure
chat_app/
│
├── src/
│   ├── config/
│   │   ├── mongo.js
│   │   └── postgre.js
│   │
│   ├── controllers/
│   │   └── authController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── mongo/
│   │   │   └── Message.js
│   │   │
│   │   └── postgre/
│   │       └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── ChatRoutes.js
│   │
│   └── sockets/
│       └── socket.js
│
├── server.js
├── socket-test.html
├── .env
├── package.json
└── README.md

## Future Improvements
React Frontend
Group Chat
Message Read Status
File/Image Upload

## Run Project
npm install
npm run dev