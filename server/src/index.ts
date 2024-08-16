import express, { Express } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

connectDB();

app.listen(port, () => console.log("Serving on port ", port));
