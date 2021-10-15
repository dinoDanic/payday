import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import usersRoute from "./routes/users.route.js";

const app = express();
dotenv.config();

app.use(express.json);
app.use(cors());

app.use("/users", usersRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(5000);
    console.log("connected to port", process.env.PORT);
  })
  .catch((err) => console.log(err.message));
