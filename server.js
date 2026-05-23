/*
require("dotenv").config();
const express = require("express");
const http = require("http");
const sequelize = require("./src/config/postgre");
const connectMongoDB = require("./src/config/mongo");
const chatRoutes = require("./src/routes/chatRoutes");
const socketConnection = require("./src/sockets/socket");
const authRoutes = require("./src/routes/authRoutes");
const app = express();
const server = http.createServer(app);


app.use(express.json());
connectMongoDB();
sequelize
  .sync()
  .then(() => {
    console.log("PostgreSQL connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);
app.get("/", (req, res) => {
    res.send("Chat App Running");
});

socketConnection(server);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/

require("dotenv").config();

const express = require("express");
const http = require("http");

const connectMongoDB = require("./src/config/mongo");
const sequelize = require("./src/config/postgre");

const socketConnection = require("./src/sockets/socket");

const authRoutes = require("./src/routes/authRoutes");
const chatRoutes = require("./src/routes/chatRoutes");

const app = express();

const server = http.createServer(app);

app.use(express.json());

connectMongoDB();

sequelize.sync()
    .then(() => {
        console.log("PostgreSQL connected");
    });

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.send("Chat App Running");
});

socketConnection(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
