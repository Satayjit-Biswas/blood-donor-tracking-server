const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// import all route here

const userRoute = require("./routes/user.route.js");


// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("DB Disconnected");
});

app.get("/", (req, res) => {
    res.send("Welcome to server");
});


// use all router from here
app.use("/api", userRoute);
// app.use("/api/user", userRoute);


app.listen(port, () => {
    connect();
    console.log("Server is Running");
    console.log(`Example app listening at http://localhost:${port}`);
  });
  