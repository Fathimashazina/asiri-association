import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  // .connect('mongodb+srv://aslamsaleem:aslamsaleem@asiri.jwo54lq.mongodb.net/?retryWrites=true&w=majority&appName=Asiri')
  .then(() => {
    console.log("db is connected!");
  })
  .catch((err) => console.log(err));
const app = express();

app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
  console.log("server is running on port 3000!!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);


app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })
})