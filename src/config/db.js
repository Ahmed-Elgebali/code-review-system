require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected Succesfuly");
    } catch (error) {
        console.error("Error connecting", error);
        process.exit(1);
    }
};

module.exports = connectDB;