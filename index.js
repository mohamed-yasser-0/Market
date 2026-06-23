const express = require("express")
import cors from "cors";

const dns = require('dns');
dns.setServers(["1.1.1.1", "1.0.0.1", "8.8.8.8"]);

require("dotenv").config();
const main = require("./controllers/shop.controller")
const router = require("./routes/route")
const app = express()
app.use(cors());
app.use(express.json());
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose");

mongoose.connect(process.env.URL)
    .then(() => console.log("Connected To MongoDB ✅"))
    .catch((err) => console.log(err));



app.use("/api/prodects", router)

app.listen(process.env.PORT, () => {
    console.log("alhamd lla")
})


