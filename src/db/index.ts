import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

import IDatabase from "../@types/idatabase";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

class Database implements IDatabase {
  init() {
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
  }
}

export default Database;
