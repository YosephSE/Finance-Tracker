import express, { Express } from "express";
import mongoose from "mongoose";
require("dotenv").config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = process.env.MONGO_URI!;

if (!mongoURI) {
  throw new Error("MONGO_URI environment variable is not set");
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect", err));

app.listen(port, () => console.log("Serving on port ", port));
