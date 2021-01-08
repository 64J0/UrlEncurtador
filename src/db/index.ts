import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";

import IDatabase from "../@types/iDatabase";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

class Database implements IDatabase {
  constructor() {
    this._connect();
    this._logMessages();
  }

  _connect() {
    const isProd = process.env.EXEC_ENV === "prod";
    const connectionString  = isProd ? 
      process.env.DB_CONNECTION_STRING_PROD : 
      process.env.DB_CONNECTION_STRING;

    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: false,
        serverSelectionTimeoutMS: 10 * 1000, // 10 s
      }).catch(err => {
        console.error(`Error in initial connection to MongoDB. More info: \n${err}`);
      });
  }

  _logMessages() {
    const db = mongoose.connection;

    db.on("connected", () => {
      console.log("Mongoose default connection is open.");
    });

    db.on("disconnected", () => {
      console.log("Mongoose default connection is closed.");
    });

    db.on("error", (error) => {
      console.error(`Error after initial connection to MongoDB has been established. More info: \n${error}`);
    });
  }
}

export default Database;
