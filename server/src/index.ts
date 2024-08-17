import express, { Express } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import recordRouter from "./routes/record";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', recordRouter)

connectDB();

app.listen(port, () => console.log("Serving on port ", port));
