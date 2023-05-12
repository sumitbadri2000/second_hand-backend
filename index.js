const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { LoginRouter } = require("./Routes/login.routes");
const { connection } = require("./db");

const server = express();

server.use(
  cors({
    origin: "*",
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.send("home");
});

server.use("/user", LoginRouter);

server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connect");
  } catch (error) {
    console.log("error");
  }
  console.log(`connect your port ${process.env.PORT}`);
});
