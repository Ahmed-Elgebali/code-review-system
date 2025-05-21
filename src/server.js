require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const codeRoutes = require("./routes/codeRoutes");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");

const app = express();

//Middelware
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routes
app.use(authRoutes);
app.use(codeRoutes);

app.get("/", (req, res)=>{
    res.send("Api is Runing...");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Connected on ${PORT}`));

console.log(process.env.JWT_SECRET);
