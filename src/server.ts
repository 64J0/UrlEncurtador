import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import Database from "./db";

// Banco de dados MongoDB:
import "./models/Url";

const db = new Database();
db.init();

// Configurações do Express:
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors({}));
app.use(morgan("dev"));

const assetsPath = path.resolve(__dirname, "../assets");
app.use(express.static(assetsPath));

const viewsPath = path.resolve(__dirname, "./views");
app.set("views", viewsPath);
app.set("view engine", "ejs");

// Rotas:
import urlRouter from "./routes";
app.use("/", urlRouter);

// Porta e inicialização do servidor:
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
