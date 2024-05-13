const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

// Middlewares
server.use(morgan("dev"));

server.use(express.json());
server.use(cors());

// Ruta principal
server.use(router);

module.exports = server;
