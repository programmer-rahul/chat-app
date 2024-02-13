import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(express.static("public"));

// routes

export default app;
