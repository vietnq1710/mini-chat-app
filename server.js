require("dotenv").config();
const express = require("express");
const sequelize = require("./src/config/postgre");
const connectMongoDB = require("./src/config/mongo");
const chatRoutes = require("./src/routes/chatRoutes");
const app = express();

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log("PostgreSQL connected");
  })
  .catch((err) => {
    console.log(err);
  });

connectMongoDB();
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
    res.send("Chat App Running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});