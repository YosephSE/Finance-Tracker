import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI =
  "mongodb+srv://yoseph:pass%40123@everydollar.yvssl.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect", err));

app.listen(port, () => console.log("Serving on port ", port));
