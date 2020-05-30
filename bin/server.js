"use strict";

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

// Banco de dados MongoDB:
require("../models/Url");
require("../db");

// Configurações do Express:
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));
app.use(morgan("dev"));
const assetsPath = path.resolve(__dirname, "../assets");
app.use(express.static(assetsPath));
const viewsPath = path.resolve(__dirname, "../views");
app.set("views", viewsPath);
app.set("view engine", "ejs");

// Rotas:
let urlRouter = require("../routes/index");
app.use("/", urlRouter);

// Porta e inicialização do servidor:
const port = process.env.PORT || 5000;

app.listen(port, () => {
  port === 5000 ? console.log(`Server running on port ${port}.`) : null;
});
