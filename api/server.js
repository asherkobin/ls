const express = require("express");
const helmet = require("helmet");
const server = express();
const cors = require("cors");
const studentsRouter = require("../students/router");
const cohortsRouter = require("../cohorts/router");

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json("Server OK");
});

server.use("/api/students", studentsRouter);
server.use("/api/cohorts", cohortsRouter);

module.exports = server;
