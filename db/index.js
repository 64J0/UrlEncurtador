"use strict";

const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

// Banco de dados:
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose default connection is on.");
});

db.on("error", (error) => {
  console.log({ Error: error });
});

module.exports = db;
