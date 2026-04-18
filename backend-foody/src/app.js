require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());


app.use(cors({
  aorigin: "http://localhost:3000",
  credentials: "include"
    }));

const authRouter = require("./routes/authRoutes");

const cookieParser = require("cookie-parser")
app.use(cookieParser());

const {checkGlobal} = require('./middleware/checkGlobal')

app.use("/api/auth",authRouter);
app.use(checkGlobal);





module.exports = app;