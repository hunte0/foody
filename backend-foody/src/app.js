require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());



const authRouter = require("./routes/authRoutes");

const cookieParser = require("cookie-parser")
app.use(cookieParser());

const {checkGlobal} = require('./middleware/checkGlobal')

app.use("/api/auth",authRouter);
app.use(checkGlobal);





module.exports = app;