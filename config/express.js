const express = require("express");
const morgan = require("morgan");

function connectDB(app) {
  app.use(express.json({ connection: "active" }));
  app.use(morgan("dev"));
}

module.exports = connectDB;
