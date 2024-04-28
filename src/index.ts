import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MANGO_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB!!"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", async (req: Request, res: Response) => {
  res.json({message: "Hello World"});
});

app.listen(4000, () => console.log("Server started on port 4000"));