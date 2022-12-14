const express = require("express");
// const http = require("http")

const app = express();

app.use("/", (req,res,next) => {
    res.send("Anthony");
})


app.listen(5000, () => console.log("Connected to localhost port 5000"));