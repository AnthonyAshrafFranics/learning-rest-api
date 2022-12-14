const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");

const app = express();
app.use(express.json());
app.use("/users", router);

mongoose.connect("mongodb+srv://admin:VCn3LiomW5SfHUQL@cluster0.3dvvpyi.mongodb.net/?retryWrites=true&w=majority").then(() => app.listen(5000, () => console.log("Connected and Listening on Port 5000"))).catch((err) => console.log(err));