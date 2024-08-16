import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURI: string = process.env.MONGO_URI!;

if (!mongoURI) {
  throw new Error("MONGO_URI environment variable is not set");
}
export const connectDB = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect", err));
};
