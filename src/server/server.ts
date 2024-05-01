// server.ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import authRouter from "../routes/authRouter";
import userRouter from "../routes/userRouter";
import { errorHandler } from "../middleware/errorMiddleware";
import connectUserDB from "../connections/userDB";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(authRouter);
app.use("/users", userRouter);

app.use(errorHandler);

connectUserDB();
